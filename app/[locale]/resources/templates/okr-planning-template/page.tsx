import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateOkrPlanningContent from "@/sections/resources/ResourceTemplateOkrPlanningContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/okr-planning-template";
const PAGE_TITLE = "OKR Template";
const PAGE_DESCRIPTION =
  "OKR template for setting objectives, tracking key results, improving alignment, and measuring progress over time.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const okrPlanningTemplateSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateOkrPlanningPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-okr-planning-schema" data={okrPlanningTemplateSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateOkrPlanningContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
