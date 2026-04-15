import Image from "next/image";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

type PricingPlan = {
  badge: string;
  name: string;
  price: string;
  period: string;
  features: readonly string[];
  imageSrc: string;
};

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    badge: "Starter plan",
    name: "Free",
    price: "$0.00",
    period: "/MO",
    features: [
      "Unlimited chats",
      "2 Agents",
      "2 Projects",
      "1 Mb files per project",
      "2 Files per project",
      "Single agent chats",
    ],
    imageSrc: "/images/pricing-free.png",
  },
  {
    badge: "Most popular",
    name: "Plus",
    price: "$9.90",
    period: "/MO",
    features: [
      "Unlimited chats",
      "6 Agents",
      "4 Projects",
      "10 Mb files per project",
      "4 Files per project",
      "Group agents chats",
    ],
    imageSrc: "/images/pricing-plus.png",
  },
  {
    badge: "Most powerful",
    name: "Pro",
    price: "$19.90",
    period: "/MO",
    features: [
      "Unlimited chats",
      "Unlimited Agents",
      "10 Projects",
      "100 Mb files per project",
      "6 Files per project",
      "Group agents chats",
    ],
    imageSrc: "/images/pricing-pro.png",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel any paid plan whenever you want. Your workspace stays available through the current billing cycle, then switches back to the free plan.",
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

function PricingPlanCard({
  plan,
  withDivider = false,
}: {
  plan: PricingPlan;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="relative h-[214px] w-full overflow-hidden border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)]">
        <Image src={plan.imageSrc} alt={`${plan.name} plan illustration`} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col bg-[var(--surface-bg)] px-5 pb-6 pt-5 md:px-6">
        <p className="type-label text-brand-mint">{plan.badge}</p>

        <div className="mt-4 h-px w-full bg-[var(--border-soft)]" />

        <div className="flex items-end justify-between gap-3 py-4">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">{plan.name}</h2>
          <p className="flex items-start gap-1 font-display text-[var(--text-strong)]">
            <span className="text-[20px] leading-none">{plan.price}</span>
            <span className="text-[12px] leading-none text-[var(--text-strong)]">
              {plan.period}
            </span>
          </p>
        </div>

        <div className="h-px w-full bg-[var(--border-soft)]" />

        <ul className="mt-5 flex flex-col gap-5">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="type-paragraph flex items-center gap-3 text-[var(--text-strong)]"
            >
              <span className="relative inline-flex size-5 shrink-0" aria-hidden="true">
                <ThemeImage
                  lightSrc="/brand/pricing-check-black.svg"
                  darkSrc="/brand/pricing-check-white.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>


      </div>
    </article>
  );
}

export default function PricingContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[720px]">
          <p className="type-label text-brand-mint">Pricing</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Work smarter</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Pick the setup that fits your team and scale as your projects grow.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {PRICING_PLANS.map((plan, index) => (
          <PricingPlanCard key={plan.name} plan={plan} withDivider={index > 0} />
        ))}
      </div>

      <div className="flex min-h-[54px] items-center justify-center border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)] px-4">
        <p className="type-paragraph text-center text-[12px] text-[var(--text-muted)]">
          The pricing outlined does not include *VAT. Krellix reserves the right to adjust its pricing.
        </p>
      </div>

      <div className="border-b border-[var(--border-soft)]">
        <WaitlistHero />
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
          <h2 className="type-h2 text-[var(--text-strong)]">
            Cross platform continuity
          </h2>
          <p className="type-paragraph mt-4 max-w-[560px] text-[var(--text-muted)]">
            Start on your Mac, continue on your PC or the other way around. Work
            doesn&apos;t happen in a single place.
          </p>
          <div className="mt-8">
            <ThemeImage
              lightSrc="/brand/cross-platform-illustration-light-mode.svg"
              darkSrc="/brand/cross-platform-illustration-dark-mode.svg"
              alt="Cross-platform continuity illustration"
              width={343}
              height={84}
            />
          </div>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="grid gap-4 py-8 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">{item.question}</h3>
              <p className="type-paragraph text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
















