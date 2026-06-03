import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentDataAnalystContent from "@/sections/resources/ResourceAgentDataAnalystContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/data-analyst";
const PAGE_TITLE = "AI for Data Analysis";
const PAGE_DESCRIPTION =
  "AI agent for data analysis that helps interpret dashboards, explain SQL queries, and turn findings into clearer business decisions.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const dataAnalystSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentDataAnalystPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-data-analyst-schema" data={dataAnalystSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentDataAnalystContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
