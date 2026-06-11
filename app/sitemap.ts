import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/content/blog/posts";
import { localizePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/join-waitlist",
  "/registration-successful",
  "/download",
  "/press-kit",
  "/pricing",
  "/solutions",
  "/resources",
  "/resources/agents",
  "/resources/agents/customer-manager",
  "/resources/agents/data-analyst",
  "/resources/agents/executive-coach",
  "/resources/agents/financial-analyst",
  "/resources/agents/legal-expert",
  "/resources/agents/project-manager",
  "/resources/agents/sales-coach",
  "/resources/agents/seo-strategist",
  "/resources/agents/ux-researcher",
  "/resources/agents/recruiting-agent",
  "/resources/agents/social-media-manager",
  "/resources/agents/technical-support-agent",
  "/resources/templates",
  "/resources/templates/architecture-decision-record",
  "/resources/templates/creative-brief",
  "/resources/templates/competitor-analysis-framework",
  "/resources/templates/go-to-market-strategy",
  "/resources/templates/job-description",
  "/resources/templates/meeting-agenda-template",
  "/resources/templates/okr-planning-template",
  "/resources/templates/sales-call-debrief",
  "/resources/templates/product-requirements-document",
  "/resources/templates/sprint-retrospective-template",
  "/resources/templates/weekly-status-report",
  "/resources/templates/project-planning-template",
  "/resources/guides",
  "/resources/guides/ai-prompts-for-product-managers",
  "/resources/guides/how-developers-can-use-ai-for-code-review",
  "/resources/guides/how-to-build-an-ai-workflow-for-your-team",
  "/resources/guides/how-to-onboard-your-team-to-ai-without-the-pushback",
  "/resources/guides/how-to-run-a-marketing-campaign-with-ai",
  "/resources/guides/how-to-run-better-meetings-with-ai",
  "/resources/guides/how-to-use-ai-for-competitive-analysis",
  "/resources/guides/how-to-use-ai-for-data-analysis",
  "/resources/guides/how-to-use-ai-for-user-research",
  "/resources/guides/how-to-write-a-prd-with-ai",
  "/resources/guides/how-to-write-a-system-prompt-for-ai-agents",
  "/resources/guides/the-beginners-guide-to-ai-agents",
  "/en/solutions/founders",
  "/en/solutions/product-managers",
  "/en/solutions/marketers",
  "/en/solutions/developers",
  "/en/solutions/designers",
  "/en/solutions/researchers",
  "/contact",
  "/blog",
  "/cookie-policy",
  "/privacy-policy",
  "/terms-of-service",
  "/subprocessors",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route, index) => ({
    url: `${siteConfig.siteUrl}${localizePath(route)}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${siteConfig.siteUrl}${localizePath(`/blog/${post.slug}`)}`,
    lastModified: new Date(post.publishedAtIso),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
