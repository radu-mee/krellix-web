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
    title: "Code reviewer",
    description:
      "Reviews for feasibility, design patterns, performance, and security implications.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Design expert",
    description:
      "Evaluates UX flows, accessibility, and consistency with design systems.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Business analyst",
    description:
      "Validates requirements, defines success metrics, and flags scope risks.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Drop a question and watch your agents work through it. Code Reviewer flags complexity, Design Expert questions the flow, and Business Analyst validates against goals-all in one shared thread.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "When priorities or product changes are debated, each decision and its reasoning are preserved. Come back later and your AI agents remember exactly what was decided and why.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "Design Expert flags a UX concern. Code Reviewer builds on it with a simpler approach. Your agents actively build on each other's input-not just respond in sequence.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can this replace cross-functional meetings?",
    answer:
      "Krellix doesn't replace collaboration-it improves it. Instead of coordinating across multiple meetings, your product, design, engineering, and data perspectives come together in one shared conversation where decisions evolve faster.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one perspective. Krellix gives you a room. Code Reviewer, Design Expert, and Business Analyst each weigh in and challenge each other-helping you reach better product decisions.",
  },
  {
    question: "Does it remember past product decisions?",
    answer:
      "Yes. Every discussion, trade-off, and requirement is captured, so your AI agents can reference past decisions and build on them over time.",
  },
  {
    question: "What are AI tools for product managers?",
    answer:
      "AI tools for product managers help structure decisions, manage workflows, and analyse trade-offs across product development, helping you move faster and make clearer decisions.",
  },
  {
    question: "How does AI support product decision-making?",
    answer:
      "AI supports product decisions by bringing together data, context, and multiple perspectives, helping teams evaluate options, reduce uncertainty, and move forward with greater confidence.",
  },
  {
    question: "Can AI help with task management in product teams?",
    answer:
      "Yes. AI can support AI task management by helping teams organise work, prioritise tasks, and connect execution with product decisions across the workflow.",
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

export default function SolutionProductManagersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Product managers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Turn specs into actionable plans with AI for product managers, bringing design, engineering, and data
            perspectives into one collaborative workspace without scheduling a single meeting.
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
              lightSrc="/images/solutions-product-managers-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-product-managers-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on product decisions in a shared workspace, aligning product, design, and engineering teams"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-product-managers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-product-managers-mobile-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on product decisions in a shared workspace, aligning product, design, and engineering teams"
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
              You drop in a product spec. Code Reviewer flags what's complex to build. Design Expert catches UX
              friction before it ships. Business Analyst defines success metrics. They build on each other's input in
              the same thread-so trade-offs surface before sprint planning.
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
            Working with an AI productivity tool gives you more than speed. A team of AI agents brings structure and
            multiple perspectives to every decision, helping you move forward with clarity across every stage of
            development.
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








