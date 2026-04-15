import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionProductManagersContent from "@/sections/solutions/SolutionProductManagersContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions/product-managers"),
  title: "Solutions for Product Managers",
  description:
    "See how Krellix helps product managers align roadmap, design, and engineering decisions in one collaborative AI workspace.",
};

export default function SolutionProductManagersPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionProductManagersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
