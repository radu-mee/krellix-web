import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import PricingContent from "@/sections/pricing/PricingContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/pricing"),
  title: "Pricing",
  description: "Choose the Krellix plan that fits your team and workflow.",
};

export default function PricingPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PricingContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
