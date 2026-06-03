import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateSalesCallDebriefContent from "@/sections/resources/ResourceTemplateSalesCallDebriefContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/sales-call-debrief";
const PAGE_TITLE = "Sales Call Report Template";
const PAGE_DESCRIPTION =
  "Sales Call Report template for documenting prospect insights, deal qualification, objections, and follow-up actions after sales conversations.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const salesCallDebriefSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateSalesCallDebriefPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-sales-call-debrief-schema" data={salesCallDebriefSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateSalesCallDebriefContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
