import type { Metadata } from "next";
import { RESOURCE_TEMPLATES } from "@/content/resourceTemplates";
import {
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplatesIndexContent from "@/sections/resources/ResourceTemplatesIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates";
const PAGE_TITLE = "Workflow Templates & Process Templates";
const PAGE_DESCRIPTION =
  "Free workflow templates and reusable process templates for planning, reporting, meetings, strategy, and structured work.";

const templatesUrl = buildLocalizedAbsoluteUrl(PAGE_PATH);
const templatesItemListId = `${templatesUrl}#itemlist`;

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: templatesItemListId,
});

const templatesItemListSchema = {
  "@type": "ItemList",
  "@id": templatesItemListId,
  name: "Krellix Workflow Templates Index",
  itemListElement: RESOURCE_TEMPLATES.map((template, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: template.title,
    url: buildLocalizedAbsoluteUrl(
      [
        "architecture-decision-record",
        "creative-brief",
        "competitor-analysis-framework",
        "go-to-market-strategy",
        "job-description",
        "meeting-agenda-template",
        "okr-planning-template",
        "sales-call-debrief",
        "product-requirements-document",
        "sprint-retrospective-template",
        "weekly-status-report",
        "project-planning-template",
      ].includes(template.slug)
        ? `${PAGE_PATH}/${template.slug}`
        : `${PAGE_PATH}#${template.slug}`,
    ),
  })),
};

const templatesSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, templatesItemListSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

type ResourceTemplatesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ResourceTemplatesPage({
  searchParams,
}: ResourceTemplatesPageProps) {
  const { page } = await searchParams;
  const parsedPage = Number.parseInt(page ?? "1", 10);
  const currentPage = Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  return (
    <PageFrame>
      <JsonLd id="resource-templates-schema" data={templatesSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplatesIndexContent currentPage={currentPage} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
