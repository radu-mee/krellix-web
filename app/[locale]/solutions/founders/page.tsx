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
import SolutionFoundersContent from "@/sections/solutions/SolutionFoundersContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/solutions/founders";
const PAGE_TITLE = "AI for Startups & Businesses";
const PAGE_DESCRIPTION =
  "Build, plan, and scale faster with a system powered by artificial intelligence for businesses. Krellix helps founders create teams and make smarter decisions.";

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix for Founders",
  description: PAGE_DESCRIPTION,
  serviceType: "AI collaboration platform for startups and businesses",
  audienceType: "Founders",
});

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const foundersSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SolutionFoundersPage() {
  return (
    <PageFrame>
      <JsonLd id="solutions-founders-schema" data={foundersSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SolutionFoundersContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
