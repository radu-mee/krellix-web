import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentUxResearcherContent from "@/sections/resources/ResourceAgentUxResearcherContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/ux-researcher";
const PAGE_TITLE = "AI UX Researcher";
const PAGE_DESCRIPTION =
  "AI UX researcher for user research, usability testing, research synthesis, and decision-ready product insights.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const uxResearcherSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentUxResearcherPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-ux-researcher-schema" data={uxResearcherSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentUxResearcherContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
