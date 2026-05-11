import Image from "next/image";
import Link from "next/link";
import DotGridDivider from "@/ui/DotGridDivider";

const designersThumbnail = "/solutions/Designers.png";
const developersThumbnail = "/solutions/Developers.png";
const foundersThumbnail = "/solutions/Founders.png";
const marketersThumbnail = "/solutions/Marketers.png";
const productManagersThumbnail = "/solutions/Product-managers.png";
const researchersThumbnail = "/solutions/Researchers.png";

type SolutionCard = {
  title: string;
  description: string;
  href: string;
  thumbnailImageSrc: string;
  thumbnailImageAlt: string;
};

type SolutionPillar = {
  title: string;
  description: string;
};

const SOLUTION_CARDS: readonly SolutionCard[] = [
  {
    title: "Founders",
    description:
      "Strategy, marketing, product, and engineering agents in one workspace. Get cross-functional alignment without the meetings.",
    href: "/en/solutions/founders",
    thumbnailImageSrc: foundersThumbnail,
    thumbnailImageAlt: "Founders solution thumbnail illustration",
  },
  {
    title: "Product managers",
    description:
      "PM, engineering, and design agents working together on specs, user intent, and cross-functional feedback before a single line of code is written.",
    href: "/en/solutions/product-managers",
    thumbnailImageSrc: productManagersThumbnail,
    thumbnailImageAlt: "Product managers solution thumbnail illustration",
  },
  {
    title: "Marketers",
    description:
      "Writing, marketing, and strategy agents that remember your voice, audience, and past campaigns. Build consistency at scale.",
    href: "/en/solutions/marketers",
    thumbnailImageSrc: marketersThumbnail,
    thumbnailImageAlt: "Marketers solution thumbnail illustration",
  },
  {
    title: "Developers",
    description:
      "Code review, architecture, and security agents that understand your codebase, remember decisions, and debate trade-offs together.",
    href: "/en/solutions/developers",
    thumbnailImageSrc: developersThumbnail,
    thumbnailImageAlt: "Developers solution thumbnail illustration",
  },
  {
    title: "Designers",
    description:
      "UX, copy, and brand agents collaborating on your designs. Get holistic critique: accessibility, messaging, and conversion in one thread.",
    href: "/en/solutions/designers",
    thumbnailImageSrc: designersThumbnail,
    thumbnailImageAlt: "Designers solution thumbnail illustration",
  },
  {
    title: "Researchers",
    description:
      "Analysis, synthesis, and strategy agents maintaining continuity across your research. Never lose a thread or forget a finding.",
    href: "/en/solutions/researchers",
    thumbnailImageSrc: researchersThumbnail,
    thumbnailImageAlt: "Researchers solution thumbnail illustration",
  },
];

const SOLUTION_PILLARS: readonly SolutionPillar[] = [
  {
    title: "What are AI business solutions?",
    description:
      "AI business solutions are systems that help you improve how work gets done by combining context, tasks, and decision-making in one place. With Krellix, you can create your own team of AI agents that collaborate to support your work across different roles and workflows.",
  },
  {
    title: "How do AI agents work together in business?",
    description:
      "AI agents for business collaborate by sharing context, building on each other's input, and contributing to the same tasks or decisions. Instead of working independently, they operate as a connected system that improves outcomes through multiple perspectives.",
  },
  {
    title: "Can AI replace cross-functional collaboration?",
    description:
      "AI doesn't replace collaboration - it enhances it. Whether you're working on your own or as part of a team, multiple agents can explore ideas, evaluate trade-offs, and support decisions before final outcomes are reached.",
  },
  {
    title: "What is an artificial intelligence workforce?",
    description:
      "An artificial intelligence workforce refers to a system where multiple AI agents act like a team, supporting different roles across a business or individual workflow. These agents retain context, build on past work, and help you move faster with more informed decisions.",
  },
  {
    title: "How does AI help with business operations?",
    description:
      "AI supports business operations by connecting decisions, tasks, and context in one place. It reduces manual coordination, improves alignment, and helps you focus on higher-value work.",
  },
];

function SolutionsCard({
  card,
  withRightDivider,
}: {
  card: SolutionCard;
  withRightDivider: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withRightDivider ? "md:border-r" : ""}`.trim()}
    >
      <div className="relative h-[214px] border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)]">
        <Image
          src={card.thumbnailImageSrc}
          alt={card.thumbnailImageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col bg-[var(--surface-bg)] px-6 py-6">
        <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
          {card.title}
        </h2>
        <p className="type-paragraph mt-4 text-[var(--text-muted)]">{card.description}</p>
        <Link
          href={card.href}
          className="type-paragraph mt-4 inline-flex w-fit no-underline text-[var(--text-strong)] transition-colors hover:text-brand-mint hover:underline hover:underline-offset-4"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

export default function SolutionsIndexContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[720px]">
          <p className="type-label text-brand-mint">Solutions</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Work smarter</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Every professional works differently. That's why Krellix isn't one
            solution.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {SOLUTION_CARDS.map((card, index) => (
          <SolutionsCard
            key={card.title}
            card={card}
            withRightDivider={index % 3 !== 2}
          />
        ))}
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col gap-8">
          {SOLUTION_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="grid gap-4 md:grid-cols-[minmax(280px,1fr)_minmax(320px,1.2fr)] md:gap-10"
            >
              <h3 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
                {pillar.title}
              </h3>
              <p className="type-paragraph text-[var(--text-muted)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
