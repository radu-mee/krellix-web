import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

function toAbsolute(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export async function GET() {
  const payload = {
    $schema: "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
    version: "1.0",
    protocolVersion: "2025-06-18",
    serverInfo: {
      name: "krellix",
      title: "Krellix MCP Server",
      version: "0.1.0",
    },
    description:
      "Discovery metadata for Krellix MCP integration endpoints and capabilities.",
    documentationUrl: toAbsolute("/en/developers"),
    transport: {
      type: "streamable-http",
      endpoint: "/mcp",
    },
    capabilities: {
      tools: {
        listChanged: true,
      },
      prompts: {
        listChanged: false,
      },
      resources: {
        subscribe: false,
        listChanged: true,
      },
    },
    authentication: {
      required: false,
      schemes: ["none"],
    },
    instructions:
      "Use this server for Krellix workflow context and agent collaboration features when available.",
    _meta: {
      website: toAbsolute("/"),
      support: "support@krellixlabs.com",
    },
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
