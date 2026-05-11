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
import SolutionMarketersContent from "@/sections/solutions/SolutionMarketersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/marketers";
const PAGE_TITLE = "AI for Marketers";
const PAGE_DESCRIPTION =
  "Build better campaigns with AI agents that bring content, strategy, and performance together in one collaborative workspace.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for Marketers",
  description: PAGE_DESCRIPTION,
  serviceType: "AI campaign planning and performance collaboration for marketers",
  audienceType: "Marketers",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const marketersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionMarketersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-marketers-schema" data={marketersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionMarketersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
