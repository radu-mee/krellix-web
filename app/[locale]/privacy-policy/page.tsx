import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import { privacyPolicyPage } from "@/content/legal/privacyPolicy";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import LegalArticle from "@/sections/legal/LegalArticle";
import LegalHero from "@/sections/legal/LegalHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/privacy-policy"),
  title: "Privacy Policy",
  description:
    "Privacy policy for Krellix.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-16 py-16">
        <LegalHero
          label={privacyPolicyPage.label}
          title={privacyPolicyPage.title}
          updatedAt={privacyPolicyPage.updatedAt}
        />
        <LegalArticle sections={privacyPolicyPage.sections} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}

