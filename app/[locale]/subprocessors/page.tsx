import type { Metadata } from "next";
import { buildSiteSchemaNodes, buildWebPageSchema } from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SubprocessorsContent from "@/sections/subprocessors/SubprocessorsContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/subprocessors";
const PAGE_TITLE = "Subprocessors";
const PAGE_DESCRIPTION = "List of Krellix subprocessors and their roles.";

const { webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
});

const subprocessorsSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function SubprocessorsPage() {
  return (
    <PageFrame>
      <JsonLd id="subprocessors-schema" data={subprocessorsSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SubprocessorsContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
