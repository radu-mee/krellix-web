import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideAiWorkflowForTeamContent from "@/sections/resources/ResourceGuideAiWorkflowForTeamContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-build-an-ai-workflow-for-your-team";
const PAGE_TITLE = "How to Build an AI Workflow for Your Team";
const PAGE_DESCRIPTION =
  "Build AI workflows, create prompt libraries, and configure AI agents effectively with a practical guide to improving team collaboration and productivity.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const aiWorkflowForTeamSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideAiWorkflowForTeamPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-ai-workflow-for-team-schema" data={aiWorkflowForTeamSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideAiWorkflowForTeamContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
