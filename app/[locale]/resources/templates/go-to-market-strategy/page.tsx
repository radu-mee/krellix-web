import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateGoToMarketStrategyContent from "@/sections/resources/ResourceTemplateGoToMarketStrategyContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/go-to-market-strategy";
const PAGE_TITLE = "Go-to-Market Strategy Template";
const PAGE_DESCRIPTION =
  "Go-to-Market Strategy template for product positioning, launch execution, pricing strategy, and market rollout planning.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const goToMarketStrategySchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateGoToMarketStrategyPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-go-to-market-strategy-schema" data={goToMarketStrategySchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateGoToMarketStrategyContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
