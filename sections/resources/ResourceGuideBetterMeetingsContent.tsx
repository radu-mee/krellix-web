import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "How can AI improve meetings?",
    answer:
      "AI can help with meeting preparation, agenda creation, discussion structure, decision-making, and follow-through, making meetings more focused and productive from start to finish.",
  },
  {
    question: "Can AI help take meeting notes?",
    answer:
      "Yes. AI can help create clearer meeting notes by identifying key decisions, highlighting important discussion points, extracting action items, and turning conversations into structured records that are easier to review and share.",
  },
  {
    question: "How can AI improve meeting effectiveness?",
    answer:
      "AI can improve meeting effectiveness by helping teams prepare more thoroughly, reduce administrative work, document outcomes consistently, and spend more time on discussion and decision-making.",
  },
  {
    question: "Can AI help with meeting follow-up?",
    answer:
      "Yes. AI can support meeting follow-up by creating summaries, drafting follow-up communications, tracking action items, and helping ensure commitments are carried through after the discussion ends.",
  },
] as const;

export default function ResourceGuideBetterMeetingsContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/guides")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO GUIDES
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to Run Better Meetings with AI</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to using AI before, during, and after meetings to write sharper agendas, capture better
            notes, create clear summaries, and make sure decisions and action items actually get followed up on.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Many meetings consume significant amounts of time without producing clear decisions, accountability, or
            momentum. In most cases, the problem is not the people involved but the process surrounding the meeting.
            Better planning, clearer documentation, stronger follow-up, and more intentional communication can
            dramatically improve meeting effectiveness.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explains how to use AI throughout the meeting lifecycle, from meeting preparation and agenda
            development to note-taking, documentation, decision tracking, and post-meeting reviews. It explores
            practical ways to capture meeting notes, create meeting summaries, strengthen meeting follow up, and help
            teams spend less time revisiting conversations and more time acting on decisions.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-run-better-meetings-with-AI-krellixlabs.zip"
            className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-agent-download-button-bg)] px-3 transition-colors hover:text-brand-mint"
          >
            <ThemeImage
              lightSrc="/brand/download-icon-CTA-black.svg"
              darkSrc="/brand/download-icon-CTA-white.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">Download</span>
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <ThemeImage
              lightSrc="/brand/markdown-icon-26x16-light-mode.svg"
              darkSrc="/brand/markdown-icon-26x16-dark-mode.svg"
              alt=""
              width={26}
              height={16}
            />
          </a>
        </div>
      </div>

      <ResourceMarkdownNotice />

      <div className="my-16">
        <DotGridDivider />
      </div>

      <ResourceKrellixCta />

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
