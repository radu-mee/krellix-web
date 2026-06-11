import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuidePrdWithAiContent from "@/sections/resources/ResourceGuidePrdWithAiContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-write-a-prd-with-ai";
const PAGE_TITLE = "How to Write a PRD with AI";
const PAGE_DESCRIPTION =
  "Learn how to use AI to write a stronger PRD, generate user stories, improve requirements, and prepare for sprint planning.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const prdWithAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuidePrdWithAiPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-prd-with-ai-schema" data={prdWithAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuidePrdWithAiContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
