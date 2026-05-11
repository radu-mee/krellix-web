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
      "Reviews design patterns, performance, security, and system architecture. Supports fast, consistent AI code review across your codebase.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Strategy agent",
    description:
      "Evaluates long-term architecture trade-offs, scalability, and technical debt. Supports AI reasoning across complex engineering decisions.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Business analyst",
    description:
      "Validates technical decisions against requirements, scope, and constraints-connecting implementation with real-world impact.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Propose a solution and watch your agents challenge it. Code Reviewer evaluates implementation, Strategy Agent questions scalability, and Business Analyst validates constraints-all in one shared conversation.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "For architecture decisions like Postgres vs MongoDB or REST vs GraphQL, and debugging insights, every trade-off and reasoning is preserved. Come back later and your agents remember exactly what was decided and why.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "Strategy Agent flags scalability concerns and long-term trade-offs. Code Reviewer builds on it and proposes alternative patterns. Your agents actively build on each other's input-working as a connected system rather than isolated tools.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is AI for developers?",
    answer:
      "Yes. AI code review helps you evaluate implementation, identify issues, and improve code quality faster. Instead of reviewing in isolation, multiple agents contribute different perspectives to refine your code before it ships.",
  },
  {
    question: "Can AI help with code review?",
    answer:
      "Yes. AI code review helps you evaluate implementation, identify issues, and improve code quality faster. Instead of reviewing in isolation, multiple agents contribute different perspectives to refine your code before it ships.",
  },
  {
    question: "How does AI support software development?",
    answer:
      "AI supports software development by connecting code, decisions, and context in one place. It helps you evaluate trade-offs, improve architecture, and move faster with more informed decisions.",
  },
  {
    question: "Can AI help debug code?",
    answer:
      "Yes. AI debugging helps identify issues, surface root causes, and suggest improvements by analysing code and reasoning through potential solutions step by step.",
  },
  {
    question: "What is multi-agent AI?",
    answer:
      "Multi-agent artificial intelligence refers to systems where multiple AI agents work together, each contributing a different perspective. In development workflows, this means code review, architecture, and decision-making can happen in one shared conversation.",
  },
  {
    question: "How is this different from ChatGPT or Copilot?",
    answer:
      "ChatGPT gives you one answer. Copilot autocompletes your code. Krellix gives you a room of senior engineers debating your approach-where multiple agents review code, challenge architecture decisions, and build on past context to improve outcomes over time.",
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

export default function SolutionDevelopersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Developers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Architect solutions, run AI code reviews, and debug faster with AI for developers that understands your
            codebase, architecture, and past decisions. Unlike a traditional AI coding assistant, your agents
            collaborate to evaluate trade-offs and improve decisions-bringing senior-level input on demand.
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
              lightSrc="/images/solutions-developers-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-developers-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on software development decisions in a shared workspace, combining code review, architecture, and debugging insights."
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-developers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-developers-mobile-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on software development decisions in a shared workspace, combining code review, architecture, and debugging insights."
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
              You describe a technical decision once. Code Reviewer evaluates implementation details. Strategy Agent
              challenges long-term trade-offs. Business Analyst validates impact and constraints. They build on each
              other's input in the same conversation-so your code, architecture, and decisions are aligned before you
              ship.
            </p>
          </div>
        </div>

      </div>

      <p className="type-paragraph mx-auto mt-10 max-w-[760px] px-4 text-center text-[var(--text-muted)] md:px-6">
        Krellix is an interactive AI system for developers where multiple agents collaborate to support AI code
        review, debugging, and architecture decisions across software development in one shared workspace.
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
            Working with AI for software development brings structure and multiple perspectives to every decision.
            Your agents collaborate through AI reasoning to improve outcomes, solve complex problems, and maintain
            consistency across your codebase.
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


