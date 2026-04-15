import type { Metadata } from "next";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ContactContent from "@/sections/contact/ContactContent";

export const metadata: Metadata = {
  alternates: buildLocaleAlternates("/contact"),
  title: "Contact",
  description: "Get in touch with the Krellix team for general, press, and support requests.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ContactContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}