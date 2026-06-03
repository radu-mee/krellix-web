import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateProjectPlanningContent from "@/sections/resources/ResourceTemplateProjectPlanningContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/project-planning-template";
const PAGE_TITLE = "Project Planning Template";
const PAGE_DESCRIPTION =
  "Project Planning Template for defining goals, managing timelines, organizing deliverables, and keeping projects on track from start to finish.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const projectPlanningTemplateSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateProjectPlanningPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-project-planning-schema" data={projectPlanningTemplateSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateProjectPlanningContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
