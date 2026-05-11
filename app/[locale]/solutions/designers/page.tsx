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
import SolutionDesignersContent from "@/sections/solutions/SolutionDesignersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/designers";
const PAGE_TITLE = "AI for UX & Product Design";
const PAGE_DESCRIPTION =
  "Get UX, copy, and product feedback in one place. Krellix brings multiple AI agents together to help you design, iterate, and improve faster.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for UX and Product Designers",
  description: PAGE_DESCRIPTION,
  serviceType: "AI design collaboration and feedback workflow",
  audienceType: "UX and Product Designers",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const designersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionDesignersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-designers-schema" data={designersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionDesignersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
