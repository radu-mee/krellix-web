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
