import type { Metadata } from "next";
import { dataProcessingAgreementPage } from "@/content/legal/dataProcessingAgreement";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import LegalArticle from "@/sections/legal/LegalArticle";
import LegalHero from "@/sections/legal/LegalHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/data-processing-agreement"),
  title: "Data Processing Agreement",
  description: "Data processing agreement for Krellix.",
};

export default function DataProcessingAgreementPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-16 py-16">
        <LegalHero
          label={dataProcessingAgreementPage.label}
          title={dataProcessingAgreementPage.title}
          updatedAt={dataProcessingAgreementPage.updatedAt}
        />
        <LegalArticle sections={dataProcessingAgreementPage.sections} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
