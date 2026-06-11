import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideAiPromptsForProductManagersContent from "@/sections/resources/ResourceGuideAiPromptsForProductManagersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/ai-prompts-for-product-managers";
const PAGE_TITLE = "AI Prompts for Product Managers";
const PAGE_DESCRIPTION =
  "Copy-paste AI prompts for product managers covering research, roadmap planning, requirements, stakeholder communication, prioritization, and product workflows.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const aiPromptsForProductManagersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideAiPromptsForProductManagersPage() {
  return (
    <PageFrame>
      <JsonLd
        id="resource-guide-ai-prompts-for-product-managers-schema"
        data={aiPromptsForProductManagersSchema}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideAiPromptsForProductManagersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
