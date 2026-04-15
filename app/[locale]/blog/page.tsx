import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import BlogIndexContent from "@/sections/blog/BlogIndexContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/blog"),
  title: "Blog",
  description: "News, updates and hot takes from Krellix.",
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
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <BlogIndexContent currentPage={currentPage} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
