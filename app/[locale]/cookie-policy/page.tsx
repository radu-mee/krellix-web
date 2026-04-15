import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import { cookiePolicyPage } from "@/content/legal/cookiePolicy";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import LegalArticle from "@/sections/legal/LegalArticle";
import LegalHero from "@/sections/legal/LegalHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/cookie-policy"),
  title: "Cookie Policy",
  description:
    "Cookie policy for Krellix.",
};

export default function CookiePolicyPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-16 py-16">
        <LegalHero
          label={cookiePolicyPage.label}
          title={cookiePolicyPage.title}
          updatedAt={cookiePolicyPage.updatedAt}
        />
        <LegalArticle sections={cookiePolicyPage.sections} />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}


