import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentSalesCoachContent from "@/sections/resources/ResourceAgentSalesCoachContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/sales-coach";
const PAGE_TITLE = "AI Sales Coach";
const PAGE_DESCRIPTION =
  "AI sales coach agent for sales pitches, objection handling, deal preparation, and structured sales coaching feedback.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const salesCoachSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentSalesCoachPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-sales-coach-schema" data={salesCoachSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentSalesCoachContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
