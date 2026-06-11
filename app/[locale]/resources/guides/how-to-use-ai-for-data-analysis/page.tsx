import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideDataAnalysisContent from "@/sections/resources/ResourceGuideDataAnalysisContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-use-ai-for-data-analysis";
const PAGE_TITLE = "How to Use AI for Data Analysis";
const PAGE_DESCRIPTION =
  "Learn how to use AI data analysis to explore data, interpret results, and communicate findings that support better decisions.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const dataAnalysisAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideDataAnalysisPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-data-analysis-ai-schema" data={dataAnalysisAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideDataAnalysisContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
