import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionResearchersContent from "@/sections/solutions/SolutionResearchersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/researchers"),
  title: "Solutions for Researchers",
  description:
    "See how Krellix helps researchers synthesize findings, track hypotheses, and preserve continuity across long-running projects.",
};

export default function SolutionResearchersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionResearchersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
