import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is AI marketing?",
    answer:
      "AI marketing is the use of artificial intelligence to improve marketing strategy, campaign planning, content creation, audience targeting, and performance analysis.",
  },
  {
    question: "How do you use AI in marketing campaigns?",
    answer:
      "Many teams use AI in marketing campaigns to support audience analysis, positioning, content generation, creative variations, campaign reviews, and campaign analysis. AI can accelerate execution while helping maintain consistent messaging across channels.",
  },
  {
    question: "Can AI help with marketing campaign planning?",
    answer:
      "Yes. AI can support marketing campaign planning by helping teams define audiences, evaluate positioning, develop messaging frameworks, identify success metrics, and generate campaign ideas before execution begins.",
  },
  {
    question: "Can AI help create marketing content?",
    answer:
      "Yes. AI can support content creation by generating first drafts, adapting messaging for different channels, producing creative variations, and helping marketers scale content production while maintaining consistency.",
  },
] as const;

export default function ResourceGuideMarketingCampaignContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to run a marketing campaign with AI</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to using AI marketing techniques throughout the campaign lifecycle, from strategy and
            messaging to content production, campaign execution, and analysis.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Many teams use AI only for writing copy or generating content, but the biggest opportunities often appear
            much earlier in the process. Strong campaigns rely on understanding the audience, developing clear
            positioning, testing ideas, and learning from results. Using AI for marketing can help teams make better
            decisions, uncover stronger insights, and improve consistency across every stage of a campaign.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explains how to use AI in marketing to strengthen planning, messaging, creative development, and
            performance evaluation. It explores practical approaches to AI marketing campaigns, audience research,
            campaign reviews, and post-campaign learning while helping teams connect strategy, execution, and analysis
            more effectively.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-run-a-marketing-campaign-with-AI-krellixlabs.zip"
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
