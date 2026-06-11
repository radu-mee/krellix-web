import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideUserResearchContent from "@/sections/resources/ResourceGuideUserResearchContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-use-ai-for-user-research";
const PAGE_TITLE = "How to Use AI for User Research";
const PAGE_DESCRIPTION =
  "Learn how to use AI for user research, from planning studies and interview guides to research synthesis, reporting, and actionable insights.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const userResearchAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideUserResearchPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-user-research-ai-schema" data={userResearchAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideUserResearchContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
