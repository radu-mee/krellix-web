import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentExecutiveCoachContent from "@/sections/resources/ResourceAgentExecutiveCoachContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/executive-coach";
const PAGE_TITLE = "Executive Coach Agent";
const PAGE_DESCRIPTION =
  "AI executive coach agent for leadership communication, difficult conversations, decision-making, and leadership development.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const executiveCoachSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentExecutiveCoachPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-executive-coach-schema" data={executiveCoachSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentExecutiveCoachContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
