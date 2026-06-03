import type { Metadata } from "next";
import { RESOURCE_FAQ_ITEMS, RESOURCE_TYPES } from "@/content/resources";
import {
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourcesIndexContent from "@/sections/resources/ResourcesIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources";
const PAGE_TITLE = "AI Prompts, Workflow Templates & Guides";
const PAGE_DESCRIPTION =
  "Free AI prompts, workflow templates, and practical AI guides built for real work, collaboration, and productivity.";

const resourcesUrl = buildLocalizedAbsoluteUrl(PAGE_PATH);
const resourcesItemListId = `${resourcesUrl}#itemlist`;
const resourcesFaqId = `${resourcesUrl}#faq`;

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: resourcesItemListId,
});

const resourcesItemListSchema = {
  "@type": "ItemList",
  "@id": resourcesItemListId,
  name: "Krellix Resources",
  itemListElement: RESOURCE_TYPES.map((resource, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: resource.title,
    url: buildLocalizedAbsoluteUrl(resource.href),
  })),
};

const resourcesFaqSchema = {
  "@type": "FAQPage",
  "@id": resourcesFaqId,
  mainEntity: RESOURCE_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const resourcesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...buildSiteSchemaNodes(),
    webPageSchema,
    resourcesItemListSchema,
    resourcesFaqSchema,
  ],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourcesPage() {
  return (
    <PageFrame>
      <JsonLd id="resources-schema" data={resourcesSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourcesIndexContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
