import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateArchitectureDecisionRecordContent from "@/sections/resources/ResourceTemplateArchitectureDecisionRecordContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/architecture-decision-record";
const PAGE_TITLE = "Architecture Decision Record Template";
const PAGE_DESCRIPTION =
  "Architecture Decision Record template for software documentation, implementation trade-offs, and technical decision tracking.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const architectureDecisionRecordSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateArchitectureDecisionRecordPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-architecture-decision-record-schema" data={architectureDecisionRecordSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateArchitectureDecisionRecordContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
