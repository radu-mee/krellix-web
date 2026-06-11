import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceGuideCodeReviewContent from "@/sections/resources/ResourceGuideCodeReviewContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/guides/how-developers-can-use-ai-for-code-review";
const PAGE_TITLE = "How Developers Can Use AI for Code Review";
const PAGE_DESCRIPTION =
  "Learn how to use AI code review to improve code quality, strengthen security reviews, reduce review bottlenecks, and support better engineering practices.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const aiCodeReviewSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceGuideCodeReviewPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-guide-code-review-schema" data={aiCodeReviewSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceGuideCodeReviewContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
