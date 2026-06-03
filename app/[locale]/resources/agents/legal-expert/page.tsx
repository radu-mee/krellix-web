import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentLegalExpertContent from "@/sections/resources/ResourceAgentLegalExpertContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/legal-expert";
const PAGE_TITLE = "AI Contract Review Agent";
const PAGE_DESCRIPTION =
  "Use an AI contract review agent for legal document review, contract analysis, risk identification, and plain English agreement summaries.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const legalExpertSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentLegalExpertPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-legal-expert-schema" data={legalExpertSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentLegalExpertContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
