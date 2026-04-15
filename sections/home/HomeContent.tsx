import Image from "next/image";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";

type GetStartedCard = {
  title: string;
  description: string;
  imageSrc: string;
};

type IntegrationCard = {
  title: string;
  description: string;
  iconLightSrc: string;
  iconDarkSrc: string;
};

const GET_STARTED_CARDS: readonly GetStartedCard[] = [
  {
    title: "Create your AI agents",
    description: "Give them a name, a personality and a job description.",
    imageSrc: "/images/create-agents-home.png",
  },
  {
    title: "Create your projects",
    description: "Set up your projects, add descriptions and upload files.",
    imageSrc: "/images/create-projects-home.png",
  },
  {
    title: "You're good to go",
    description: "Get to know your new team and start collaborating.",
    imageSrc: "/images/all-set-home.png",
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
    question: "What are AI copilots?",
    answer:
      "AI copilots are intelligent assistants that help individuals and teams complete tasks faster by working alongside them in real time.",
  },
  {
    question: "What is a multi-agent system?",
    answer:
      "A multi-agent system is a group of AI agents that collaborate, share context, and solve problems together.",
  },
  {
    question: "How can AI improve productivity?",
    answer:
      "AI improves productivity by increasing speed and supporting decisions. Krellix does this through collaborative workflows in one centralised space.",
  },
  {
    question: "How is Krellix different from other AI tools?",
    answer:
      "Krellix uses collaborative artificial intelligence, where multiple AI agents work together instead of acting alone.",
  },
  {
    question: "Can Krellix integrate with tools?",
    answer:
      "Krellix integrates with key tools like Notion, Google Calendar, and Asana, allowing your AI agents to access context from your workflow and support your team more effectively.",
  },
] as const;

function GetStartedStepCard({
  card,
  withDivider = false,
}: {
  card: GetStartedCard;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="relative h-[214px] w-full overflow-hidden bg-[var(--surface-bg)]">
        <Image
          src={card.imageSrc}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-7 text-center">
        <h3 className="font-display text-[20px] leading-[1.1] text-[var(--text-strong)]">
          {card.title}
        </h3>
        <p className="type-paragraph mt-3 text-[var(--text-muted)]">{card.description}</p>
      </div>
    </article>
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

export default function HomeContent() {
  return (
    <section className="flex flex-col">
      <div className="px-4 pb-14 pt-14 md:px-6 md:pb-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(300px,1fr)_minmax(560px,1.25fr)] lg:gap-16">
          <div className="max-w-[520px]">
            <p className="type-label text-brand-mint">COLLABORATION IMPROVES OUTCOMES</p>
            <h1 className="type-h1 mt-5 text-[var(--text-strong)] md:text-[68px] md:leading-[1.1]">
              AI copilots that collaborate like a real team
            </h1>
            <p className="type-paragraph mt-6 text-[var(--text-muted)] md:max-w-[470px]">
              Bring multiple perspectives into every decision with a collaborative multi-agent system tailored to your workflow.
            </p>
          </div>

          <div className="hidden justify-end md:flex">
            <ThemeImage
              lightSrc="/images/home-hero-image-light-mode-eng.svg"
              darkSrc="/images/home-hero-image-dark-mode-eng.svg"
              alt="AI copilots collaborating in a multi-agent workspace interface"
              width={732}
              height={696}
              priority
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/home-hero-mobile-image-light-mode-eng.svg"
              darkSrc="/images/home-hero-mobile-image-dark-mode-eng.svg"
              alt="AI copilots collaborating in a multi-agent workspace interface"
              width={375}
              height={829}
              priority
            />
          </div>
        </div>
      </div>

      <div id="product" className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="type-label text-brand-mint">NO TIME TO WASTE</p>
          <h2 className="type-h2 mt-4 text-[var(--text-strong)]">Get started fast</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            We know your time is important. Set up your AI workflow instantly.
          </p>
        </div>
      </div>

      <div className="grid border-t border-[var(--border-soft)] md:grid-cols-3">
        {GET_STARTED_CARDS.map((card, index) => (
          <GetStartedStepCard key={card.title} card={card} withDivider={index > 0} />
        ))}
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6">
        <p className="type-paragraph mx-auto max-w-[780px] text-center text-[var(--text-muted)]">
          Krellix is an AI copilot platform built as a multi-agent system where AI agents collaborate,
          streamline workflows, and improve productivity in modern workplaces.
        </p>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(420px,1.2fr)_minmax(280px,0.8fr)] md:gap-10">
          <div className="hidden md:flex">
            <ThemeImage
              lightSrc="/images/home-collaboration-hero-image-light-mode-eng.svg"
              darkSrc="/images/home-collaboration-hero-image-dark-mode-eng.svg"
              alt="Your team of AI agents collaborating across workflows in a shared workspace"
              width={738}
              height={510}
            />
          </div>

          <div className="flex justify-center md:hidden">
            <ThemeImage
              lightSrc="/images/home-collaboration-mobile-hero-image-light-mode-eng.svg"
              darkSrc="/images/home-collaboration-mobile-hero-image-dark-mode-eng.svg"
              alt="Your team of AI agents collaborating across workflows in a shared workspace"
              width={375}
              height={536}
            />
          </div>

          <div>
            <p className="type-label text-brand-mint">BUILT FOR COLLABORATION</p>
            <h2 className="type-h2 mt-4 text-[var(--text-strong)]">
              Better solutions through AI collaboration
            </h2>
            <p className="type-paragraph mt-5 text-[var(--text-muted)]">
              One AI can answer a question. A team of AI agents can challenge it, refine it, and make it better. Krellix brings that collaborative dynamic to every conversation.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
          <h2 className="type-h2 text-[var(--text-strong)]">Cross platform continuity</h2>
          <p className="type-paragraph mt-4 max-w-[700px] text-[var(--text-muted)]">
            Your AI workplace moves with you. Projects, agents, and conversations stay in sync, so you can switch devices, change locations, and pick up exactly where you left off.
          </p>
          <div className="mt-8">
            <ThemeImage
              lightSrc="/brand/cross-platform-illustration-light-mode.svg"
              darkSrc="/brand/cross-platform-illustration-dark-mode.svg"
              alt="Cross-platform continuity illustration"
              width={343}
              height={84}
            />
          </div>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[780px]">
          <p className="type-label text-brand-mint">INTEGRATIONS</p>
          <h2 className="type-h2 mt-4 text-[var(--text-strong)]">Works with the tools you already use</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Krellix connects to your existing workflow, giving your AI agents the context they need from the tools your team already depends on.
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

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="grid gap-4 py-8 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">{item.question}</h3>
              <p className="type-paragraph text-[var(--text-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
