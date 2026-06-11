import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is AI data analysis?",
    answer:
      "AI data analysis uses artificial intelligence to help organize, explore, interpret, and communicate data more efficiently. It can support activities such as query writing, statistical analysis, visualization planning, and reporting.",
  },
  {
    question: "How can AI help with data analysis?",
    answer:
      "AI can assist with structuring analytical questions, generating and debugging SQL, identifying patterns in data, explaining findings, and helping analysts communicate insights more clearly.",
  },
  {
    question: "Can AI help with data interpretation?",
    answer:
      "Yes. AI can support data interpretation by summarizing findings, identifying trends, highlighting anomalies, and helping analysts understand what results may mean in a specific business context.",
  },
  {
    question: "How does AI support data driven decision making?",
    answer:
      "AI can help support data driven decision making by transforming complex findings into clear narratives, surfacing relevant insights, and making analytical results easier for stakeholders to understand and act on.",
  },
] as const;

export default function ResourceGuideDataAnalysisContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to use AI for data analysis</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to using AI data analysis, from structuring the right question and writing SQL to
            interpreting findings and turning numbers into a narrative that drives decisions.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Working with data involves much more than producing charts or running queries. Analysts often spend
            significant time structuring questions, preparing data, exploring results, validating findings, and
            communicating insights to stakeholders. AI can help accelerate many of these steps while allowing people to
            focus more on judgment and decision-making.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explores practical ways to apply AI data analysis across the data analytics process, helping
            teams move beyond raw numbers and develop a clearer understanding of what the data actually means. From
            strengthening data interpretation to supporting more confident decisions, the focus is on turning
            information into action.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-use-AI-for-data-analysis-krellixlabs.zip"
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
