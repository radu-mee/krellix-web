import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is AI user research?",
    answer:
      "AI user research uses artificial intelligence to support research activities such as study planning, participant screening, interview preparation, research synthesis, and reporting. It helps researchers work more efficiently while still relying on real user feedback.",
  },
  {
    question: "Can AI help with user interviews?",
    answer:
      "Yes. AI can help researchers prepare for user interviews, improve questioning techniques, identify emerging themes, and organize findings after sessions have been completed.",
  },
  {
    question: "How can AI support research synthesis?",
    answer:
      "AI can accelerate research synthesis by grouping observations, identifying recurring themes, assisting with affinity mapping, and helping researchers turn raw notes into structured findings.",
  },
  {
    question: "Can AI help create research reports?",
    answer:
      "Yes. AI can help structure a research report, summarize findings, organize evidence, and connect insights to recommendations while allowing researchers to validate conclusions themselves.",
  },
] as const;

export default function ResourceGuideUserResearchContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to Use AI for User Research</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to using AI for user research, from planning studies and writing interview guides to
            synthesizing findings and generating research insights faster.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Great research depends on real people, not generated answers. While AI cannot replace conversations with
            users, it can help researchers spend less time on administration and more time uncovering meaningful
            insights. From planning studies to analyzing findings, AI can support many of the activities that surround
            research without replacing the human perspective at its core.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explores practical ways to use AI user research techniques throughout the research process. It
            covers user research planning, creating effective discussion guides, improving user interviews,
            accelerating research synthesis, and transforming observations into actionable insights. The goal is not to
            replace research participants, but to help teams learn faster and make better-informed decisions.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-use-AI-for-user-research-krellixlabs.zip"
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
