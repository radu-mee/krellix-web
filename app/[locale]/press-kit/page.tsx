import type { Metadata } from "next";
import { buildSiteSchemaNodes, buildWebPageSchema } from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import PressKitHero from "@/sections/press-kit/PressKitHero";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/press-kit";
const PAGE_TITLE = "Press kit";
const PAGE_DESCRIPTION = "Download official Krellix brand assets in SVG and PNG formats.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const pressKitSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function PressKitPage() {
  return (
    <PageFrame>
      <JsonLd id="press-kit-schema" data={pressKitSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PressKitHero />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
