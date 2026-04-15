import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import DownloadHero from "@/sections/download/DownloadHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/download"),
  title: "Download",
  description: "Download Krellix for macOS and Windows.",
};

export default function DownloadPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <DownloadHero />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
