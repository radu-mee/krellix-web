import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceTemplateMeetingAgendaContent from "@/sections/resources/ResourceTemplateMeetingAgendaContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/templates/meeting-agenda-template";
const PAGE_TITLE = "Meeting Agenda Template";
const PAGE_DESCRIPTION =
  "Meeting Agenda template for planning discussions, tracking decisions, assigning action items, and running more effective meetings.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const meetingAgendaSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceTemplateMeetingAgendaPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-template-meeting-agenda-schema" data={meetingAgendaSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceTemplateMeetingAgendaContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
