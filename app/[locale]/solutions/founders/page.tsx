import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionFoundersContent from "@/sections/solutions/SolutionFoundersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/founders"),
  title: "Solutions for Founders",
  description:
    "See how Krellix helps founders align strategy, analysis, and marketing in one collaborative AI workspace.",
};

export default function SolutionFoundersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionFoundersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
