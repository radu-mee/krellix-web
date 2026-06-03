import type { Metadata } from "next";
import {
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ResourceAgentSocialMediaManagerContent from "@/sections/resources/ResourceAgentSocialMediaManagerContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/resources/agents/social-media-manager";
const PAGE_TITLE = "AI Social Media Manager";
const PAGE_DESCRIPTION =
  "AI social media manager for content calendars, community management, social media strategy, and platform-native content creation.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const socialMediaManagerSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ResourceAgentSocialMediaManagerPage() {
  return (
    <PageFrame>
      <JsonLd id="resource-agent-social-media-manager-schema" data={socialMediaManagerSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ResourceAgentSocialMediaManagerContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
