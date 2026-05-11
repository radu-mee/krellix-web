import Image from "next/image";
import Link from "next/link";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

type AgentExample = {
  ascii: string;
  title: string;
  description: string;
};

type BenefitCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const AGENT_EXAMPLES: readonly AgentExample[] = [
  {
    ascii: "% ::::-- # ::...",
    title: "Writing coach",
    description:
      "Refines copy for clarity, tone, and engagement. Maintains your brand across sessions.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Marketing pro",
    description:
      "Develops distribution strategy, SEO optimization, and campaign planning.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Business analyst",
    description:
      "Tracks performance insights, audience data, and conversion metrics.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Ask for a campaign idea and watch your agents shape it together. Writing Coach refines the messaging, Marketing Pro sharpens the distribution angle, and Business Analyst validates against post performance-all in one shared conversation.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team defines messaging, audience targeting, or campaign direction, every decision and its reasoning are preserved. Come back later and your agents remember exactly what worked and why.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "Business Analyst highlights what performed best. Writing Coach adapts tone and messaging. Marketing Pro adjusts distribution. Your agents actively build on each other's input-not just respond in sequence.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "What are AI tools for digital marketers?",
    answer:
      "AI tools for digital marketers help structure content, campaigns, and strategy by bringing together messaging, audience insights, and performance data in one place, enabling faster and more informed decisions.",
  },
  {
    question: "How can AI support content marketing?",
    answer:
      "AI supports content marketing by helping you generate ideas, refine messaging, and align content with strategy and performance insights, so every piece builds on what worked before.",
  },
  {
    question: "Can AI help with content creation?",
    answer:
      "Yes. AI for content creation helps generate and refine content while aligning tone, messaging, and strategy across campaigns, improving both speed and consistency.",
  },
  {
    question: "How does AI improve marketing decisions?",
    answer:
      "AI improves marketing decisions by combining data, context, and multiple perspectives, helping you evaluate campaign performance, refine strategy, and move forward with greater confidence.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one writer with no memory. Krellix gives you a creative team that builds on itself-where Writing Coach, Marketing Pro, and Business Analyst bring different perspectives and reference past campaigns and performance data to shape every new piece.",
  },
  {
    question: "Will my agents maintain brand consistency?",
    answer:
      "Yes. Your agents learn your tone, messaging, and positioning over time, helping you maintain consistency in branding across campaigns, channels, and content.",
  },
] as const;

function AgentExampleCard({
  item,
  withDivider,
}: {
  item: AgentExample;
  withDivider: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="bg-[var(--surface-raised)] px-5 py-5">
        <p className="font-display text-[12px] leading-none text-[var(--text-muted)]">
          {item.ascii}
        </p>
        <h2 className="mt-4 font-display text-[20px] leading-none text-[var(--text-strong)]">
          {item.title}
        </h2>
        <p className="type-paragraph mt-3 text-[var(--text-muted)]">{item.description}</p>
      </div>
    </article>
  );
}

function BenefitCard({
  card,
  withDivider,
}: {
  card: BenefitCard;
  withDivider: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="relative h-[214px] border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)]">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="bg-[var(--surface-bg)] px-6 py-6">
        <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
          {card.title}
        </h3>
        <p className="type-paragraph mt-3 text-[var(--text-muted)]">{card.description}</p>
      </div>
    </article>
  );
}

export default function SolutionMarketersContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[760px]">
          <Link
            href="/en/solutions"
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO SOLUTIONS
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Marketers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Build better campaigns with AI for marketers-designed to remember your brand voice, audience, and past campaigns. From AI for content creation to campaign strategy and performance analysis, your agents collaborate in one workspace so every decision builds on what came before.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {AGENT_EXAMPLES.map((item, index) => (
          <AgentExampleCard
            key={item.title}
            item={item}
            withDivider={index > 0}
          />
        ))}
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(420px,1.2fr)_minmax(240px,0.8fr)] md:items-center md:gap-10">
          <div className="hidden justify-center md:flex">
            <ThemeImage
              lightSrc="/images/solutions-marketers-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-marketers-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on marketing campaigns in a shared workspace, combining content, strategy, and performance insights."
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-marketers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-marketers-mobile-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on marketing campaigns in a shared workspace, combining content, strategy, and performance insights."
              width={375}
              height={697}
            />
          </div>

          <div>
            <p className="type-label text-brand-mint">STOP WEARING EVERY HAT ALONE</p>
            <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
              How they collaborate
            </h2>
            <p className="type-paragraph mt-4 text-[var(--text-muted)]">
              You brief your AI agents once. Writing Coach drafts the copy. Marketing Pro shapes the distribution
              strategy. Business Analyst brings in performance insights from past campaigns. They build on each
              other's input in the same conversation-so your content is aligned, informed, and ready to perform
              before you publish.
            </p>
          </div>
        </div>

      </div>

      <p className="type-paragraph mx-auto mt-10 max-w-[760px] px-4 text-center text-[var(--text-muted)] md:px-6">
        Krellix is an AI productivity tool where multiple agents collaborate to support decision-making,
        prioritisation, and execution in one place.
      </p>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="max-w-[760px]">
          <p className="type-label text-brand-mint">A REAL DYNAMIC</p>
          <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
            Collaboration benefits
          </h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Working with artificial intelligence marketing tools gives you more than speed-it brings structure and
            multiple perspectives to every decision. Your team of AI agents collaborates to improve outcomes while
            maintaining consistency in branding.
          </p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3">
        {BENEFIT_CARDS.map((card, index) => (
          <BenefitCard
            key={card.title}
            card={card}
            withDivider={index > 0}
          />
        ))}
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-y border-[var(--border-soft)]">
        <WaitlistHero />
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col gap-8">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="grid gap-4 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
                {item.question}
              </h3>
              <p className="type-paragraph text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}









