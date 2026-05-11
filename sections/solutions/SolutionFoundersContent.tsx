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
    title: "Strategy agent",
    description:
      "Frames business challenges, identifies opportunities, and thinks long term.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Business analyst",
    description:
      "Validates assumptions, analyzes metrics, and structures data-driven decisions.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Marketing pro",
    description:
      "Develops go-to-market strategy, defines positioning, and suggests distribution.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Ask one question and watch your agents work it out. A strategy agent proposes an approach, a business analyst challenges feasibility, and a marketing specialist refines the angle, all in one shared thread.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team debates a pivot or pricing change, the decision and reasoning are preserved. Come back later and your agents remember exactly what was decided and why, with full context.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "A technical limitation surfaces, and positioning adjusts instantly. Your agents build on each other's input in real time, not just respond in sequence, but adapt together as the conversation evolves.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can this replace early hires?",
    answer:
      "Krellix isn't designed to replace your team, it's designed to extend it. It gives you multiple perspectives to explore ideas, challenge decisions, and move faster with confidence before you hire.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "Most AI tools give you a single response, Krellix brings multiple perspectives into one space where agents challenge each other, helping you reach more complete answers and better decisions.",
  },
  {
    question: "Is this worth the setup time?",
    answer:
      "Most AI tools give you a single response, Krellix brings multiple perspectives into one space where agents challenge each other, helping you reach more complete answers and better decisions.",
  },
  {
    question: "What is AI for businesses?",
    answer:
      "Artificial intelligence for businesses refers to systems that help speed up tasks, improve decision-making, and operate more efficiently using data, context and intelligent software across daily workflows.",
  },
  {
    question: "What is an AI business solution?",
    answer:
      "An AI business solution is a system that helps you apply AI to real work, from planning and analysis to execution and collaboration in one place.",
  },
  {
    question: "How can startups use AI in business?",
    answer:
      "Startups can use AI to validate ideas, support decisions, and streamline execution across product, marketing, and operations, all within one collaborative system that evolves with their work.",
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

export default function SolutionFoundersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Founders</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Build your startup on a system powered by artificial intelligence for businesses, bringing strategy,
            product, and execution into one collaborative workspace. Work with a team that thinks across every
            function-the AI business solution founders need.
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
              lightSrc="/images/solutions-founders-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-founders-hero-image-dark-mode-eng.svg"
              alt="AI workforce collaborating in a shared workspace, showing multiple agents contributing to a business decision in real time."
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-founders-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-founders-mobile-hero-image-dark-mode-eng.svg"
              alt="AI workforce collaborating in a shared workspace, showing multiple agents contributing to a business decision in real time."
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
              You bring an idea. A strategy agent frames it and surfaces risks. A marketing specialist shapes
              positioning, while a business analyst brings data into the conversation. They challenge each other in
              the same thread, helping you reach aligned decisions without meetings.
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
            Working with an AI workforce gives you more than speed. It brings multiple perspectives into every
            decision, helping you reduce blind spots and move forward with clarity.
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












