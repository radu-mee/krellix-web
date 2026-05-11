import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
