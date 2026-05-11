import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogPost } from "@/content/blog/posts";
import WaitlistHero from "@/sections/waitlist/WaitlistHero";

const AI_PRODUCTIVITY_FAQ_ITEMS = [
  {
    question: "What is AI productivity?",
    answer:
      "AI productivity refers to how AI tools affect the speed and quality of work, depending on how effectively their outputs are evaluated and used.",
  },
  {
    question: "What does working with AI involve?",
    answer:
      "Working with AI involves generating, evaluating, and refining outputs - not just producing them.",
  },
  {
    question: "What is AI decision making?",
    answer:
      "AI decision making is the process of evaluating AI-generated outputs and choosing the best direction based on context and experience.",
  },
  {
    question: "How does AI affect problem solving?",
    answer:
      "AI supports problem solving by generating ideas and structuring thinking, but still requires human judgment to evaluate outcomes.",
  },
] as const;

const AI_ETHICS_FAQ_ITEMS = [
  {
    question: "What is AI ethics?",
    answer:
      "AI ethics is the study and practice of making sure AI systems are developed and used in ways that are fair, transparent, accountable, safe, and beneficial to people.",
  },
  {
    question: "What is ethical AI?",
    answer:
      "Ethical AI refers to AI systems designed and deployed with safeguards that reduce harm, support fairness, protect privacy, and keep people accountable for important decisions.",
  },
  {
    question: "What are the biggest AI ethics challenges?",
    answer:
      "The biggest AI ethics challenges include bias, lack of transparency, unclear accountability, privacy risks, unsafe deployment, and the difficulty of deciding whose values should shape AI systems.",
  },
  {
    question: "What are responsible AI principles?",
    answer:
      "Responsible AI principles usually include fairness, transparency, accountability, privacy, safety, human oversight, and clear documentation of how AI systems are built and used.",
  },
  {
    question: "Is AI unethical?",
    answer:
      "AI is not automatically unethical. It becomes ethically risky when it is trained on biased data, used without oversight, deployed in high-stakes contexts without safeguards, or allowed to affect people without transparency or accountability.",
  },
  {
    question: "Why is AI transparency important?",
    answer:
      "AI transparency matters because people should know when AI is being used, how decisions are made at a general level, and what limits or risks the system may have.",
  },
] as const;

const WHY_AI_PROJECTS_FAIL_FAQ_ITEMS = [
  {
    question: "Why do AI projects fail?",
    answer:
      "Most AI projects fail due to organizational issues, not technology. Common causes include unclear goals, poor data quality, lack of ownership, and weak leadership support.",
  },
  {
    question: "What are the biggest AI adoption challenges?",
    answer:
      "The biggest challenges are data readiness, unclear strategy, lack of internal skills, and difficulty integrating AI into existing workflows.",
  },
  {
    question: "How important is data for AI success?",
    answer:
      "Data is critical. Many AI projects fail because data is incomplete, inconsistent, or not properly structured before implementation begins.",
  },
  {
    question: "Why do AI proof of concepts fail to scale?",
    answer:
      "Most AI proof of concepts fail because they are not connected to real workflows or business outcomes. They demonstrate potential but don't translate into practical use.",
  },
  {
    question: "How can companies implement AI successfully?",
    answer:
      "Successful AI implementation requires clear goals, strong data foundations, executive support, and redesigning workflows around the technology.",
  },
  {
    question: "What do successful AI projects do differently?",
    answer:
      "Successful projects define success metrics early, invest in data readiness, maintain leadership support, and treat AI as a business transformation rather than just a technical tool.",
  },
] as const;

const WHAT_ARE_AI_AGENTS_FAQ_ITEMS = [
  {
    question: "What are AI agents?",
    answer:
      "AI agents are systems that can pursue a goal by making decisions and taking actions across multiple steps, rather than simply responding to prompts.",
  },
  {
    question: "How do AI agents work?",
    answer:
      "They operate in a loop: perceive information, reason about what to do, take action, evaluate the result, and repeat until the goal is achieved.",
  },
  {
    question: "AI agents vs chatbots - what's the difference?",
    answer:
      "Chatbots respond to inputs, while AI agents take action and complete tasks. A chatbot answers questions; an agent works toward a goal.",
  },
  {
    question: "Are AI agents the same as AI assistants?",
    answer:
      "No. AI assistants respond to requests, while AI agents can act more autonomously and handle multi-step workflows.",
  },
  {
    question: "What are AI agents used for?",
    answer:
      "They are used for research, workflow automation, data analysis, and tasks that require multiple steps and decision-making.",
  },
  {
    question: "What are the limitations of AI agents?",
    answer:
      "They struggle with unclear goals, complex judgment, and situations where human context or oversight is required.",
  },
] as const;

const ONE_AI_IS_NOT_A_TEAM_FAQ_ITEMS = [
  {
    question: "What is collaborative artificial intelligence?",
    answer:
      "Collaborative artificial intelligence is when multiple AI systems work together, each with a specific role instead of one system doing everything.",
  },
  {
    question: "Why is one AI assistant not enough?",
    answer:
      "A single AI lacks multiple perspectives, which limits critical thinking, challenge, and refinement in complex tasks.",
  },
  {
    question: "What is multi agent AI?",
    answer:
      "Multi agent AI is a system where multiple AI agents collaborate, each specialising in a specific task or domain.",
  },
  {
    question: "Can AI systems talk to each other?",
    answer:
      "Yes, modern systems enable AI talking to AI, where agents exchange information and build on each other's outputs.",
  },
  {
    question: "What is the benefit of AI speaking to each other?",
    answer:
      "It creates better outcomes through feedback, challenge, and iteration, similar to how human teams work.",
  },
  {
    question: "Is collaborative AI replacing humans?",
    answer:
      "No, it supports humans by improving execution, while decisions and judgment remain human-led.",
  },
] as const;

const WHAT_IS_AN_AI_HALLUCINATION_FAQ_ITEMS = [
  {
    question: "What is an AI hallucination?",
    answer:
      "An AI hallucination is when a model generates confident but incorrect or fabricated information.",
  },
  {
    question: "Why do AI hallucinations happen?",
    answer:
      "They happen because AI predicts language patterns rather than verifying facts.",
  },
  {
    question: "What are AI hallucination examples?",
    answer: "Examples include fake citations, incorrect data, or invented events.",
  },
  {
    question: "Can ChatGPT hallucinate?",
    answer:
      "Yes, ChatGPT hallucination occurs when it produces plausible but false outputs.",
  },
  {
    question: "What is an LLM hallucination?",
    answer:
      "An LLM hallucination refers to incorrect outputs generated by large language models.",
  },
  {
    question: "How can you prevent AI hallucinations?",
    answer:
      "By verifying outputs, using precise prompts, and treating AI as a draft tool.",
  },
] as const;

function renderParagraphWithLinks(paragraph: string) {
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null = markdownLinkRegex.exec(paragraph);

  while (match) {
    const [fullMatch, label, href] = match;
    const matchStart = match.index;

    if (matchStart > lastIndex) {
      nodes.push(
        <span key={`text-${lastIndex}`}>
          {paragraph.slice(lastIndex, matchStart)}
        </span>,
      );
    }

    const isExternal = href.startsWith("http") && !href.includes("krellixlabs.com");
    nodes.push(
      <a
        key={`link-${matchStart}`}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-brand-mint cursor-pointer no-underline underline-offset-2 transition-opacity hover:underline hover:opacity-80"
        style={{ color: "#00C29F" }}
      >
        {label}
      </a>,
    );

    lastIndex = matchStart + fullMatch.length;
    match = markdownLinkRegex.exec(paragraph);
  }

  if (lastIndex < paragraph.length) {
    nodes.push(<span key={`text-${lastIndex}`}>{paragraph.slice(lastIndex)}</span>);
  }

  return nodes;
}

export default function BlogArticleContent({ post }: { post: BlogPost }) {
  const faqItems =
    post.slug === "ai-wont-always-make-you-faster"
      ? AI_PRODUCTIVITY_FAQ_ITEMS
      : post.slug === "what-are-ai-ethics"
        ? AI_ETHICS_FAQ_ITEMS
        : post.slug === "why-ai-projects-fail"
          ? WHY_AI_PROJECTS_FAIL_FAQ_ITEMS
          : post.slug === "what-are-ai-agents"
            ? WHAT_ARE_AI_AGENTS_FAQ_ITEMS
            : post.slug === "one-ai-is-not-a-team"
              ? ONE_AI_IS_NOT_A_TEAM_FAQ_ITEMS
              : post.slug === "what-is-an-ai-hallucination"
                ? WHAT_IS_AN_AI_HALLUCINATION_FAQ_ITEMS
        : null;

  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[760px]">
          <Link
            href="/en/blog"
            className="type-label !text-[#00C29F] transition-opacity hover:opacity-80"
            style={{ color: "#00C29F" }}
          >
            BACK TO BLOG
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">{post.title}</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">{post.excerpt}</p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--ascii-divider-bg)]">
        <div className="relative h-[260px] w-full md:h-[420px]">
          <Image
            src={post.heroImageSrc}
            alt={post.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <article className="px-4 py-12 md:px-6 md:py-16">
        <div className="flex w-full max-w-[760px] flex-col gap-16">
          {post.content.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className="type-h3 text-[var(--text-strong)]">{section.heading}</h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="type-paragraph text-[var(--text-muted)]"
                  >
                    {renderParagraphWithLinks(paragraph)}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="font-display text-[14px] leading-[1.3] text-[var(--text-strong)]">
            {post.publishedAtLabel} - {post.readTimeLabel}
          </p>
        </div>
      </article>

      <div className="border-y border-[var(--border-soft)]">
        <WaitlistHero />
      </div>

      {faqItems ? (
        <div className="px-4 pb-16 pt-12 md:px-6 md:pb-20 md:pt-16">
          <div className="flex flex-col">
            {faqItems.map((item) => (
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
      ) : null}
    </section>
  );
}
