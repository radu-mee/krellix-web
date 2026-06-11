import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is an SEO strategist?",
    answer:
      "An SEO strategist helps improve organic visibility by researching search intent, identifying ranking opportunities, improving content structure, and building long-term SEO strategies aligned with business goals.",
  },
  {
    question: "Can this agent help with keyword research?",
    answer:
      "Yes. The agent can support keyword research by identifying search intent, clustering related topics, analyzing competition, and prioritizing opportunities based on realistic ranking difficulty and business relevance.",
  },
  {
    question: "What is topical authority?",
    answer:
      "Topical authority is the process of building trust and relevance around a subject area by creating interconnected, high-quality content that thoroughly covers related topics and user intent.",
  },
  {
    question: "Can AI help with technical SEO?",
    answer:
      "Yes. Using AI for SEO can help identify technical SEO issues related to metadata, crawlability, internal linking, site structure, and optimization opportunities that may impact organic visibility.",
  },
] as const;

export default function ResourceAgentSeoStrategistContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/agents")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO AGENTS
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">SEO strategist</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A data-driven SEO specialist that turns search intent into organic growth.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <p className="type-paragraph text-[var(--text-muted)]">
            Cluster keywords by intent, audit existing content, improve meta copy, and build topical authority with
            an AI SEO strategist focused on business goals, search intent, and long-term organic growth.
          </p>
          <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">How this agent works</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Modern SEO requires more than adding keywords to a page. Strong organic growth comes from understanding
            search intent, building topical authority, improving content quality, and creating a site structure that
            helps both users and search engines navigate information clearly. Effective SEO strategy also requires
            balancing ranking opportunities with realistic business goals and competitive positioning.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            Use AI for SEO to support keyword research, content audits, internal linking strategy, and technical
            optimization opportunities. This agent is designed to help identify content gaps, improve metadata and
            site structure, strengthen technical SEO, and build more effective SEO strategies around search intent and
            long-term visibility.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-agents/SEO-strategist-krellixlabs.zip"
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
