import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import SubprocessorsContent from "@/sections/subprocessors/SubprocessorsContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/subprocessors"),
  title: "Subprocessors",
  description: "List of Krellix subprocessors and their roles.",
};

export default function SubprocessorsPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <SubprocessorsContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
