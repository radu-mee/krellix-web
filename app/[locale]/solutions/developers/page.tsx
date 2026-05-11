import type { Metadata } from "next";
import {
  buildServiceSchema,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SolutionDevelopersContent from "@/sections/solutions/SolutionDevelopersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/developers";
const PAGE_TITLE = "AI for Developers";
const PAGE_DESCRIPTION =
  "Build better systems with AI for developers. Krellix brings code review, debugging, and architecture decisions together in one collaborative workspace.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for Developers",
  description: PAGE_DESCRIPTION,
  serviceType: "AI-assisted software development collaboration",
  audienceType: "Developers",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const developersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionDevelopersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-developers-schema" data={developersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionDevelopersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
