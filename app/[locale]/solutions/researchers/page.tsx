import type { Metadata } from "next";
import {
  buildServiceSchema,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionResearchersContent from "@/sections/solutions/SolutionResearchersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/researchers";
const PAGE_TITLE = "AI Research Assistant System";
const PAGE_DESCRIPTION =
  "A personalized AI research assistant that remembers context and evolves with your work. Krellix connects multiple agents in one continuous workflow.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for Researchers",
  description: PAGE_DESCRIPTION,
  serviceType: "AI research collaboration and context-aware workflow support",
  audienceType: "Researchers",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const researchersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionResearchersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-researchers-schema" data={researchersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionResearchersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
