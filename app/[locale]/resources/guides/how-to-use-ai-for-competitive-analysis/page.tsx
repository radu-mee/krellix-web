import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideCompetitiveAnalysisContent from "@/sections/resources/ResourceGuideCompetitiveAnalysisContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-use-ai-for-competitive-analysis";
const PAGE_TITLE = "How to Use AI for Competitive Analysis";
const PAGE_DESCRIPTION =
  "Learn how to use AI for competitive analysis, competitor research, and competitive intelligence with a practical workflow for turning insights into strategy.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const competitiveAnalysisAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideCompetitiveAnalysisPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-competitive-analysis-ai-schema" data={competitiveAnalysisAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideCompetitiveAnalysisContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
