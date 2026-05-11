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
import SolutionProductManagersContent from "@/sections/solutions/SolutionProductManagersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/product-managers";
const PAGE_TITLE = "AI for Product Managers";
const PAGE_DESCRIPTION =
  "Build better products with AI for product managers. Krellix helps improve decisions, workflows, and collaboration in one place.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for Product Managers",
  description: PAGE_DESCRIPTION,
  serviceType: "AI workflow and decision support for product managers",
  audienceType: "Product Managers",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const productManagersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionProductManagersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-product-managers-schema" data={productManagersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionProductManagersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
