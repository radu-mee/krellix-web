import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is AI adoption?",
    answer:
      "AI adoption is the process of introducing artificial intelligence into existing ways of working and helping people use it effectively over time. Successful adoption focuses on people, processes, and practical outcomes rather than technology alone.",
  },
  {
    question: "Why do teams resist AI adoption?",
    answer:
      "Teams often resist AI adoption because of concerns about job security, uncertainty about the value of new tools, previous negative experiences with AI, or the time required to learn new ways of working.",
  },
  {
    question: "What is an AI adoption strategy?",
    answer:
      "An AI adoption strategy is a structured approach for introducing AI into a team or organization. It typically includes identifying high-value use cases, running pilot programs, providing support, gathering feedback, and refining workflows over time.",
  },
  {
    question: "How can leaders support AI implementation?",
    answer:
      "Effective AI implementation starts with solving real problems, demonstrating clear benefits, involving team members early, and creating opportunities for people to learn and experiment without pressure.",
  },
] as const;

export default function ResourceGuideAiOnboardingContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to Onboard Your Team to AI Without the Pushback</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to AI adoption that helps teams build trust, address concerns, and introduce AI in ways
            that encourage lasting engagement rather than resistance.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Successful AI adoption is rarely about the technology itself. Most challenges come from people, habits,
            expectations, and uncertainty about how AI will affect existing ways of working. When concerns go
            unaddressed or new tools are introduced without a clear purpose, even promising initiatives can struggle
            to gain traction.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explores the people and process side of AI implementation, including how to earn genuine buy-in,
            address job security concerns honestly, introduce new ways of working gradually, and build habits that
            stick. It covers practical approaches to AI adoption strategy, pilot programs, team communication, and
            long-term change management so that AI becomes a useful part of everyday work rather than another
            initiative that fades over time.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-onboard-your-team-to-AI-without-the-pushback-krellixlabs.zip"
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
