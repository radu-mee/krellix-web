import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentFinancialAnalystContent from "@/sections/resources/ResourceAgentFinancialAnalystContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/financial-analyst";
const PAGE_TITLE = "Financial Analyst Agent";
const PAGE_DESCRIPTION =
  "Use an AI financial analyst to evaluate statements, understand unit economics, support forecasting, and turn numbers into clearer business decisions.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const financialAnalystSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentFinancialAnalystPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-financial-analyst-schema" data={financialAnalystSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentFinancialAnalystContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
