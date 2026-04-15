import AsciiEffectDemo, {
  type AsciiEffectPalette,
  type AsciiEffectType,
} from "@/ui/AsciiEffectDemo";
import DotGridDivider from "@/ui/DotGridDivider";

type AboutValueCard = {
  title: string;
  description: string;
  effect: AsciiEffectType;
  palette: AsciiEffectPalette;
};

const ABOUT_VALUE_CARDS: readonly AboutValueCard[] = [
  {
    title: "Context vs overhead",
    description:
      "The biggest productivity drain is context switching. We built Krellix to keep your momentum inside one shared workspace.",
    effect: "noiseCloud",
    palette: "cyanMagentaAmber",
  },
  {
    title: "Work in collaboration",
    description:
      "No one works in isolation. Your work sits in strategy, product, design, and code at once, so your AI should too.",
    effect: "particleSwarm",
    palette: "sunsetCoralGold",
  },
  {
    title: "Devices should matter",
    description:
      "Your creative workspace should be truly portable. Start on desktop, continue on tablet, iterate anywhere.",
    effect: "waveField",
    palette: "tealIndigoRose",
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
      <div className="flex min-h-[180px] items-center justify-center bg-[var(--surface-bg)] px-6 py-8 md:min-h-[210px]">
        <AsciiEffectDemo effect={card.effect} palette={card.palette} size={160} />
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
            together in one system.
          </p>
        </div>
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="type-h2 text-[var(--text-strong)]">What we believe</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            AI should amplify teams, not replace judgment. Great collaboration
            happens when context is shared, decisions are traceable, and tools
            adapt to how people already work.
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