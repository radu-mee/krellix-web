import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is competitive analysis?",
    answer:
      "Competitive analysis is the process of evaluating competitors to understand their strengths, weaknesses, positioning, pricing, products, and market strategy. The goal is to identify opportunities, risks, and areas where a business can differentiate itself.",
  },
  {
    question: "Can AI help with competitor research?",
    answer:
      "Yes. AI can accelerate competitor research by organizing information from multiple sources, identifying patterns, summarizing findings, and helping teams compare competitors more efficiently.",
  },
  {
    question: "What is competitive intelligence?",
    answer:
      "Competitive intelligence is the practice of gathering and analyzing information about competitors, customers, and market conditions to support better business decisions and long-term strategy.",
  },
  {
    question: "How can AI support competitive positioning?",
    answer:
      "AI can help strengthen competitive positioning by identifying competitor messaging, uncovering market gaps, analyzing customer feedback, and highlighting opportunities to differentiate products or services.",
  },
] as const;

export default function ResourceGuideCompetitiveAnalysisContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to use AI for competitive analysis</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to using AI for competitive analysis, competitor research, and competitive intelligence
            so you can identify opportunities, understand market dynamics, and make stronger strategic decisions.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Understanding competitors has always been valuable, but gathering information, comparing findings, and
            turning insights into action can be time-consuming. Websites, reviews, pricing pages, product updates, and
            customer feedback often live across multiple sources, making it difficult to build a complete picture of
            the market.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explains how to use AI for competitive analysis, competitor research, and competitive
            intelligence more efficiently. It explores how to map the competitive landscape, understand how competitors
            position themselves, identify market opportunities, monitor competitive changes, and translate findings
            into practical decisions. Whether you're refining your strategy, supporting product development, preparing
            a sales battlecard, or strengthening your competitive positioning, the goal is to move from scattered
            information to actionable insight.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-use-AI-for-competitive-analysis-krellixlabs.zip"
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
