#!/usr/bin/env node
// Shrinks SVGs exported from Figma by re-encoding the PNG/JPEG pictures that
// Figma embeds inside them (avatars, photos, screenshots) as high-quality WebP.
// The vector parts (text, shapes, layout) are left untouched, so text stays
// perfectly sharp at any zoom and the file renders the same in the browser.
//
// Usage:
//   npm run images:optimize                 # every SVG under public/
//   npm run images:optimize -- path/a.svg   # specific files or folders
//   npm run images:optimize -- --dry-run    # report savings, write nothing
//
// Safe to run repeatedly: pictures already in WebP are skipped, and a picture
// is only replaced when the WebP version is smaller. Files under 20 KB (icons,
// the favicon) are skipped: little to gain, and some icon renderers may not
// support WebP inside SVG.

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MIN_FILE_BYTES = 20 * 1024;
const WEBP_OPTIONS = { quality: 90, alphaQuality: 100, effort: 6 };
const EMBEDDED_RASTER = /data:image\/(png|jpe?g);base64,([A-Za-z0-9+/=\s]+)/g;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const targets = args.filter((arg) => !arg.startsWith("--"));

async function collectSvgFiles(target) {
  const info = await stat(target);
  if (info.isFile()) {
    return target.endsWith(".svg") ? [target] : [];
  }
  const entries = await readdir(target, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => collectSvgFiles(path.join(target, entry.name))),
  );
  return nested.flat();
}

async function optimizeSvg(file) {
  if ((await stat(file)).size < MIN_FILE_BYTES) {
    return null;
  }
  const source = await readFile(file, "utf8");
  const matches = [...source.matchAll(EMBEDDED_RASTER)];
  if (matches.length === 0) {
    return null;
  }

  const parts = [];
  let cursor = 0;
  let replaced = 0;

  for (const match of matches) {
    const original = Buffer.from(match[2].replace(/\s/g, ""), "base64");
    const webp = await sharp(original).webp(WEBP_OPTIONS).toBuffer();
    parts.push(source.slice(cursor, match.index));
    if (webp.length < original.length) {
      parts.push(`data:image/webp;base64,${webp.toString("base64")}`);
      replaced += 1;
    } else {
      parts.push(match[0]);
    }
    cursor = match.index + match[0].length;
  }
  parts.push(source.slice(cursor));

  const output = parts.join("");
  const before = Buffer.byteLength(source);
  const after = Buffer.byteLength(output);
  if (replaced === 0 || after >= before) {
    return null;
  }

  if (!dryRun) {
    await writeFile(file, output);
  }
  return { file, before, after, replaced, total: matches.length };
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const roots = targets.length > 0 ? targets : ["public"];
const files = (await Promise.all(roots.map(collectSvgFiles))).flat();

let totalBefore = 0;
let totalAfter = 0;
let changed = 0;

for (const file of files) {
  const result = await optimizeSvg(file);
  if (!result) continue;
  changed += 1;
  totalBefore += result.before;
  totalAfter += result.after;
  console.log(
    `${kb(result.before).padStart(8)} -> ${kb(result.after).padStart(7)}  ` +
      `(${result.replaced}/${result.total} pictures)  ${path.relative(process.cwd(), file)}`,
  );
}

console.log(
  `\n${dryRun ? "[dry run] " : ""}${changed} of ${files.length} SVGs ` +
    `${dryRun ? "would shrink" : "shrunk"}: ${kb(totalBefore)} -> ${kb(totalAfter)}`,
);
