import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionsIndexContent from "@/sections/solutions/SolutionsIndexContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions"),
  title: "Solutions",
  description:
    "Explore Krellix workflows for founders, product managers, marketers, developers, designers, and researchers.",
};

export default function SolutionsPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionsIndexContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
