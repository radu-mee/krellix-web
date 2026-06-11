import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "How can AI help product managers?",
    answer:
      "AI can help product managers accelerate research, summarize information, generate first drafts, analyze feedback, create requirements, and support decision-making across a wide range of product management activities.",
  },
  {
    question: "What are the best uses of AI in product management?",
    answer:
      "Common use cases include research synthesis, roadmap planning, feature prioritization, PRD creation, stakeholder communication, user story generation, acceptance criteria drafting, and data analysis.",
  },
  {
    question: "Can AI help write product requirements?",
    answer:
      "Yes. AI can help generate problem statements, structure requirements, draft user stories, create acceptance criteria, and review documentation for clarity and completeness before it is shared with teams.",
  },
  {
    question: "Do these prompts cover different PM workflows?",
    answer:
      "Yes. The prompts in this guide support discovery, research, prioritization, requirements, stakeholder communication, analytics, experimentation, retrospectives, and other common product management workflows.",
  },
] as const;

export default function ResourceGuideAiPromptsForProductManagersContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">AI Prompts for Product Managers</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical collection of copy-paste AI prompts designed to help product managers move faster across
            research, prioritization, roadmap planning, requirements, stakeholder communication, and data analysis
            workflows.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Product management requires constant context switching between customer research, strategic planning,
            requirements definition, stakeholder alignment, and execution. AI can accelerate many of these activities,
            but only when prompts are structured clearly enough to produce useful outputs. This guide provides
            ready-to-use prompts that support common product management workflows while helping teams spend less time
            creating first drafts and more time making decisions.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Use this guide to improve product discovery, generate user interview questions, explore prioritization
            frameworks, support roadmap planning, create user stories, draft acceptance criteria, review requirements,
            analyze research findings, and communicate more effectively with stakeholders. The prompts can be adapted
            for different products, team sizes, and stages of development.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/AI-prompts-for-product-managers-krellixlabs.zip"
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
