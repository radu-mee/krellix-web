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
    title: "UI / UX designer",
    description:
      "Evaluates UX flows, accessibility, component patterns, and design system consistency.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Copywriter",
    description:
      "Refines microcopy, UI text, and content hierarchy for clarity and tone.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Marketing pro",
    description:
      "Checks brand alignment, messaging consistency, and conversion optimization.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Share a design brief and watch your agents critique it together. Design Expert flags usability issues, Writing Coach sharpens the copy, Marketing Pro checks the conversion angle. All perspectives in one thread.",
    effect: "noiseCloud",
    palette: "cyanMagentaAmber",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team agrees on a component pattern, tone of voice, or standard, the reasoning is preserved. Come back later and your agents remember your decisions and why you made them.",
    effect: "pulseGrid",
    palette: "limeGoldSky",
  },
  {
    title: "Agents reference each other",
    description:
      "Your copywriter shortens a headline. The UI / UX designer sees it and proposes layout adjustments to match. Your agents actively build on each other's input - not just respond in sequence.",
    effect: "waveField",
    palette: "sunsetCoralGold",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can it give feedback on actual designs?",
    answer:
      "You can describe your flows, share briefs, share actual designs - your agents will critique structure, copy, accessibility, and conversion. It's not pixel-level feedback, but it catches the UX, content, and strategy issues that matter most before you open Figma.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you one opinion with no memory. Krellix gives you a design critique team that remembers your typography choices, accessibility requirements, and brand guidelines. Your Design Expert, Writing Coach, and Marketing Pro each bring a different lens - and they reference past design decisions to keep everything consistent.",
  },
  {
    question: "Does it remember my design system?",
    answer:
      "Every decision - color rationale, component patterns, spacing rules, tone guidelines - is preserved across sessions. Start a new project and your agents already know your established design language and build on it.",
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

export default function SolutionDesignersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Designers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Get UX, copy, and brand feedback in one conversation. Your AI design team critiques flows, tightens
            microcopy, and checks brand alignment - so you iterate faster without chasing feedback across tools
            and channels.
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
              lightSrc="/images/solutions-designers-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-designers-hero-image-dark-mode-eng.svg"
              alt="Designers collaboration view"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-designers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-designers-mobile-hero-image-dark-mode-eng.svg"
              alt="Designers collaboration view"
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
              You describe a design problem. Design Expert critiques the flow and structure. The copywriter tightens
              every label and message. Marketing pro makes sure the experience actually converts. They build on each
              other's feedback in the same thread - so you get a holistic critique, not three separate reviews.
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

