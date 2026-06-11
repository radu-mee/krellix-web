import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideSystemPromptAgentsContent from "@/sections/resources/ResourceGuideSystemPromptAgentsContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-write-a-system-prompt-for-ai-agents";
const PAGE_TITLE = "How to Write a System Prompt for AI Agents";
const PAGE_DESCRIPTION =
  "Learn how to write a system prompt for AI agents using roles, goals, rules, and output formats to create more consistent and useful responses.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const systemPromptAgentsSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideSystemPromptAgentsPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-system-prompt-agents-schema" data={systemPromptAgentsSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideSystemPromptAgentsContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
