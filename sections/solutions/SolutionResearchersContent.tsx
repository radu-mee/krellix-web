import Link from "next/link";
import AsciiEffectDemo, {
  type AsciiEffectPalette,
  type AsciiEffectType,
} from "@/ui/AsciiEffectDemo";
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
  effect: AsciiEffectType;
  palette: AsciiEffectPalette;
};

const AGENT_EXAMPLES: readonly AgentExample[] = [
  {
    ascii: "% ::::-- # ::...",
    title: "Business analyst",
    description:
      "Interprets data, validates methodology, and flags inconsistencies across findings.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Copywriter",
    description:
      "Structures arguments, sharpens articulation, and ensures clarity across complex topics.",
  },
  {
    ascii: "# **** :::: ....",
    title: "General assistant",
    description:
      "Handles broad research support, source gathering, and cross-referencing disciplines.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Bring a research question and watch your agents structure it together. The business analyst proposes a methodology. The copywriter challenges the framing, the general assistant surfaces supporting sources.",
    effect: "noiseCloud",
    palette: "cyanMagentaAmber",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team agrees on a hypothesis or methodology, the reasoning is preserved. Come back weeks later and your agents remember every data point, open question, and evolving conclusion.",
    effect: "pulseGrid",
    palette: "limeGoldSky",
  },
  {
    title: "Agents reference each other",
    description:
      "The general assistant surfaces a new data source. The business analyst sees it and adjusts the analysis framework. Your agents actively build on each other's input. They do not just respond in sequence.",
    effect: "waveField",
    palette: "sunsetCoralGold",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can it handle long-running research projects?",
    answer:
      "That's exactly what it's built for. Start a literature review on Monday, continue analysis on Thursday, write conclusions next week. Your agents maintain the full thread - established findings, open questions, and evolving hypotheses - across every session.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one perspective that resets every conversation. Krellix gives you a research team that accumulates knowledge over time. Your Business Analyst, Writing Coach, and General Assistant each bring a different lens - and they reference weeks of past findings, methodology decisions, and unresolved questions.",
  },
  {
    question: "Can I search across past research conversations?",
    answer:
      "Every finding, methodology choice, and open question is preserved and searchable. That insight from three weeks ago, the framework you debated last Tuesday - it's all there. Your project becomes a living knowledge base that grows with your research.",
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
      <div className="flex min-h-[120px] items-center justify-center border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)] px-6 py-6">
        <AsciiEffectDemo effect={card.effect} palette={card.palette} size={140} />
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
            compounds instead of restarting.
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
              alt="Researchers collaboration view"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-researchers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-researchers-mobile-hero-image-dark-mode-eng.svg"
              alt="Researchers collaboration view"
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
              You bring a research question. Business Analyst structures the methodology and validates the data. The
              copywriter shapes how the findings are articulated. The general assistant pulls in sources and flags
              gaps. They work together in the same thread so your research stays rigorous and clear.
            </p>
          </div>
        </div>
      </div>

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
            weigh in on the same problem, blind spots shrink and better solutions emerge.
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


