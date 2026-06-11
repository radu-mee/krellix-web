import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What are AI agents?",
    answer:
      "AI agents are AI systems designed to work toward a goal rather than simply provide an answer. Depending on their capabilities, they can follow instructions, use information from previous interactions, perform tasks, and help manage work across multiple steps.",
  },
  {
    question: "How do AI agents differ from chatbots?",
    answer:
      "Traditional chatbots are typically built to answer questions or follow predefined conversation flows. AI agents are designed to make decisions, adapt to changing context, and help complete broader objectives rather than handling a single interaction.",
  },
  {
    question: "What are the different types of AI agents?",
    answer:
      "The most common types of AI agents include role-based agents, memory-enabled agents, tool-using agents, and multi-agent systems. Each type provides increasing levels of context awareness, autonomy, and ability to handle complex tasks.",
  },
  {
    question: "Can anyone create a custom AI agent?",
    answer:
      "Yes. Many modern AI platforms allow users to create a custom AI agent by defining its role, instructions, context, and goals. In many cases, useful agents can be built without programming knowledge or technical expertise.",
  },
] as const;

export default function ResourceGuideAiAgentsBeginnerContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">The beginner&apos;s guide to AI agents</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Understand what AI agents actually are, how they differ from traditional AI tools, and how to create your
            first custom AI agent without any technical background.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this guide</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            AI agents are often described in different ways, from simple assistants that follow instructions to
            autonomous AI agents capable of completing multi-step tasks. As a result, it can be difficult for beginners
            to understand what an agent actually is, what makes it different from a traditional AI tool, and when it
            becomes useful.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            This guide provides a practical introduction to AI agents, explaining how they work, the different types of
            AI agents, and how they evolve from simple role-based assistants into more advanced systems with memory,
            tools, and collaboration capabilities. Whether you&apos;re exploring a custom AI agent for personal
            productivity or learning how multi-agent systems work, the goal is to build a clear understanding of the
            technology without requiring a technical background.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-guides/The-beginner's-guide-to-AI-agents-krellixlabs.zip"
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
