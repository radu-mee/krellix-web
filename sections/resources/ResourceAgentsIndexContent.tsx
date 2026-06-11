import Link from "next/link";
import { RESOURCE_AGENTS } from "@/content/resourceAgents";
import { localizePath } from "@/lib/i18n";
import BlogPagination from "@/ui/BlogPagination";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const AGENTS_PER_PAGE = 12;
const FAQ_ITEMS = [
  {
    question: "What are AI agent prompts?",
    answer:
      "AI agent prompts are reusable instructions that define how an AI agent should think, behave, and respond. They help create consistent specialists with defined roles, tone, context, and responsibilities.",
  },
  {
    question: "How do I use these AI agent prompts?",
    answer:
      "Copy the system prompt or agent instructions into your AI tool. In ChatGPT or Claude, you can use custom instructions or system prompts to create reusable AI specialists with consistent behavior.",
  },
  {
    question: "Do these prompts only work with Krellix?",
    answer:
      "No. These AI prompt templates work with ChatGPT, Claude, Gemini, and other AI tools that support persistent instructions or system prompts. You can use them to build reusable agents across different workflows and tools.",
  },
  {
    question: "Can I customize these AI agents?",
    answer:
      "Yes. You can customize the prompts, responsibilities, tone, goals, and behavior of each agent to better match your workflow or preferred way of working.",
  },
  {
    question: "What makes a good AI agent prompt?",
    answer:
      "Strong AI agent prompts provide clear goals, context, tone, constraints, and responsibilities. The more specific the instructions, the more consistent and useful the agent becomes.",
  },
  {
    question: "Are these prompts for technical users only?",
    answer:
      "No. These prompts are for professionals across operations, leadership, product, marketing, research, finance, recruiting, and strategy-not just developers.",
  },
] as const;

function AgentsListRow({
  slug,
  title,
  description,
  number,
  withDivider,
}: {
  slug: string;
  title: string;
  description: string;
  number: number;
  withDivider: boolean;
}) {
  const detailHref = [
    "customer-manager",
    "data-analyst",
    "executive-coach",
    "financial-analyst",
    "legal-expert",
    "project-manager",
    "sales-coach",
    "seo-strategist",
    "ux-researcher",
    "recruiting-agent",
    "social-media-manager",
    "technical-support-agent",
  ].includes(slug)
    ? localizePath(`/resources/agents/${slug}`)
    : null;

  const buttonContent = (
    <>
      <ThemeImage
        lightSrc="/brand/resources-get-resource-icon-button-light-mode.svg"
        darkSrc="/brand/resources-get-resource-icon-button-dark-mode.svg"
        alt=""
        width={16}
        height={14}
      />
      <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
      <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
        Get agent
      </span>
      <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
      <ThemeImage
        lightSrc="/brand/resources-get-resource-chevron-button-light-mode.svg"
        darkSrc="/brand/resources-get-resource-chevron-button-dark-mode.svg"
        alt=""
        width={5}
        height={8}
      />
    </>
  );

  return (
    <article
      id={slug}
      className={`flex min-h-[128px] items-stretch gap-5 bg-[var(--surface-raised)] px-4 py-6 md:items-center md:px-6 ${withDivider ? "border-b border-[var(--border-soft)]" : ""}`.trim()}
    >
      <div className="inline-flex w-8 shrink-0 self-stretch items-center justify-center rounded-full bg-[var(--resource-row-pill-bg)]">
        <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
          {number}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col md:flex-row md:items-center">
        <div className="min-w-0 flex-1">
          <p className="mb-4 whitespace-pre font-display text-[10px] leading-none text-[#807E7F]">
            .... *  : .::  .
          </p>
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
            {title}
          </h2>
          <p className="type-paragraph mt-1 text-[var(--text-muted)]">
            {description}
          </p>
        </div>

        {detailHref ? (
          <Link
            href={detailHref}
            className="mt-6 inline-flex h-[38px] shrink-0 items-center justify-center self-start rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-row-button-bg)] px-3 transition-colors hover:text-brand-mint md:ml-32 md:mt-0 md:self-auto"
          >
            {buttonContent}
          </Link>
        ) : (
          <button
            type="button"
            className="mt-6 inline-flex h-[38px] shrink-0 items-center justify-center self-start rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-row-button-bg)] px-3 transition-colors hover:text-brand-mint md:ml-32 md:mt-0 md:self-auto"
          >
            {buttonContent}
          </button>
        )}
      </div>
    </article>
  );
}

export default function ResourceAgentsIndexContent({
  currentPage,
}: {
  currentPage: number;
}) {
  const totalPages = Math.max(
    1,
    Math.ceil(RESOURCE_AGENTS.length / AGENTS_PER_PAGE),
  );
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * AGENTS_PER_PAGE;
  const pagedAgents = RESOURCE_AGENTS.slice(startIndex, startIndex + AGENTS_PER_PAGE);

  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO RESOURCES
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            Agents
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Copy, paste, and use AI agent prompts that think like specialists.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)]">
        {pagedAgents.map((agent, index) => (
          <AgentsListRow
            key={agent.slug}
            slug={agent.slug}
            title={agent.title}
            description={agent.description}
            number={startIndex + index + 1}
            withDivider={index < pagedAgents.length - 1}
          />
        ))}
      </div>

      <BlogPagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        basePath={localizePath("/resources/agents")}
      />

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
              <p className="type-paragraph text-[var(--text-muted)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
