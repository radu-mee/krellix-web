import type { Metadata } from "next";
import { RESOURCE_GUIDES } from "@/content/resourceGuides";
import {
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuidesIndexContent from "@/sections/resources/ResourceGuidesIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides";
const PAGE_TITLE = "AI Guides & Prompt Workflows ";
const PAGE_DESCRIPTION =
  "Practical AI guides and prompt strategies for workflows, research, collaboration, and real-world AI implementation.";

const guidesUrl = buildLocalizedAbsoluteUrl(PAGE_PATH);
const guidesItemListId = `${guidesUrl}#itemlist`;

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: guidesItemListId,
});

const guidesItemListSchema = {
  "@type": "ItemList",
  "@id": guidesItemListId,
  name: "Krellix AI Guides Index",
  itemListElement: RESOURCE_GUIDES.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.title,
    url: buildLocalizedAbsoluteUrl(
      [
        "ai-prompts-for-product-managers",
        "how-developers-can-use-ai-for-code-review",
        "how-to-build-an-ai-workflow-for-your-team",
        "how-to-onboard-your-team-to-ai-without-the-pushback",
        "how-to-run-a-marketing-campaign-with-ai",
        "how-to-run-better-meetings-with-ai",
        "how-to-use-ai-for-competitive-analysis",
        "how-to-use-ai-for-data-analysis",
        "how-to-use-ai-for-user-research",
        "how-to-write-a-prd-with-ai",
        "how-to-write-a-system-prompt-for-ai-agents",
        "the-beginners-guide-to-ai-agents",
      ].includes(guide.slug)
        ? `${PAGE_PATH}/${guide.slug}`
        : `${PAGE_PATH}#${guide.slug}`,
    ),
  })),
};

const guidesSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, guidesItemListSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

type ResourceGuidesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ResourceGuidesPage({
  searchParams,
}: ResourceGuidesPageProps) {
  const { page } = await searchParams;
  const parsedPage = Number.parseInt(page ?? "1", 10);
  const currentPage = Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  return (
    <PageFrame>
      <JsonLd id="resource-guides-schema" data={guidesSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuidesIndexContent currentPage={currentPage} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
