import Image from "next/image";
import Link from "next/link";
import designersThumbnail from "@/Assets/Solutions/Designers.png";
import developersThumbnail from "@/Assets/Solutions/Developers.png";
import foundersThumbnail from "@/Assets/Solutions/Founders.png";
import marketersThumbnail from "@/Assets/Solutions/Marketers.png";
import productManagersThumbnail from "@/Assets/Solutions/Product-managers.png";
import researchersThumbnail from "@/Assets/Solutions/Researchers.png";
import DotGridDivider from "@/ui/DotGridDivider";

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
      "Strategy, marketing, product, and engineering agents collaborating in one workspace. Get cross-functional alignment without the meetings.",
    href: "/en/solutions/founders",
    thumbnailImageSrc: foundersThumbnail.src,
    thumbnailImageAlt: "Founders solution thumbnail illustration",
  },
  {
    title: "Product managers",
    description:
      "PM, engineering, and design agents working together on specs, user intent, and cross-functional feedback before a single line of code is written.",
    href: "/en/solutions/product-managers",
    thumbnailImageSrc: productManagersThumbnail.src,
    thumbnailImageAlt: "Product managers solution thumbnail illustration",
  },
  {
    title: "Marketers",
    description:
      "Writing, marketing, and strategy agents that remember your voice, audience, and past campaigns. Build consistency at scale.",
    href: "/en/solutions/marketers",
    thumbnailImageSrc: marketersThumbnail.src,
    thumbnailImageAlt: "Marketers solution thumbnail illustration",
  },
  {
    title: "Developers",
    description:
      "Code review, architecture, and security agents that understand your codebase, remember decisions, and debate trade-offs together.",
    href: "/en/solutions/developers",
    thumbnailImageSrc: developersThumbnail.src,
    thumbnailImageAlt: "Developers solution thumbnail illustration",
  },
  {
    title: "Designers",
    description:
      "UX, copy, and brand agents collaborating on your designs. Get holistic critique: accessibility, messaging, and conversion in one thread.",
    href: "/en/solutions/designers",
    thumbnailImageSrc: designersThumbnail.src,
    thumbnailImageAlt: "Designers solution thumbnail illustration",
  },
  {
    title: "Researchers",
    description:
      "Analysis, synthesis, and strategy agents maintaining continuity across your research. Never lose a thread or forget a finding.",
    href: "/en/solutions/researchers",
    thumbnailImageSrc: researchersThumbnail.src,
    thumbnailImageAlt: "Researchers solution thumbnail illustration",
  },
];

const SOLUTION_PILLARS: readonly SolutionPillar[] = [
  {
    title: "Multi-agent collaboration",
    description:
      "Your agents work together. They hand off intelligently, reference each other's insights, and debate trade-offs in one conversation.",
  },
  {
    title: "Persistent project context",
    description:
      "Every decision, insight, and open question is preserved. Come back days or weeks later, your team remembers exactly where you left off.",
  },
  {
    title: "Cross-device continuity",
    description:
      "Switch devices and keep moving. Your team follows you everywhere, same context, same continuity, no re-onboarding.",
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
