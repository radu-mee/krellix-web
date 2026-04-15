import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import PressKitHero from "@/sections/press-kit/PressKitHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/press-kit"),
  title: "Press kit",
  description: "Download official Krellix brand assets in SVG and PNG formats.",
};

export default function PressKitPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PressKitHero />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}