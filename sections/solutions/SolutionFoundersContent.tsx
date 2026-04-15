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
    title: "Strategy expert",
    description:
      "Shapes the roadmap and opportunity framing so priorities stay aligned with growth goals.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Business analyst",
    description:
      "Surfaces assumptions, risks, and trade-offs from your data before decisions become expensive.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Marketing pro",
    description:
      "Builds launch narratives, messaging, and campaign direction around the same product context.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Ask one question and watch your agents work it out. Strategy proposes an approach, Business Analyst questions feasibility, Marketing Pro refines the angle. All perspectives in one coherent thread.",
    effect: "noiseCloud",
    palette: "cyanMagentaAmber",
  },
  {
    title: "Every decision gets captured",
    description:
      "When your team debates a pivot or pricing change, the decision and reasoning behind it are preserved. Come back next month and your agents remember exactly what was decided and why.",
    effect: "pulseGrid",
    palette: "limeGoldSky",
  },
  {
    title: "Agents reference each other",
    description:
      "Code Reviewer flags a technical limitation. Marketing Pro sees it and adjusts the go-to-market strategy accordingly. Your agents actively build on each other's input - not just respond in sequence.",
    effect: "waveField",
    palette: "sunsetCoralGold",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can this replace early hires?",
    answer:
      "Krellix isn't designed to replace your team. It's designed to extend it. Think of it as giving every team member their own sub-team of specialists they can bounce ideas off, pressure-test decisions with, and delegate thinking to. That said, if you're a solo founder who needs to move before you can hire, it can absolutely do that as well.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT and other similar tools give you one voice. Krellix gives you a room. When you ask a growth question, your Strategy agent, Business Analyst, and Marketing Pro each weigh in from their own angle and they challenge each other. You get the tension and trade-offs that lead to better decisions.",
  },
  {
    question: "Is this worth the setup time?",
    answer:
      "Setup takes minutes, not hours. Create a project, create your agents, and start working together. There's no onboarding process to sit through. You get value from the first conversation, and it compounds as your agents learn your startup's context.",
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
            Build your startup with specialized AI agents collaborating in one workspace. Get strategy, marketing,
            product, and engineering perspectives working together-the team every founder needs.
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
              alt="Founder agents collaboration view"
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-founders-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-founders-mobile-hero-image-dark-mode-eng.svg"
              alt="Founder agents collaboration view"
              width={375}
              height={697}
            />
          </div>

          <div>
            <p className="type-label text-brand-mint">Stop wearing every hat alone</p>
            <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
              How they collaborate
            </h2>
            <p className="type-paragraph mt-4 text-[var(--text-muted)]">
              Your founder workspace blends strategic planning, business analysis,
              and marketing execution in one thread. Each agent sees the same
              context, so you get sharper decisions and faster iteration.
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
            Having a team of AI agents is more than just speed. When multiple specialists weigh
            in on the same problem, blind spots shrink and better solutions emerge.
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











