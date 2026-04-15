import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/content/blog/posts";
import { getBlogSeoBySlug } from "@/content/blog/seo";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import BlogArticleContent from "@/sections/blog/BlogArticleContent";

type BlogArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function splitKeywords(csv: string): string[] {
  return csv
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0);
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    getBlogPosts().map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article",
    };
  }

  const seo = getBlogSeoBySlug(slug);

  const description = seo?.metaDescription ?? post.excerpt;
  const alternates = buildLocaleAlternates(
    `/blog/${post.slug}`,
    seo?.canonicalPath ?? `/blog/${post.slug}`,
  );
  const canonicalPath =
    typeof alternates.canonical === "string"
      ? alternates.canonical
      : `/en/blog/${post.slug}`;
  const resolvedTitle: Metadata["title"] = seo
    ? { absolute: seo.metaTitle }
    : post.title;

  const ogTitle = seo?.ogTitle ?? post.title;
  const ogDescription = seo?.ogDescription ?? description;

  const keywordSet = new Set<string>();
  if (seo?.primaryKeyword) keywordSet.add(seo.primaryKeyword.trim());
  if (seo?.focusKeyphrase) keywordSet.add(seo.focusKeyphrase.trim());
  if (seo?.secondaryKeywordsCsv) {
    for (const keyword of splitKeywords(seo.secondaryKeywordsCsv)) {
      keywordSet.add(keyword);
    }
  }

  const keywords = keywordSet.size > 0 ? Array.from(keywordSet) : undefined;

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates,
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: ogTitle,
      description: ogDescription,
      publishedTime: `${post.publishedAtIso}T00:00:00.000Z`,
      images: [
        {
          url: post.heroImageSrc,
          alt: post.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [post.heroImageSrc],
    },
    other: seo
      ? {
          "focus-keyphrase": seo.focusKeyphrase,
        }
      : undefined,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <BlogArticleContent post={post} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
