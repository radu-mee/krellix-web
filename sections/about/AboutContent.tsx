import Image from "next/image";
import DotGridDivider from "@/ui/DotGridDivider";

type AboutValueCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const ABOUT_VALUE_CARDS: readonly AboutValueCard[] = [
  {
    title: "Context vs overhead",
    description:
      "The biggest productivity drain is context switching. Krellix uses context-aware AI to keep momentum in a shared workspace.",
    imageSrc: "/images/about-context-vs-overhead.png",
    imageAlt: "Context vs overhead illustration",
  },
  {
    title: "Work in collaboration",
    description:
      "No one works in isolation. Your work spans strategy, product, design, and code at once, so your AI should collaborate too.",
    imageSrc: "/images/about-work-in-collaboration.png",
    imageAlt: "Work in collaboration illustration",
  },
  {
    title: "Devices shouldn't matter",
    description:
      "Your creative workspace should be truly portable. Start on desktop, continue on tablet. Your work get synced across devices.",
    imageSrc: "/images/about-devices-should-not-matter.png",
    imageAlt: "Devices should not matter illustration",
  },
];

function AboutValueTile({
  card,
  withDivider = false,
}: {
  card: AboutValueCard;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="relative h-[214px] w-full overflow-hidden bg-[var(--surface-bg)]">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-center border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-7 text-center">
        <p className="type-label text-brand-mint">{card.title}</p>
        <p className="type-paragraph mt-4 max-w-[300px] text-[var(--text-muted)]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

export default function AboutContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[720px]">
          <p className="type-label text-brand-mint">About us</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Who we are</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            We&apos;re a team of builders who believe the future of work is
            collaboration between humans and AI, organized around real projects.
            We build context-driven AI, where intelligence works together in a
            shared environment.
          </p>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="type-h2 text-[var(--text-strong)]">Why we built Krellix</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            We started Krellix because modern teams don&apos;t work in one lane.
            Strategy, design, coding, and writing constantly overlap. Most tools
            still treat this as separate workflows. Krellix brings those worlds
            together through a more interactive AI collaboration.
          </p>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="type-h2 text-[var(--text-strong)]">What be believe</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            AI should amplify teams, not replace judgment. Great collaboration
            happens when context is shared, decisions are traceable, and tools
            adapt to how people already work. We believe in a more natural way
            of working with AI, where intelligence supports real workflows.
          </p>
        </div>
      </div>

      <div className="mt-16 grid border-t border-[var(--border-soft)] md:grid-cols-3">
        {ABOUT_VALUE_CARDS.map((card, index) => (
          <AboutValueTile key={card.title} card={card} withDivider={index > 0} />
        ))}
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>
    </section>
  );
}
