import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionMarketersContent from "@/sections/solutions/SolutionMarketersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/marketers"),
  title: "Solutions for Marketers",
  description:
    "See how Krellix helps marketers align strategy, messaging, and performance in one collaborative AI workspace.",
};

export default function SolutionMarketersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionMarketersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
