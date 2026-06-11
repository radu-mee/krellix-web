import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideMarketingCampaignContent from "@/sections/resources/ResourceGuideMarketingCampaignContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-run-a-marketing-campaign-with-ai";
const PAGE_TITLE = "How to Run a Marketing Campaign with AI";
const PAGE_DESCRIPTION =
  "A practical guide to using AI marketing for campaign planning, messaging, content creation, execution, and performance analysis.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const marketingCampaignAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideMarketingCampaignPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-marketing-campaign-ai-schema" data={marketingCampaignAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideMarketingCampaignContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
