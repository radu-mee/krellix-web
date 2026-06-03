import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateJobDescriptionContent from "@/sections/resources/ResourceTemplateJobDescriptionContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/job-description";
const PAGE_TITLE = "Job Description Template";
const PAGE_DESCRIPTION =
  "Job Description template for defining responsibilities, hiring expectations, candidate requirements, and role-specific hiring processes.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const jobDescriptionSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateJobDescriptionPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-job-description-schema" data={jobDescriptionSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateJobDescriptionContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
