import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    const discoveryLinkHeader = [
      "</sitemap.xml>; rel=\"sitemap\"",
      "</index.md>; rel=\"alternate\"; type=\"text/markdown\"",
      "</llms.txt>; rel=\"alternate\"; type=\"text/plain\"",
      "</llms-full.txt>; rel=\"alternate\"; type=\"text/plain\"",
      "</pricing.md>; rel=\"alternate\"; type=\"text/markdown\"",
      "</.well-known/agent.json>; rel=\"describedby\"; type=\"application/json\"",
      "</.well-known/agent-card.json>; rel=\"describedby\"; type=\"application/json\"",
      "</.well-known/ai-plugin.json>; rel=\"service-desc\"; type=\"application/json\"",
      "</.well-known/mcp>; rel=\"service\"; type=\"application/json\"",
      "</.well-known/mcp/server-card.json>; rel=\"service-desc\"; type=\"application/json\"",
    ].join(", ");

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: discoveryLinkHeader,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/en/blog/what-are-ai-hallucinations",
        destination: "/en/blog/what-is-an-ai-hallucination",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
