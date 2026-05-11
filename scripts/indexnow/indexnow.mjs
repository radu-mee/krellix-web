#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const INDEXNOW_ENDPOINT =
  process.env.INDEXNOW_ENDPOINT ?? "https://api.indexnow.org/indexnow";
const DEFAULT_SITE_URL =
  process.env.INDEXNOW_SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://krellixlabs.com";
const MAX_URLS_PER_REQUEST = 10000;
const DEFAULT_BATCH_SIZE = 1000;
const KEY_FILE_PATTERN = /^[A-Za-z0-9-]{8,128}\.txt$/;

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..", "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

function printUsage() {
  console.log(`IndexNow utility

Usage:
  node scripts/indexnow/indexnow.mjs submit-sitemap [--sitemap-url <url>] [--site-url <url>]
  node scripts/indexnow/indexnow.mjs submit-url <url> [more urls...] [--site-url <url>]
  node scripts/indexnow/indexnow.mjs submit-file <file-path> [--site-url <url>]

Options:
  --site-url <url>      Base site URL (default: INDEXNOW_SITE_URL, NEXT_PUBLIC_SITE_URL, or https://krellixlabs.com)
  --sitemap-url <url>   Sitemap URL (default: <site-url>/sitemap.xml)
  --key <value>         IndexNow key (default: auto-discover from public/*.txt key file)
  --key-file <path|url> Key file path or URL. If path, it's resolved from project root.
  --batch-size <n>      URLs per request (default: ${DEFAULT_BATCH_SIZE}, max: ${MAX_URLS_PER_REQUEST})
  --dry-run             Show payload summary without sending requests
  --non-fatal           Exit 0 even if submission fails
  --help                Show this help
`);
}

function parseArgs(argv) {
  const options = {
    dryRun: false,
    nonFatal: false,
    batchSize: DEFAULT_BATCH_SIZE,
    urls: [],
    positional: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    switch (arg) {
      case "--site-url":
        options.siteUrl = argv[++index];
        break;
      case "--sitemap-url":
        options.sitemapUrl = argv[++index];
        break;
      case "--key":
        options.key = argv[++index];
        break;
      case "--key-file":
        options.keyFile = argv[++index];
        break;
      case "--batch-size":
        options.batchSize = Number.parseInt(argv[++index] ?? "", 10);
        break;
      case "--url":
        options.urls.push(argv[++index]);
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--non-fatal":
        options.nonFatal = true;
        break;
      case "--help":
      case "-h":
        options.help = true;
        break;
      default:
        options.positional.push(arg);
    }
  }

  return options;
}

function normalizeSiteUrl(siteUrlRaw) {
  let normalized = siteUrlRaw.trim();
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`;
  }
  const parsed = new URL(normalized);
  parsed.pathname = "/";
  parsed.search = "";
  parsed.hash = "";
  return parsed.toString().replace(/\/$/, "");
}

function chunkArray(values, chunkSize) {
  const chunks = [];
  for (let index = 0; index < values.length; index += chunkSize) {
    chunks.push(values.slice(index, index + chunkSize));
  }
  return chunks;
}

function decodeXml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function readLinesFile(filePathRaw) {
  const filePath = path.isAbsolute(filePathRaw)
    ? filePathRaw
    : path.resolve(PROJECT_ROOT, filePathRaw);
  const content = await fs.readFile(filePath, "utf8");
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

async function readSitemapUrls(sitemapUrl) {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap (${response.status} ${response.statusText})`);
  }
  const xml = await response.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/gims)];
  const urls = matches.map((match) => decodeXml(match[1]?.trim() ?? ""));
  return urls.filter(Boolean);
}

function normalizeAndValidateUrls(rawUrls, expectedHost) {
  const normalized = new Set();

  for (const rawUrl of rawUrls) {
    try {
      const parsed = new URL(rawUrl);
      if (parsed.host !== expectedHost) {
        throw new Error(`host mismatch (${parsed.host})`);
      }
      parsed.hash = "";
      normalized.add(parsed.toString());
    } catch (error) {
      throw new Error(`Invalid URL "${rawUrl}": ${error.message}`);
    }
  }

  return [...normalized];
}

async function discoverKeyFile() {
  const files = await fs.readdir(PUBLIC_DIR);
  const candidates = [];

  for (const fileName of files) {
    if (!KEY_FILE_PATTERN.test(fileName)) {
      continue;
    }
    const fullPath = path.join(PUBLIC_DIR, fileName);
    const stat = await fs.stat(fullPath);
    if (!stat.isFile()) {
      continue;
    }
    const content = (await fs.readFile(fullPath, "utf8")).trim();
    const keyFromName = fileName.replace(/\.txt$/i, "");
    if (content === keyFromName) {
      candidates.push({ fileName, key: content });
    }
  }

  if (candidates.length === 0) {
    throw new Error(
      "No IndexNow key file found in public/. Add <key>.txt containing only the key.",
    );
  }

  if (candidates.length > 1) {
    const names = candidates.map((candidate) => candidate.fileName).join(", ");
    throw new Error(
      `Multiple IndexNow key files found (${names}). Use --key-file to select one.`,
    );
  }

  return candidates[0];
}

async function resolveKeyInfo({ siteUrl, key, keyFile }) {
  if (key && !/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error("INDEXNOW key format is invalid.");
  }

  if (keyFile?.startsWith("http://") || keyFile?.startsWith("https://")) {
    const keyLocation = new URL(keyFile).toString();
    const resolvedKey = key ?? path.basename(new URL(keyLocation).pathname, ".txt");
    return {
      key: resolvedKey,
      keyLocation,
    };
  }

  if (keyFile) {
    const resolvedPath = path.isAbsolute(keyFile)
      ? keyFile
      : path.resolve(PROJECT_ROOT, keyFile);
    const fileName = path.basename(resolvedPath);
    const content = (await fs.readFile(resolvedPath, "utf8")).trim();
    const keyFromName = fileName.replace(/\.txt$/i, "");
    const resolvedKey = key ?? content;

    if (content !== resolvedKey) {
      throw new Error(
        `Key mismatch in ${fileName}. File content must match the key used for submission.`,
      );
    }

    const keyLocation = `${siteUrl}/${fileName}`;
    return { key: keyFromName, keyLocation };
  }

  if (key) {
    return {
      key,
      keyLocation: `${siteUrl}/${key}.txt`,
    };
  }

  const discovered = await discoverKeyFile();
  return {
    key: discovered.key,
    keyLocation: `${siteUrl}/${discovered.fileName}`,
  };
}

async function submitBatch({
  host,
  key,
  keyLocation,
  urlList,
}) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const text = await response.text();
  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    body: text.trim(),
  };
}

async function run() {
  const args = process.argv.slice(2);
  const [command, ...rest] = args;
  const options = parseArgs(rest);

  if (!command || options.help) {
    printUsage();
    process.exit(command ? 0 : 1);
  }

  if (!["submit-sitemap", "submit-url", "submit-file"].includes(command)) {
    throw new Error(`Unknown command "${command}".`);
  }

  if (
    !Number.isInteger(options.batchSize) ||
    options.batchSize < 1 ||
    options.batchSize > MAX_URLS_PER_REQUEST
  ) {
    throw new Error(
      `Invalid --batch-size "${options.batchSize}". Use a value between 1 and ${MAX_URLS_PER_REQUEST}.`,
    );
  }

  const siteUrl = normalizeSiteUrl(options.siteUrl ?? DEFAULT_SITE_URL);
  const siteHost = new URL(siteUrl).host;

  const { key, keyLocation } = await resolveKeyInfo({
    siteUrl,
    key: options.key ?? process.env.INDEXNOW_KEY,
    keyFile: options.keyFile ?? process.env.INDEXNOW_KEY_FILE,
  });

  let rawUrls = [];

  if (command === "submit-sitemap") {
    const sitemapUrl = options.sitemapUrl ?? `${siteUrl}/sitemap.xml`;
    rawUrls = await readSitemapUrls(sitemapUrl);
    console.log(`Loaded ${rawUrls.length} URLs from sitemap: ${sitemapUrl}`);
  } else if (command === "submit-url") {
    rawUrls = [...options.positional, ...options.urls];
  } else if (command === "submit-file") {
    const filePath = options.positional[0];
    if (!filePath) {
      throw new Error("submit-file requires a file path argument.");
    }
    rawUrls = await readLinesFile(filePath);
    console.log(`Loaded ${rawUrls.length} URLs from file: ${filePath}`);
  }

  const urls = normalizeAndValidateUrls(rawUrls, siteHost);
  if (urls.length === 0) {
    throw new Error("No URLs to submit.");
  }

  const batches = chunkArray(urls, options.batchSize);

  console.log(`IndexNow endpoint: ${INDEXNOW_ENDPOINT}`);
  console.log(`Host: ${siteHost}`);
  console.log(`Key location: ${keyLocation}`);
  console.log(`URL count: ${urls.length} (${batches.length} batch(es))`);

  if (options.dryRun) {
    console.log("Dry run enabled. No IndexNow requests were sent.");
    return;
  }

  let failed = 0;

  for (let index = 0; index < batches.length; index += 1) {
    const batch = batches[index];
    const result = await submitBatch({
      host: siteHost,
      key,
      keyLocation,
      urlList: batch,
    });

    if (!result.ok) {
      failed += 1;
      console.error(
        `Batch ${index + 1}/${batches.length} failed: ${result.status} ${result.statusText}`,
      );
      if (result.body) {
        console.error(result.body);
      }
      continue;
    }

    console.log(`Batch ${index + 1}/${batches.length} submitted (${batch.length} URLs).`);
  }

  if (failed > 0) {
    throw new Error(`${failed} batch(es) failed.`);
  }

  console.log("IndexNow submission completed successfully.");
}

run().catch((error) => {
  if (process.argv.includes("--non-fatal")) {
    console.error(`IndexNow warning: ${error.message}`);
    process.exit(0);
  }
  console.error(`IndexNow error: ${error.message}`);
  process.exit(1);
});
