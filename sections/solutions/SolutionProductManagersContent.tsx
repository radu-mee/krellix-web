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
      "Drop a requirements doc and watch your agents break it down. Code Reviewer flags complexity, Design Expert questions the flow, Business Analyst validates against goals in a single thread.",
    effect: "noiseCloud",
    palette: "cyanMagentaAmber",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team debates scope or prioritization, the decision and reasoning behind it are preserved. Come back next sprint and your agents remember exactly what was decided and why.",
    effect: "pulseGrid",
    palette: "limeGoldSky",
  },
  {
    title: "Agents reference each other",
    description:
      "Design Expert flags a UX concern. Code Reviewer sees it and proposes a simpler implementation. Your agents actively build on each other's input - not just respond in sequence.",
    effect: "waveField",
    palette: "sunsetCoralGold",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can this replace cross-functional meetings?",
    answer:
      "It won't replace every meeting, but it handles the back-and-forth that usually requires scheduling three people for 30 minutes. Get engineering, design, and data perspectives in one conversation - then bring only the real decisions to your team sync.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one perspective. Krellix gives you a room. When you drop in a spec, your Code Reviewer, Design Expert, and Business Analyst each weigh in from their own angle - and they challenge each other. You get the trade-offs that lead to better specs, not just a single answer.",
  },
  {
    question: "Does it remember past product decisions?",
    answer:
      "Every decision, trade-off, and requirement discussed is preserved. Start a new feature conversation next month and your agents already know the technical constraints, design patterns, and success metrics you've established.",
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
            Turn your specs into actionable plans with specialized AI agents. Get engineering, design, and data
            perspectives working together - cross-functional input without scheduling a single meeting.
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
              alt="Product managers collaboration view"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-product-managers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-product-managers-mobile-hero-image-dark-mode-eng.svg"
              alt="Product managers collaboration view"
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
              You drop in a spec. Code Reviewer flags what's complex to build. Design Expert catches UX friction before it ships. Business Analyst defines what success looks like. They weigh in together in the same thread - so trade-offs surface before sprint planning, not after.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="max-w-[760px]">
          <p className="type-label text-brand-mint">A real dynamic</p>
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







