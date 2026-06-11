import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is AI code review?",
    answer:
      "AI code review uses machine learning and large language models to analyze code changes, identify potential issues, suggest improvements, and support developers during the review process before code is merged.",
  },
  {
    question: "What can AI code review tools detect?",
    answer:
      "Many AI code review tools can identify security vulnerabilities, style inconsistencies, missing test coverage, maintainability concerns, and common implementation issues. Their effectiveness depends on the quality of the configuration and the context provided.",
  },
  {
    question: "Can AI replace human code review?",
    answer:
      "No. AI code reviews can improve review speed and consistency, but they cannot fully evaluate business logic, long-term architectural decisions, team context, or the trade-offs that experienced engineers consider during review.",
  },
  {
    question: "Can AI help with secure code review?",
    answer:
      "Yes. AI can assist with secure code review by identifying common security vulnerabilities, authentication issues, validation problems, exposed secrets, and other patterns that may introduce risk into a codebase.",
  },
] as const;

export default function ResourceGuideCodeReviewContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How Developers Can Use AI for Code Review</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Learn how to use AI code review with practical guidance on security checks, architectural consistency, test
            coverage, agent configuration, and human review practices.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Code review plays a critical role in software quality, security, maintainability, and knowledge sharing,
            but it is often constrained by limited reviewer time and inconsistent review practices. Modern AI code
            review systems can help teams identify common issues faster, improve review consistency, and reduce the
            amount of manual effort spent on repetitive checks.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explores where AI-powered code review delivers the most value, where it falls short, and how
            developers can integrate AI into existing review workflows without sacrificing engineering judgment. It
            covers secure code review, architecture considerations, review agents, workflow design, and practical
            techniques for improving code quality across software teams.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-developers-can-use-AI-for-code-review-krellixlabs.zip"
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
