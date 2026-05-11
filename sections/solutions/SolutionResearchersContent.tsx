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
    title: "Business analyst",
    description:
      "Interprets data, validates methodology, and flags inconsistencies across findings - supporting structured thinking like an AI researcher.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Copywriter",
    description:
      "Structures arguments, sharpens articulation, and ensures clarity across complex topics - refining how insights are communicated.",
  },
  {
    ascii: "# **** :::: ....",
    title: "General assistant",
    description:
      "Handles broad research support, source gathering, and cross-referencing disciplines - connecting ideas across your workflow.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Bring a research question and watch your agents challenge it. Business Analyst defines methodology, Copywriter refines clarity, and General Assistant supports with sources - all in one thread.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "From hypotheses to methodology choices, every decision and its reasoning is preserved. Come back later and your AI research assistant remembers exactly what was explored and why.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "General Assistant surfaces new information. Business Analyst adapts the approach. Copywriter refines how insights are presented. Your agents build on each other's input - not as isolated AI research tools.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is an AI research assistant?",
    answer:
      "An AI research assistant helps you explore ideas, analyse information, and refine conclusions. Krellix goes further by using multiple agents that collaborate and build on past work - so your research evolves instead of restarting each time.",
  },
  {
    question: "Can I personalize my AI research assistant?",
    answer:
      "Yes. Your personalized AI research assistant adapts to your workflow, remembers decisions, and improves over time - building on past context across every session.",
  },
  {
    question: "Can it handle long-running research projects?",
    answer:
      "That's exactly what it's built for. Start research on Monday, continue analysis later in the week, and refine conclusions over time. Your AI research assistant maintains the full thread - capturing findings, open questions, and evolving hypotheses.",
  },
  {
    question: "How is this different from AI research tools?",
    answer:
      "Most AI research tools handle isolated tasks like summarising or retrieving information. Krellix connects multiple agents so research, reasoning, and context stay aligned across your entire workflow.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one response at a time. Krellix gives you a team working together as an AI researcher system - where insights build over time and past context shapes future decisions.",
  },
  {
    question: "What happens to past research and insights?",
    answer:
      "Every finding, methodology choice, and open question is preserved and searchable. Krellix supports AI knowledge management, turning your research into a continuous, evolving knowledge base you can revisit and build on.",
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

export default function SolutionResearchersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Researchers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Synthesize findings, track hypotheses, and maintain research continuity across weeks of work. Your AI
            research team remembers every data point, methodology decision, and open question - so your thinking
            compounds instead of restarting. Krellix is a personalized AI research assistant, building on your
            workflow and past context over time.
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
              lightSrc="/images/solutions-researchers-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-researchers-hero-image-dark-mode-eng.svg"
              alt="AI research assistant agents collaborating on research workflows, combining analysis, writing, and data interpretation"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-researchers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-researchers-mobile-hero-image-dark-mode-eng.svg"
              alt="AI research assistant agents collaborating on research workflows, combining analysis, writing, and data interpretation"
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
              You bring a research question. Business Analyst structures the approach. Copywriter refines how insights
              are expressed. General Assistant gathers sources and fills gaps. They build on each other's input in the
              same conversation - so your research stays structured and connected.
            </p>
          </div>
        </div>
      </div>

      <p className="type-paragraph mx-auto mt-10 max-w-[760px] px-4 text-center text-[var(--text-muted)] md:px-6">
        Krellix is a personalized AI research assistant where multiple agents collaborate across one continuous
        workflow. Instead of switching between separate AI research tools, your agents build on shared context - so
        research improves over time.
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
            Having a team of AI agents is more than just speed. It's about perspective. When multiple specialists
            weigh in on the same problem, blind spots shrink and better research decisions emerge.
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



