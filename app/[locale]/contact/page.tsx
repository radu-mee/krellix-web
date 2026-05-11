import type { Metadata } from "next";
import {
  buildServiceSchema,
  buildSiteSchemaNodes,
  buildWebPageSchema,
} from "@/lib/schema";
import { buildLocaleAlternates } from "@/lib/seo";
import PageFrame from "@/layout/PageFrame";
import SiteFooter from "@/layout/SiteFooter";
import SiteHeader from "@/layout/SiteHeader";
import ContactContent from "@/sections/contact/ContactContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/contact";
const PAGE_TITLE = "Contact Krellix | Support, Press & Partnerships";
const PAGE_DESCRIPTION =
  "Contact Krellix for support, press, partnerships, or product questions. Get help with your AI agents, workspace, and account.";

const CONTACT_FAQ_ITEMS = [
  {
    question: "What is Krellix exactly?",
    answer:
      "Krellix is a collaborative AI workspace where multiple specialised AI agents work together on your projects. Instead of using one assistant for everything, you get a team of agents\u2014Code Reviewer, Marketing Pro, Business Analyst, Design Expert, and Writing Coach\u2014that collaborate in the same conversation, hand off across disciplines, and remember decisions across sessions.",
  },
  {
    question: "Who is Krellix meant for?",
    answer:
      "Krellix is built for people who already think in teams\u2014founders, product managers, developers, designers, and researchers. Anyone juggling multiple disciplines across a project and tired of re-explaining context to disconnected tools. If your work spans strategy, execution, and iteration, and you want AI that matches that intensity, Krellix is for you.",
  },
  {
    question: "Is my information safe?",
    answer:
      "Yes. Your data is treated as yours. Krellix uses Supabase as its canonical data source, with devices acting as stateless terminals\u2014meaning if a device is lost or compromised, nothing important is exposed. Your projects, conversations, and agent context are encrypted and never used to train AI models. Privacy and data security are foundational to how the product is built, not afterthoughts.",
  },
] as const;

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix Contact, Support, Press, and Partnerships",
  description: PAGE_DESCRIPTION,
  serviceType: "AI workspace support and business inquiries",
  audienceType: "Krellix users, press, and partners",
});

const { pageUrl, webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const contactFaqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: CONTACT_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema, contactFaqSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function ContactPage() {
  return (
    <PageFrame>
      <JsonLd id="contact-schema" data={contactSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ContactContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
