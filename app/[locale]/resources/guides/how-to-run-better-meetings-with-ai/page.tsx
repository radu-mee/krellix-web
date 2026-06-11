import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideBetterMeetingsContent from "@/sections/resources/ResourceGuideBetterMeetingsContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-to-run-better-meetings-with-ai";
const PAGE_TITLE = "How to Run Better Meetings with AI";
const PAGE_DESCRIPTION =
  "A practical guide to using AI for meeting preparation, note-taking, decision tracking, and follow-up so discussions lead to action.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const betterMeetingsAiSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideBetterMeetingsPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-better-meetings-ai-schema" data={betterMeetingsAiSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideBetterMeetingsContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
