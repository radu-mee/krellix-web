import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentCustomerManagerContent from "@/sections/resources/ResourceAgentCustomerManagerContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/customer-manager";
const PAGE_TITLE = "AI for Customer Success";
const PAGE_DESCRIPTION =
  "AI customer success agent for onboarding, renewal management, churn reduction, and proactive customer communication workflows.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const customerManagerSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentCustomerManagerPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-customer-manager-schema" data={customerManagerSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentCustomerManagerContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
