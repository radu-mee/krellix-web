import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is an AI workflow?",
    answer:
      "An AI workflow is a repeatable process that combines human input, AI-generated outputs, review steps, and decision-making to complete work more efficiently and consistently.",
  },
  {
    question: "How do you build effective AI workflows?",
    answer:
      "Effective AI workflows start by identifying repetitive work, documenting successful processes, creating reusable prompts, defining review steps, and continuously improving the workflow based on results.",
  },
  {
    question: "Why use prompt libraries?",
    answer:
      "Prompt libraries help individuals and teams save time, improve consistency, reuse proven prompts, and avoid rebuilding the same solutions from scratch.",
  },
  {
    question: "What is an AI agent workflow?",
    answer:
      "An AI agent workflow is a process where one or more AI agents assist with research, drafting, analysis, review, and other recurring tasks, helping improve the quality and consistency of work.",
  },
] as const;

export default function ResourceGuideAiWorkflowForTeamContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">How to Build an AI Workflow for Your Team</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            A practical guide to moving beyond individual AI habits and building shared AI workflows, prompt libraries,
            and agent configurations that benefit the whole team.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Many people use AI successfully on their own, but very few build processes that make those improvements
            repeatable across a team. One person discovers a useful prompt, another creates an effective agent, and
            someone else develops a workflow that saves hours each week - but the knowledge often stays isolated.
            Without shared systems, the benefits of AI remain limited to individual productivity instead of improving
            how a team works together.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explains how to design practical AI workflows, build shared prompt libraries, create effective AI
            agent workflows, and develop repeatable systems that help knowledge, processes, and best practices spread
            across a team instead of remaining with individuals. Whether you're leading a team, contributing to one, or
            building your own network of AI agents, the goal is the same: create reliable workflows that save time,
            improve quality, and help successful ways of working scale over time.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-build-an-AI-workflow-for-your-team-krellixlabs.zip"
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
