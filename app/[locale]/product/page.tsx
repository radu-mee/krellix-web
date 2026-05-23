import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ProductContent from "@/sections/product/ProductContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_TITLE = "AI Powered Collaboration Platform";
const PAGE_DESCRIPTION =
  "Build AI workflows and projects where AI agents collaborate in a single platform to deliver better decisions.";

const { webPageSchema } = buildWebPageSchema({
  path: "/product",
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...buildSiteSchemaNodes(),
    webPageSchema,
  ],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/product"),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ProductPage() {
  return (
    <PageFrame>
      <JsonLd id="product-schema" data={productSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ProductContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
