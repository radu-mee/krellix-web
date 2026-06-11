import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What does a UX researcher do?",
    answer:
      "A UX researcher helps teams understand user behavior, identify usability problems, evaluate product experiences, and turn research findings into insights that support product and design decisions.",
  },
  {
    question: "Can this agent help with usability testing?",
    answer:
      "Yes. The agent can support usability testing by helping structure test scenarios, participant criteria, discussion guides, and research synthesis while identifying friction points and usability issues more clearly.",
  },
  {
    question: "What are UX research methods?",
    answer:
      "UX research methods are structured approaches used to understand user behavior, needs, motivations, and product interactions through techniques like interviews, surveys, usability tests, and observational research.",
  },
  {
    question: "Can AI help with user research?",
    answer:
      "Yes. Using AI for UX research can help structure studies, improve research synthesis, identify patterns across findings, and support more consistent and actionable user insights.",
  },
] as const;

export default function ResourceAgentUxResearcherContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">UX researcher</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A structured researcher that turns user insights into product clarity.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <p className="type-paragraph text-[var(--text-muted)]">
            Design research plans, write unbiased interview scripts, synthesize findings into actionable insights, and
            improve product decisions with an AI UX researcher focused on research quality, usability, and reducing
            bias in user feedback.
          </p>
          <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">How this agent works</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Strong UX research requires more than collecting user opinions. Effective user research helps teams
            understand behaviors, motivations, friction points, and decision-making patterns through structured studies
            and thoughtful analysis. Good research also depends on choosing the right research methods, avoiding bias,
            and translating findings into insights that teams can confidently act on.
          </p>
          <p className="type-paragraph mt-2 text-[var(--text-muted)]">
            Use AI for UX research to support interview planning, usability testing, participant criteria, discussion
            guides, and research synthesis. This agent is designed to help structure usability testing, improve
            research quality, identify patterns across findings, and communicate clearer insights that support better
            product and design decisions.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-agents/UX-researcher-krellixlabs.zip"
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
