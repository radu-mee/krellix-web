import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentRecruitingAgentContent from "@/sections/resources/ResourceAgentRecruitingAgentContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/recruiting-agent";
const PAGE_TITLE = "AI Recruiter";
const PAGE_DESCRIPTION =
  "AI recruiter for structured interviews, candidate evaluation, employer branding, and more consistent hiring decisions.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const recruitingAgentSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentRecruitingAgentPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-recruiting-agent-schema" data={recruitingAgentSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentRecruitingAgentContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
