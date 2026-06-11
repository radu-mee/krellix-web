import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is a system prompt?",
    answer:
      "A system prompt is a set of instructions that defines how an AI should behave before a conversation begins. It provides context about the role, goals, rules, and output style that guide future responses.",
  },
  {
    question: "How do AI system prompts work?",
    answer:
      "AI system prompts work by providing background instructions that remain active throughout a conversation. They influence how an AI prioritizes information, applies rules, follows formats, and responds to different types of requests.",
  },
  {
    question: "How do you write a good system prompt?",
    answer:
      "Writing a good system prompt starts with clearly defining the AI's role, goals, rules, and desired output format. Effective prompts provide enough structure to guide behavior while allowing the AI to adapt to different situations and user needs.",
  },
  {
    question: "Can a system prompt improve AI responses?",
    answer:
      "Yes. A well-written system prompt can help an AI ask better questions, follow instructions more consistently, stay within its area of expertise, and produce outputs that are more relevant to a specific role or task.",
  },
] as const;

export default function ResourceGuideSystemPromptAgentsContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            How to write a system prompt for AI agents
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Learn the four components that turn a generic AI tool into a specialist that actually understands your
            role, your context, and how you want it to work.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            AI tools perform best when they receive clear instructions about their role, responsibilities, and expected
            outputs. Without that guidance, responses often become inconsistent, generic, or disconnected from the
            context that matters most. A well-designed system prompt helps establish those expectations before any
            conversation begins.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide explores the core building blocks of effective AI system prompts, including defining roles,
            setting goals, establishing rules, and creating useful output formats. It also explains how role definitions
            shape an AI persona, allowing an agent to reflect a specific expertise, perspective, and way of working.
            Whether you&apos;re building a custom AI agent for yourself or creating tools for a wider team, the
            objective is to produce more reliable, consistent, and context-aware results.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/How-to-write-a-system-prompt-for-AI-agents-krellixlabs.zip"
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
