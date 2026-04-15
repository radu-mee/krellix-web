import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import RegistrationSuccessHero from "@/sections/waitlist/RegistrationSuccessHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/registration-successful"),
  title: "Registration Successful",
  description: "Registration success screen after joining the Krellix waitlist.",
};

export default function RegistrationSuccessfulPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1">
        <RegistrationSuccessHero />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
