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
import PricingContent from "@/sections/pricing/PricingContent";
import JsonLd from "@/ui/JsonLd";

const PAGE_PATH = "/pricing";
const PAGE_TITLE = "Krellix Pricing | AI Platform Plans";
const PAGE_DESCRIPTION =
  "Get started in minutes. Build your team and scale your workflow as your AI agents work together seamlessly.";

const PRICING_FAQ_ITEMS = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel any paid plan whenever you want. Your workspace\u2014and your AI agents\u2014stay available through the current billing cycle, then it switches back to the free plan.",
  },
  {
    question: "Is there a refund policy if I'm not satisfied?",
    answer:
      "If something feels off, reach out and we will review your case quickly. We focus on fair outcomes and fast support for billing issues.",
  },
  {
    question: "Are there any additional fees beyond the actual subscription?",
    answer:
      "No hidden fees. The listed plan price covers your subscription. If we introduce add-ons in the future, those will always be shown clearly before checkout.",
  },
] as const;

const { serviceId, serviceSchema } = buildServiceSchema({
  path: PAGE_PATH,
  name: "Krellix Pricing Plans",
  description: PAGE_DESCRIPTION,
  serviceType: "AI collaboration platform pricing plans",
  audienceType: "Founders, teams, and professionals",
});

const { pageUrl, webPageSchema } = buildWebPageSchema({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  mainEntityId: serviceId,
});

const pricingFaqSchema = {
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: PRICING_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [...buildSiteSchemaNodes(), webPageSchema, serviceSchema, pricingFaqSchema],
};

export const metadata: Metadata = {
  alternates: buildLocaleAlternates(PAGE_PATH),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function PricingPage() {
  return (
    <PageFrame>
      <JsonLd id="pricing-schema" data={pricingSchema} />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PricingContent />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
