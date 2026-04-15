import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionDevelopersContent from "@/sections/solutions/SolutionDevelopersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/developers"),
  title: "Solutions for Developers",
  description:
    "See how Krellix helps developers debate architecture, review trade-offs, and preserve technical context in one collaborative AI workspace.",
};

export default function SolutionDevelopersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionDevelopersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
