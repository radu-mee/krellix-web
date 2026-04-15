import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import HomeContent from "@/sections/home/HomeContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/"),
  title: "AI Copilots Working as a Team | Krellix",
  description:
    "AI copilots collaborating in a multi-agent system to improve decisions, workflows, and productivity. Start your AI workspace today.",
};

export default function HomePage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HomeContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
