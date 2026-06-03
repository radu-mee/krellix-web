import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateSprintRetrospectiveContent from "@/sections/resources/ResourceTemplateSprintRetrospectiveContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/sprint-retrospective-template";
const PAGE_TITLE = "Sprint Retrospective Template";
const PAGE_DESCRIPTION =
  "Sprint Retrospective template for reviewing sprint outcomes, identifying improvements, tracking action items, and strengthening team collaboration.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const sprintRetrospectiveSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateSprintRetrospectivePage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-sprint-retrospective-schema" data={sprintRetrospectiveSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateSprintRetrospectiveContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
