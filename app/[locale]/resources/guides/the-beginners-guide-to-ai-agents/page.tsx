import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideAiAgentsBeginnerContent from "@/sections/resources/ResourceGuideAiAgentsBeginnerContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/the-beginners-guide-to-ai-agents";
const PAGE_TITLE = "The Beginner's Guide to Agents";
const PAGE_DESCRIPTION =
  "Learn what AI agents are, how they differ from traditional AI tools, and how to create your first custom AI agent without technical expertise.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const aiAgentsBeginnerSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideAiAgentsBeginnerPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-ai-agents-beginner-schema" data={aiAgentsBeginnerSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideAiAgentsBeginnerContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
