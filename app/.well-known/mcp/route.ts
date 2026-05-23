import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

function toAbsolute(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export async function GET() {
  const payload = {
    mcp_version: "1.0",
    endpoints: [
      {
        type: "streamable-http",
        url: toAbsolute("/mcp"),
      },
    ],
    server_card_url: toAbsolute("/.well-known/mcp/server-card.json"),
    documentation_url: toAbsolute("/en/developers"),
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
