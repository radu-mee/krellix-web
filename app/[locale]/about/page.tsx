import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import AboutContent from "@/sections/about/AboutContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/about"),
  title: "About",
  description: "Learn why Krellix exists and what we believe about human and AI collaboration.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}