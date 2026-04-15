import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ProductContent from "@/sections/product/ProductContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/product"),
  title: "Product",
  description:
    "Discover how Krellix brings specialized AI agents together in one collaborative workspace.",
};

export default function ProductPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ProductContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}