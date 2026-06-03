import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentProjectManagerContent from "@/sections/resources/ResourceAgentProjectManagerContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/project-manager";
const PAGE_TITLE = "AI Project Manager";
const PAGE_DESCRIPTION =
  "AI project manager for project planning, stakeholder communication, risk management, and structured project delivery.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const projectManagerSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentProjectManagerPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-project-manager-schema" data={projectManagerSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentProjectManagerContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
