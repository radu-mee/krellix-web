import type { Metadata } from "next";
import { buildSiteSchemaNodes, buildWebPageSchema } from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import AboutContent from "@/sections/about/AboutContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/about";
const PAGE_TITLE = "About Krellix | Collaborative AI Workspace";
const PAGE_DESCRIPTION =
  "Learn how Krellix is redefining how people work with AI\u2014bringing context, collaboration, and real projects into one place.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <PageFrame>
      <JsonLd id="about-schema" data={aboutSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
