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
    title: "UI / UX designer",
    description:
      "Evaluates UX flows, accessibility, component patterns, and design system consistency-improving usability across your product.",
  },
  {
    ascii: ".... *  : .::  .",
    title: "Copywriter",
    description:
      "Refines microcopy, UX text, and content hierarchy for clarity, tone, and conversion-aligning messaging with your designs.",
  },
  {
    ascii: "# **** :::: ....",
    title: "Marketing pro",
    description:
      "Checks brand alignment, messaging consistency, and conversion opportunities-ensuring every design performs in real-world use.",
  },
];

const BENEFIT_CARDS: readonly BenefitCard[] = [
  {
    title: "Get real-time team debates",
    description:
      "Share a design or flow and watch your agents critique it. UI/UX Designer reviews usability, Copywriter improves clarity, and Marketing Pro evaluates conversion-all in one shared conversation.",
    imageSrc: "/images/solutions-team-debates.png",
    imageAlt: "Team debates visualization",
  },
  {
    title: "Every decision gets captured",
    description:
      "From layout choices to messaging updates, every design decision and its reasoning is preserved. Come back later and your agents remember exactly what was explored and why.",
    imageSrc: "/images/solutions-decisions.png",
    imageAlt: "Decisions visualization",
  },
  {
    title: "Agents reference each other",
    description:
      "Copywriter refines messaging based on UX structure. UI/UX Designer adapts flows based on content clarity. Your agents actively build on each other's input-working as a connected system.",
    imageSrc: "/images/solutions-references.png",
    imageAlt: "References visualization",
  },
];

const FAQ_ITEMS = [
  {
    question: "What are AI design tools?",
    answer:
      "AI design tools help designers generate and refine visuals, layouts, and user experiences using artificial intelligence. Krellix goes further by bringing UX, copy, and product feedback into one place-where multiple agents work together to improve decisions as you design.",
  },
  {
    question: "How does AI help with UX design?",
    answer:
      "AI can improve UX design by identifying friction, refining flows, and helping you evaluate decisions faster. Instead of reviewing designs in isolation, Krellix brings feedback and context together in one conversation.",
  },
  {
    question: "Can AI help with design and copy together?",
    answer:
      "Yes. Krellix connects copywriting with design decisions, so messaging evolves alongside layouts, flows, and user experience.",
  },
  {
    question: "What is AI in product design?",
    answer:
      "AI in product design helps teams refine layouts, interactions, and messaging by bringing feedback and context into one workflow.",
  },
  {
    question: "Is this just another AI design tool?",
    answer:
      "No. Most AI design tools focus on individual tasks. Krellix connects multiple perspectives in one system-so feedback, decisions, and context stay aligned.",
  },
  {
    question: "Can it give feedback on actual designs?",
    answer:
      "You can describe your flows, share briefs, share actual designs-your agents will critique structure, copy, accessibility, and conversion. It's not pixel-perfect feedback, but it catches the UX, content, and strategy issues.",
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
            Get UX, copy, and brand feedback in one conversation. Your AI design team critiques flows, flags
            inconsistencies, and checks brand alignment-so you iterate faster without chasing feedback across tools
            and channels. Krellix works as a single AI design tool for feedback, iteration, and alignment.
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
              alt="AI agents collaborating on UX design, copywriting, and product design decisions in a shared workspace."
              width={738}
              height={773}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/solutions-designers-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/solutions-designers-mobile-hero-image-dark-mode-eng.svg"
              alt="AI agents collaborating on UX design, copywriting, and product design decisions in a shared workspace."
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
              You describe a design or flow once. UI/UX Designer evaluates usability and structure. Copywriter
              refines messaging and clarity. Marketing Pro ensures alignment with brand and conversion goals. They
              build on each other's input in the same conversation-so your design, copy, and user experience stay
              aligned before anything ships.
            </p>
          </div>
        </div>

      </div>

      <p className="type-paragraph mx-auto mt-10 max-w-[760px] px-4 text-center text-[var(--text-muted)] md:px-6">
        Krellix brings UX, copy, and product feedback into one place. Your AI agents work together on the same
        problems-so ideas build, decisions improve, and your designs evolve faster.
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
            Having a team of AI agents is more than just speed-it's about perspective. When multiple specialists
            weigh in on the same problem, blind spots shrink and better design decisions emerge.
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


