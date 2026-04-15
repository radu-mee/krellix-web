import AsciiEffectDemo, {
  type AsciiEffectPalette,
  type AsciiEffectType,
} from "@/ui/AsciiEffectDemo";
import DotGridDivider from "@/ui/DotGridDivider";

type ContactCard = {
  title: string;
  description: string;
  email: string;
  effect: AsciiEffectType;
  palette: AsciiEffectPalette;
};

const CONTACT_CARDS: readonly ContactCard[] = [
  {
    title: "General queries",
    description: "For general queries and business requests",
    email: "office@krellixlabs.com",
    effect: "waveField",
    palette: "mintBlueViolet",
  },
  {
    title: "Press inquiries",
    description: "For press inquiries and marketing requests",
    email: "press@krellixlabs.com",
    effect: "pulseGrid",
    palette: "limeGoldSky",
  },
  {
    title: "Support requests",
    description: "For technical and product support requests",
    email: "support@krellixlabs.com",
    effect: "topographic",
    palette: "tealIndigoRose",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Krellix exactly?",
    answer:
      "Krellix is a collaborative AI workspace where multiple specialized AI agents work together on your projects. Instead of using a single assistant that tries to do everything, you get a team of agents - a Code Reviewer, Marketing Pro, Business Analyst, Design Expert, and Writing Coach - that collaborate in the same conversation, hand off to each other when topics cross disciplines, and remember what was decided across sessions. Think of it as your own AI team, organized around your work, not scattered across disconnected tools.",
  },
  {
    question: "Who is Krellix meant for?",
    answer:
      "Krellix is built for people who already think in teams - founders, product managers, developers, designers, and researchers. Anyone juggling multiple disciplines across a project and tired of re-explaining context to disconnected AI tools. If your work spans strategy, execution, and iteration, and you want AI that matches that intensity, Krellix is for you.",
  },
  {
    question: "Is my information safe?",
    answer:
      "Yes. Your data is treated as yours. Krellix uses Supabase as its canonical data source, with devices acting as stateless terminals - meaning if a device is lost or compromised, nothing important is exposed. Your projects, conversations, and agent context are encrypted and never used to train AI models. Privacy and data security are foundational to how the product is built, not afterthoughts.",
  },
] as const;

function ContactCardTile({
  card,
  withDivider = false,
}: {
  card: ContactCard;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border-b border-[var(--border-soft)] ${withDivider ? "md:border-l" : ""}`.trim()}
    >
      <div className="flex min-h-[190px] items-center justify-center bg-[var(--surface-bg)] px-6 py-10 md:min-h-[220px]">
        <AsciiEffectDemo effect={card.effect} palette={card.palette} size={160} />
      </div>

      <div className="flex flex-col items-center border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-7 text-center">
        <p className="type-label text-brand-mint">{card.title}</p>
        <p className="type-paragraph mt-4 max-w-[280px] text-[var(--text-muted)]">
          {card.description}
        </p>
        <a
          href={`mailto:${card.email}`}
          className="mt-4 inline-flex h-[30px] items-center rounded-[6px] border border-[var(--border-strong)] bg-[var(--control-bg)] px-3 font-display text-[10px] uppercase tracking-[0.02em] text-[var(--text-strong)] transition-colors hover:text-brand-mint"
        >
          {card.email}
        </a>
      </div>
    </article>
  );
}

export default function ContactContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[720px]">
          <p className="type-label text-brand-mint">Contact us</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            We&apos;d love to hear from you
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Have questions or need assistance? Reach out to our team for support,
            feedback, or partnership inquiries.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {CONTACT_CARDS.map((card, index) => (
          <ContactCardTile key={card.title} card={card} withDivider={index > 0} />
        ))}
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, index) => (
            <article
              key={item.question}
              className="grid gap-4 py-8 md:grid-cols-[minmax(260px,1fr)_minmax(320px,1.2fr)] md:gap-10"
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
