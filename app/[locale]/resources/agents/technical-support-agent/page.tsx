import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentTechnicalSupportAgentContent from "@/sections/resources/ResourceAgentTechnicalSupportAgentContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/technical-support-agent";
const PAGE_TITLE = "AI Help Desk";
const PAGE_DESCRIPTION =
  "AI help desk for IT support, troubleshooting guides, incident communication, and knowledge base documentation.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const technicalSupportAgentSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentTechnicalSupportAgentPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-technical-support-agent-schema" data={technicalSupportAgentSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentTechnicalSupportAgentContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
