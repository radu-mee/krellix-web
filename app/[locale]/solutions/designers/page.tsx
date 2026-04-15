import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionDesignersContent from "@/sections/solutions/SolutionDesignersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/designers"),
  title: "Solutions for Designers",
  description:
    "See how Krellix helps designers align UX, copy, and brand feedback in one collaborative AI workspace.",
};

export default function SolutionDesignersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionDesignersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
