import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

type ProductFeature = {
  label: string;
  title: string;
  description: string;
  lightDesktopSrc: string;
  darkDesktopSrc: string;
  lightMobileSrc: string;
  darkMobileSrc: string;
  alt: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  imageFirstDesktop: boolean;
};

type IntegrationCard = {
  title: string;
  description: string;
  iconLightSrc: string;
  iconDarkSrc: string;
};

const PRODUCT_FEATURES: readonly ProductFeature[] = [
  {
    label: "Your team, your way",
    title: "Build independent agents with real context",
    description:
      "Give each agent a name, a role, and a purpose. Define what they're good at so they can collaborate naturally across your projects.",
    lightDesktopSrc: "/images/product-agents-image-light-mode-eng.svg",
    darkDesktopSrc: "/images/product-agents-image-dark-mode-eng.svg",
    lightMobileSrc: "/images/product-agents-mobile-image-light-mode-eng.svg",
    darkMobileSrc: "/images/product-agents-mobile-image-dark-mode-eng.svg",
    alt: "AI workspace showing multiple AI agents collaborating across projects",
    desktopWidth: 738,
    desktopHeight: 715,
    mobileWidth: 375,
    mobileHeight: 757,
    imageFirstDesktop: true,
  },
  {
    label: "Organized by default",
    title: "Everything your AI team needs, in one place",
    description:
      "Create a project and structure how your team works. Assign agents, set up tasks, and add context with files, briefs, and references. Every conversation, decision, and resource stays connected in one place, so nothing gets lost.",
    lightDesktopSrc: "/images/product-projects-image-light-mode-eng.svg",
    darkDesktopSrc: "/images/product-projects-image-dark-mode-eng.svg",
    lightMobileSrc: "/images/product-projects-mobile-image-light-mode-eng.svg",
    darkMobileSrc: "/images/product-projects-mobile-image-dark-mode-eng.svg",
    alt: "AI-powered collaboration platform with shared team conversations and context",
    desktopWidth: 738,
    desktopHeight: 637,
    mobileWidth: 375,
    mobileHeight: 639,
    imageFirstDesktop: false,
  },
  {
    label: "More than one perspective",
    title: "One conversation, every point of view",
    description:
      "Ask a question, add context, or upload files, and bring multiple agents into the same thread. They respond together in real time, sharing ideas, challenging each other, and refining the outcome. Everything stays in context, so your team can move faster with better decisions.",
    lightDesktopSrc: "/images/product-chat-image-light-mode-eng.svg",
    darkDesktopSrc: "/images/product-chat-image-dark-mode-eng.svg",
    lightMobileSrc: "/images/product-chat-mobile-image-light-mode-eng.svg",
    darkMobileSrc: "/images/product-chat-mobile-image-dark-mode-eng.svg",
    alt: "Multi-agent system working together inside a unified AI workspace",
    desktopWidth: 739,
    desktopHeight: 696,
    mobileWidth: 375,
    mobileHeight: 765,
    imageFirstDesktop: true,
  },
];

const INTEGRATION_CARDS: readonly IntegrationCard[] = [
  {
    title: "Notion",
    description:
      "Pull in docs, wikis, and project notes so your agents always have the latest context.",
    iconLightSrc: "/brand/notion-icon-light-mode-64x64.svg",
    iconDarkSrc: "/brand/notion-icon-dark-mode-64x64.svg",
  },
  {
    title: "Google Calendar",
    description:
      "Your agents know what's on your plate and can plan around your schedule.",
    iconLightSrc: "/brand/google-calendar-icon-light-mode-64x64.svg",
    iconDarkSrc: "/brand/google-calendar-icon-dark-mode-64x64.svg",
  },
  {
    title: "Asana",
    description:
      "Track and update tasks and deadlines without leaving the conversation.",
    iconLightSrc: "/brand/asana-icon-light-mode-64x64.svg",
    iconDarkSrc: "/brand/asana-icon-dark-mode-64x64.svg",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is an AI powered collaboration platform?",
    answer:
      "An AI powered collaboration platform allows multiple AI agents to act like a real team in shared workflows, combining context and decision-making in one place.",
  },
  {
    question: "How do AI workflows improve productivity?",
    answer:
      "AI workflows structure how context, tasks, and decisions are organised and exchanged between agents, helping you move faster and make clearer decisions.",
  },
  {
    question: "What is AI orchestration in practice?",
    answer:
      "AI orchestration is how multiple AI agents are coordinated to work together, share ideas, and contribute to the same task or conversation.",
  },
  {
    question: "What are AI agent tools used for?",
    answer:
      "AI agent tools allow you to create, customize, and manage AI agents with defined roles, memory, and responsibilities.",
  },
] as const;

function ProductFeatureSection({ feature }: { feature: ProductFeature }) {
  const desktopImage = (
    <div className="hidden justify-center md:flex">
      <ThemeImage
        lightSrc={feature.lightDesktopSrc}
        darkSrc={feature.darkDesktopSrc}
        alt={feature.alt}
        width={feature.desktopWidth}
        height={feature.desktopHeight}
      />
    </div>
  );

  const mobileImage = (
    <div className="flex justify-center md:hidden">
      <ThemeImage
        lightSrc={feature.lightMobileSrc}
        darkSrc={feature.darkMobileSrc}
        alt={feature.alt}
        width={feature.mobileWidth}
        height={feature.mobileHeight}
      />
    </div>
  );

  const copy = (
    <div className="max-w-[460px]">
      <p className="type-label text-brand-mint">{feature.label}</p>
      <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
        {feature.title}
      </h2>
      <p className="type-paragraph mt-4 text-[var(--text-muted)]">
        {feature.description}
      </p>
    </div>
  );

  return (
    <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
      <div className="grid gap-8 md:items-center md:gap-10">
        {feature.imageFirstDesktop ? (
          <div className="grid gap-8 md:grid-cols-[minmax(420px,1.2fr)_minmax(260px,0.8fr)] md:items-center md:gap-10">
            {desktopImage}
            {copy}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(420px,1.2fr)] md:items-center md:gap-10">
            {copy}
            {desktopImage}
          </div>
        )}
        {mobileImage}
      </div>
    </div>
  );
}

function IntegrationToolCard({
  card,
  withDivider = false,
}: {
  card: IntegrationCard;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="flex min-h-[220px] items-center justify-center bg-[var(--surface-bg)] px-6 py-12">
        <ThemeImage
          lightSrc={card.iconLightSrc}
          darkSrc={card.iconDarkSrc}
          alt={`${card.title} icon`}
          width={64}
          height={64}
        />
      </div>

      <div className="border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-7">
        <h3 className="font-display text-[20px] leading-[1.1] text-[var(--text-strong)]">
          {card.title}
        </h3>
        <p className="type-paragraph mt-3 text-[var(--text-muted)]">{card.description}</p>
      </div>
    </article>
  );
}

export default function ProductContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[760px]">
          <p className="type-label text-brand-mint">Product</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            Your AI-powered collaboration platform
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Build your team, organize your projects, and let your AI agents collaborate in one place.
          </p>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <ProductFeatureSection feature={PRODUCT_FEATURES[0]} />

      <div className="my-16">
        <DotGridDivider />
      </div>

      <ProductFeatureSection feature={PRODUCT_FEATURES[1]} />

      <div className="my-16">
        <DotGridDivider />
      </div>

      <ProductFeatureSection feature={PRODUCT_FEATURES[2]} />

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6">
        <p className="type-paragraph mx-auto max-w-[860px] text-center text-[var(--text-muted)]">
          Krellix is an AI-powered collaboration platform built as a multi-agent system where AI agents
          collaborate, manage workflows, and support orchestration across a shared workspace.
        </p>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[780px]">
          <p className="type-label text-brand-mint">Integrations</p>
          <h2 className="type-h2 mt-4 text-[var(--text-strong)]">Works with the tools you already use</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Krellix connects to your existing workflow, giving your AI agents the context they need
            from the tools your team already depends on.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {INTEGRATION_CARDS.map((card, index) => (
          <IntegrationToolCard key={card.title} card={card} withDivider={index > 0} />
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
