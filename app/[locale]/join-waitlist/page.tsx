import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/join-waitlist"),
  title: "Join the Waitlist",
  description:
    "Join the Krellix waitlist to get notified when access opens.",
};

export default function JoinWaitlistPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1">
        <WaitlistHero />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
