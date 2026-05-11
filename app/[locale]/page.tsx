import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import HomeContent from "@/sections/home/HomeContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_TITLE = "AI Copilots Working as a Team";
const PAGE_DESCRIPTION =
  "AI copilots collaborating in a multi-agent system to improve decisions, workflows, and productivity. Start your AI workspace today.";

const { webPageSchema } = buildWebPageSchema({
  path: "/",
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/"),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <PageFrame>
      <JsonLd id="home-schema" data={homeSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HomeContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
