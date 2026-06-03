import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentSeoStrategistContent from "@/sections/resources/ResourceAgentSeoStrategistContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/seo-strategist";
const PAGE_TITLE = "AI SEO Strategist";
const PAGE_DESCRIPTION =
  "AI SEO strategist for keyword research, topical authority, technical SEO, and long-term organic growth.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const seoStrategistSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentSeoStrategistPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-seo-strategist-schema" data={seoStrategistSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentSeoStrategistContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
