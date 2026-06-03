import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateCreativeBriefContent from "@/sections/resources/ResourceTemplateCreativeBriefContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/creative-brief";
const PAGE_TITLE = "Creative Brief Template";
const PAGE_DESCRIPTION =
  "Creative Brief template for campaign planning, audience messaging, creative direction, and smoother marketing production workflows.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const creativeBriefSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateCreativeBriefPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-creative-brief-schema" data={creativeBriefSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateCreativeBriefContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
