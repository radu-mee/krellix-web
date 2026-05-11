import type { Metadata } from "next";
import { getBlogPosts } from "@/content/blog/posts";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import {
  ORGANIZATION_ID,
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import BlogIndexContent from "@/sections/blog/BlogIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/blog";
const PAGE_TITLE = "Krellix Blog | Working with AI & Real Workflows";
const PAGE_DESCRIPTION =
  "News and insights on working with AI, productivity, and context-aware workflows. See how intelligent systems support real work.";

const blogUrl = buildLocalizedAbsoluteUrl(PAGE_PATH);
const blogId = `${blogUrl}#blog`;
const blogItemListId = `${blogUrl}#itemlist`;
const blogPosts = getBlogPosts();

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: blogId,
});

const blogSchema = {
  "@type": "Blog",
  "@id": blogId,
  name: "Krellix Blog",
  description: PAGE_DESCRIPTION,
  url: blogUrl,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  inLanguage: DEFAULT_LOCALE,
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: buildLocalizedAbsoluteUrl(`/blog/${post.slug}`),
    datePublished: `${post.publishedAtIso}T00:00:00.000Z`,
  })),
};

const blogItemListSchema = {
  "@type": "ItemList",
  "@id": blogItemListId,
  name: "Krellix Blog Articles",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: buildLocalizedAbsoluteUrl(`/blog/${post.slug}`),
  })),
};

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, blogSchema, blogItemListSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

type BlogIndexPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const { page } = await searchParams;
  const parsedPage = Number.parseInt(page ?? "1", 10);
  const currentPage = Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  return (
    <PageFrame>
      <JsonLd id="blog-index-schema" data={blogIndexSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <BlogIndexContent currentPage={currentPage} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
