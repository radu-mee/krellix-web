import type { Metadata } from "next";
import {
  buildLocalizedAbsoluteUrl,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionsIndexContent from "@/sections/solutions/SolutionsIndexContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_TITLE = "AI Business Solutions";
const PAGE_DESCRIPTION =
  "Explore AI business solutions powered by a team of AI agents that bring decisions and workflows together in one collaborative workspace.";

const solutionsUrl = buildLocalizedAbsoluteUrl("/solutions");
const solutionsItemListId = `${solutionsUrl}#itemlist`;

const SOLUTIONS_LINKS = [
  { name: "Founders", path: "/solutions/founders" },
  { name: "Product Managers", path: "/solutions/product-managers" },
  { name: "Marketers", path: "/solutions/marketers" },
  { name: "Developers", path: "/solutions/developers" },
  { name: "Designers", path: "/solutions/designers" },
  { name: "Researchers", path: "/solutions/researchers" },
] as const;

const { webPageSchema } = buildWebPageSchema({
  path: "/solutions",
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: solutionsItemListId,
});

const solutionsItemListSchema = {
  "@type": "ItemList",
  "@id": solutionsItemListId,
  name: "Krellix AI Business Solutions",
  itemListElement: SOLUTIONS_LINKS.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: entry.name,
    url: buildLocalizedAbsoluteUrl(entry.path),
  })),
};

const solutionsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...buildSiteSchemaNodes(),
    webPageSchema,
    solutionsItemListSchema,
  ],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/solutions"),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionsPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-schema" data={solutionsSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionsIndexContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
