import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateCompetitorAnalysisFrameworkContent from "@/sections/resources/ResourceTemplateCompetitorAnalysisFrameworkContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/competitor-analysis-framework";
const PAGE_TITLE = "Competitor Analysis Template";
const PAGE_DESCRIPTION =
  "Competitor Analysis template for market research, product positioning, competitive landscape mapping, and strategic planning workflows.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const competitorAnalysisFrameworkSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateCompetitorAnalysisFrameworkPage() {
  return (
    <PageFrame>
      <JsonLd
        id="resource-template-competitor-analysis-framework-schema"
        data={competitorAnalysisFrameworkSchema}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateCompetitorAnalysisFrameworkContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
