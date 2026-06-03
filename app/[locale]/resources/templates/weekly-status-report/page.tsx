import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateWeeklyStatusReportContent from "@/sections/resources/ResourceTemplateWeeklyStatusReportContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/weekly-status-report";
const PAGE_TITLE = "Weekly Status Report Template";
const PAGE_DESCRIPTION =
  "Weekly Status Report template for tracking progress, communicating risks, sharing updates, and keeping stakeholders aligned.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const weeklyStatusReportSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateWeeklyStatusReportPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-weekly-status-report-schema" data={weeklyStatusReportSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateWeeklyStatusReportContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
