import type { Metadata } from "next";
import { RESOURCE_AGENTS } from "@/content/resourceAgents";
import {
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentsIndexContent from "@/sections/resources/ResourceAgentsIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents";
const PAGE_TITLE = "AI Agent Prompts & System Prompts";
const PAGE_DESCRIPTION =
  "Free AI agent prompts and system prompts designed for real workflows, collaboration, and specialized AI roles.";

const agentsUrl = buildLocalizedAbsoluteUrl(PAGE_PATH);
const agentsItemListId = `${agentsUrl}#itemlist`;

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: agentsItemListId,
});

const agentsItemListSchema = {
  "@type": "ItemList",
  "@id": agentsItemListId,
  name: "Krellix Agent Prompt Index",
  itemListElement: RESOURCE_AGENTS.map((agent, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: agent.title,
    url: buildLocalizedAbsoluteUrl(
      [
        "customer-manager",
        "data-analyst",
        "executive-coach",
        "financial-analyst",
        "legal-expert",
        "project-manager",
        "sales-coach",
        "seo-strategist",
        "ux-researcher",
        "recruiting-agent",
        "social-media-manager",
        "technical-support-agent",
      ].includes(agent.slug)
        ? `${PAGE_PATH}/${agent.slug}`
        : `${PAGE_PATH}#${agent.slug}`,
    ),
  })),
};

const agentsSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, agentsItemListSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

type ResourceAgentsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ResourceAgentsPage({
  searchParams,
}: ResourceAgentsPageProps) {
  const { page } = await searchParams;
  const parsedPage = Number.parseInt(page ?? "1", 10);
  const currentPage = Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  return (
    <PageFrame>
      <JsonLd id="resource-agents-schema" data={agentsSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentsIndexContent currentPage={currentPage} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
