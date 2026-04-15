import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import { termsOfServicePage } from "@/content/legal/termsOfService";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import LegalArticle from "@/sections/legal/LegalArticle";
import LegalHero from "@/sections/legal/LegalHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/terms-of-service"),
  title: "Terms of Service",
  description:
    "Terms of service for Krellix.",
};

export default function TermsOfServicePage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-16 py-16">
        <LegalHero
          label={termsOfServicePage.label}
          title={termsOfServicePage.title}
          updatedAt={termsOfServicePage.updatedAt}
        />
        <LegalArticle sections={termsOfServicePage.sections} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}

