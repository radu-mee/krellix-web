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

const THE_CONTEXT_SWITCHING_TAX_FAQ_ITEMS = [
  {
    question: "What is workflow AI?",
    answer:
      "Workflow AI refers to AI systems designed to support connected workflows across multiple tasks, tools, and processes instead of isolated single-purpose actions.",
  },
  {
    question: "Why does context switching reduce productivity?",
    answer:
      "Frequent context switching interrupts focus and forces the brain to repeatedly rebuild mental context, reducing cognitive quality and increasing fatigue.",
  },
  {
    question: "What is AI workflow fragmentation?",
    answer:
      "AI workflow fragmentation happens when multiple AI tools operate independently without shared context, memory, or continuity between tasks.",
  },
  {
    question: "How does AI affect productivity?",
    answer:
      "AI can improve task efficiency, but disconnected tools can also increase cognitive overload and reduce deep focus if workflows become fragmented.",
  },
  {
    question: "Why do AI tools feel overwhelming?",
    answer:
      "Many users experience AI overload because each tool creates separate conversations, interfaces, and workflows that require constant switching and re-explaining.",
  },
  {
    question: "How can you reduce context switching at work?",
    answer:
      "Reducing context switching requires fewer disconnected tools, better workflow architecture, shared context systems, and more integrated work environments.",
  },
] as const;

const WHAT_ARE_AI_TOKENS_FAQ_ITEMS = [
  {
    question: "What are AI tokens?",
    answer:
      "AI tokens are chunks of text that language models process, count, and generate instead of reading full words the way humans do.",
  },
  {
    question: "What is AI tokenization?",
    answer:
      "AI tokenization is the process of splitting text into smaller units, or tokens, so a language model can process it.",
  },
  {
    question: "What are LLM tokens?",
    answer:
      "LLM tokens are the pieces of text used by large language models to calculate context, generate output, and determine API cost.",
  },
  {
    question: "What is an AI context window?",
    answer:
      "An AI context window is the total amount of input and output a model can process at once, measured in tokens.",
  },
  {
    question: "Why do AI tokens matter?",
    answer:
      "AI tokens matter because they affect model memory, response length, performance, and cost.",
  },
  {
    question: "What are tokens in AI?",
    answer:
      "Tokens in AI are the basic text units a model uses to understand prompts, process context, and generate responses.",
  },
] as const;

const AI_AUTOMATION_VS_AI_AUGMENTATION_FAQ_ITEMS = [
  {
    question: "What is AI augmentation?",
    answer:
      "AI augmentation means using AI to improve human judgment, speed, and decision-making rather than replacing the person doing the work.",
  },
  {
    question: "What is the difference between AI automation and AI augmentation?",
    answer:
      "AI automation removes the human from a task, while AI augmentation keeps the human involved and uses AI to support better outcomes.",
  },
  {
    question: "Is AI automation always bad?",
    answer:
      "No. AI automation works well for narrow, repetitive, rules-based tasks. It becomes riskier in complex knowledge work that requires context and judgment.",
  },
  {
    question: "What is human-in-the-loop AI?",
    answer:
      "Human-in-the-loop AI is an approach where people remain involved in reviewing, guiding, or approving AI outputs.",
  },
  {
    question: "Will AI replace humans?",
    answer:
      "AI will replace some tasks, but the strongest outcomes often come from redesigning work so humans and AI collaborate effectively.",
  },
  {
    question: "Why does AI augmentation work better?",
    answer:
      "AI augmentation works better when tasks require judgment, context, creativity, or strategic trade-offs that AI cannot reliably evaluate alone.",
  },
  {
    question: "What is human-centered AI?",
    answer:
      "Human-centered AI refers to systems designed to support human judgment, collaboration, and decision-making rather than fully replacing people.",
  },
] as const;

const AI_IS_NOT_EVERYWHERE_YET_FAQ_ITEMS = [
  {
    question: "What is AI hype?",
    answer:
      "AI hype refers to exaggerated claims that make AI adoption seem faster, easier, or more universal than it is in real organizations.",
  },
  {
    question: "Why is AI not everywhere yet?",
    answer:
      "AI is not everywhere yet because companies still face cultural, operational, data, governance, and integration barriers.",
  },
  {
    question: "What is AI readiness?",
    answer:
      "AI readiness means having the data, workflows, skills, governance, and infrastructure needed to use AI safely and effectively.",
  },
  {
    question: "What are common AI implementation challenges?",
    answer:
      "Common AI implementation challenges include legacy systems, unclear ownership, data quality issues, security concerns, and difficulty measuring ROI.",
  },
  {
    question: "Why do AI pilot projects fail to scale?",
    answer:
      "AI pilot projects often fail to scale because they are disconnected from real workflows, lack clear ownership, or do not have measurable business outcomes.",
  },
  {
    question: "What is an AI adoption strategy?",
    answer:
      "An AI adoption strategy is a plan for where, how, and why AI will be introduced across workflows, including governance, success metrics, and ownership.",
  },
] as const;

const THE_PROACTIVE_AI_FAQ_ITEMS = [
  {
    question: "What is proactive AI?",
    answer:
      "Proactive AI refers to AI systems that anticipate needs, surface useful information, and suggest actions before the user explicitly asks.",
  },
  {
    question: "What is reactive AI?",
    answer:
      "Reactive AI responds only after a user gives it a prompt, command, or request. It is useful for isolated tasks but limited for ongoing productivity.",
  },
  {
    question: "What is the difference between reactive AI and proactive AI?",
    answer:
      "Reactive AI waits for instructions. Proactive AI uses context, patterns, and signals to flag issues, suggest next steps, and create leverage before being prompted.",
  },
  {
    question: "What is a proactive AI assistant?",
    answer:
      "A proactive AI assistant is an AI system designed to support ongoing work by using context, reminders, and suggestions instead of waiting only for prompts.",
  },
  {
    question: "How can proactive AI improve productivity?",
    answer:
      "Proactive AI can reduce cognitive overhead by spotting patterns, flagging deadlines, suggesting automations, and keeping important information visible.",
  },
  {
    question: "Is proactive AI the same as AI workflow automation?",
    answer:
      "Not exactly. AI workflow automation focuses on automating steps in a process, while proactive AI focuses on anticipating what needs attention and helping users act sooner.",
  },
] as const;

const THE_END_OF_THE_SEARCH_BAR_FAQ_ITEMS = [
  {
    question: "What is conversational search?",
    answer:
      "Conversational search is a way of finding information by asking questions in natural language and refining the answer through follow-up questions instead of using short keyword queries.",
  },
  {
    question: "What is a conversational search engine?",
    answer:
      "A conversational search engine is a search system that lets users ask questions, receive synthesized answers, and continue the search through dialogue.",
  },
  {
    question: "What is an answer engine?",
    answer:
      "An answer engine is a tool designed to provide direct answers rather than only returning a list of links.",
  },
  {
    question: "Is AI replacing Google search?",
    answer:
      "Not completely. Traditional search still works well for navigation, local results, and quick lookups, while AI search is becoming more useful for complex questions, synthesis, and decision support.",
  },
  {
    question: "What is the future of search?",
    answer:
      "The future of search is likely to combine traditional search, AI-generated answers, conversational refinement, source validation, and more personalized information retrieval.",
  },
  {
    question: "What is answer engine optimization?",
    answer:
      "Answer engine optimization is the process of making content easier for AI-powered answer engines to understand, summarize, and cite in response to user questions.",
  },
] as const;

function renderParagraphWithLinks(paragraph: string) {
  const stripMarkdownEmphasis = (text: string) =>
    text
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1");

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
          {stripMarkdownEmphasis(paragraph.slice(lastIndex, matchStart))}
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
        {stripMarkdownEmphasis(label)}
      </a>,
    );

    lastIndex = matchStart + fullMatch.length;
    match = markdownLinkRegex.exec(paragraph);
  }

  if (lastIndex < paragraph.length) {
    nodes.push(
      <span key={`text-${lastIndex}`}>
        {stripMarkdownEmphasis(paragraph.slice(lastIndex))}
      </span>,
    );
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
                : post.slug === "the-context-switching-tax"
                  ? THE_CONTEXT_SWITCHING_TAX_FAQ_ITEMS
                  : post.slug === "what-are-ai-tokens"
                    ? WHAT_ARE_AI_TOKENS_FAQ_ITEMS
                    : post.slug === "ai-automation-vs-ai-augmentation"
                      ? AI_AUTOMATION_VS_AI_AUGMENTATION_FAQ_ITEMS
                      : post.slug === "ai-is-not-everywhere-yet"
                        ? AI_IS_NOT_EVERYWHERE_YET_FAQ_ITEMS
                        : post.slug === "the-proactive-ai"
                          ? THE_PROACTIVE_AI_FAQ_ITEMS
                          : post.slug === "the-end-of-the-search-bar"
                            ? THE_END_OF_THE_SEARCH_BAR_FAQ_ITEMS
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
