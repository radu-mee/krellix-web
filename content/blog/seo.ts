export type BlogSeoMetadata = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywordsCsv: string;
  ogTitle: string;
  ogDescription: string;
  h1Tag: string;
  focusKeyphrase: string;
  canonicalPath: string;
};

const BLOG_SEO_METADATA: readonly BlogSeoMetadata[] = [
  {
    slug: "ai-wont-always-make-you-faster",
    metaTitle: "AI Won't Always Make You Faster | Krellix Blog",
    metaDescription:
      "AI boosts output, but without judgment it can increase errors and slow experienced workers down. Research shows expertise - not tools - determines AI productivity gains.",
    primaryKeyword: "AI productivity",
    secondaryKeywordsCsv:
      "AI and expertise, AI for knowledge workers, does AI make you faster, AI judgment, AI experienced workers, AI productivity gains research",
    ogTitle: "AI Won't Always Make You Faster",
    ogDescription:
      "Research shows AI amplifies judgment, not replaces it. Without expertise, faster output just means more mistakes at speed.",
    h1Tag: "AI won't always make you faster",
    focusKeyphrase: "AI productivity",
    canonicalPath: "/en/blog/ai-wont-always-make-you-faster",
  },
  {
    slug: "what-are-ai-ethics",
    metaTitle: "What Are AI Ethics? A Clear Guide for 2026 | Krellix Blog",
    metaDescription:
      "AI ethics is the practice of building AI that is fair, transparent, and accountable. Learn the core principles, real-world failures, and what ethical AI looks like in practice.",
    primaryKeyword: "AI ethics",
    secondaryKeywordsCsv:
      "what is AI ethics, AI bias, AI fairness, AI transparency, AI accountability, responsible AI, EU AI Act",
    ogTitle: "What Are AI Ethics?",
    ogDescription:
      "A clear, jargon-free guide to AI ethics - the principles, the real-world failures, and what responsible AI actually looks like.",
    h1Tag: "What are AI ethics?",
    focusKeyphrase: "AI ethics",
    canonicalPath: "/en/blog/what-are-ai-ethics",
  },
  {
    slug: "why-ai-projects-fail",
    metaTitle: "Why AI Projects Fail: The Data Behind the 80% Rate | Krellix",
    metaDescription:
      "80% of AI projects fail - not because the technology is broken, but because organizations treat AI as a tech problem instead of a design problem. Here's what the data shows.",
    primaryKeyword: "why AI projects fail",
    secondaryKeywordsCsv:
      "AI project failure rate, AI implementation, AI ROI, AI pilot failure, enterprise AI failure, AI adoption challenges",
    ogTitle: "Why AI Projects Fail",
    ogDescription:
      "80% of AI projects fail. The reasons are organizational, not technical. Here's what the research says - and what the 20% that succeed do differently.",
    h1Tag: "Why AI projects fail",
    focusKeyphrase: "AI project failure rate",
    canonicalPath: "/en/blog/why-ai-projects-fail",
  },
  {
    slug: "what-are-ai-agents",
    metaTitle: "What Are AI Agents? A Plain-English Guide for 2026 | Krellix",
    metaDescription:
      "AI agents are software that can pursue goals on your behalf, making decisions along the way. Learn how they work, what they're good at, and where they fall short.",
    primaryKeyword: "what are AI agents",
    secondaryKeywordsCsv:
      "AI agents explained, AI agents vs chatbots, how AI agents work, multi-agent systems, agentic AI, AI agent use cases",
    ogTitle: "What Are AI Agents?",
    ogDescription:
      "AI agents don't just respond - they act. A clear, honest guide to what they are, how they work, and what they can't do.",
    h1Tag: "What are AI agents?",
    focusKeyphrase: "what are AI agents",
    canonicalPath: "/en/blog/what-are-ai-agents",
  },
  {
    slug: "one-ai-is-not-a-team",
    metaTitle: "One AI Is Not a Team: The Case for Multi-Agent AI | Krellix",
    metaDescription:
      "A single AI assistant gives you one perspective trying to sound like all of them. Multi-agent collaboration produces better results through genuine tension between viewpoints.",
    primaryKeyword: "multi-agent AI",
    secondaryKeywordsCsv:
      "AI collaboration, AI team, multi-agent systems, AI agents working together, one AI vs team of agents, AI for teams",
    ogTitle: "One AI Is Not a Team",
    ogDescription:
      "Great work comes from tension between perspectives. A single AI can't give you that. Multiple specialized agents can.",
    h1Tag: "One AI is not a team",
    focusKeyphrase: "multi-agent AI collaboration",
    canonicalPath: "/en/blog/one-ai-is-not-a-team",
  },
  {
    slug: "what-are-ai-hallucinations",
    metaTitle: "What Are AI Hallucinations? Why AI Gets Things Wrong | Krellix",
    metaDescription:
      "AI hallucinations happen when language models generate confident, plausible output that is factually wrong. Learn why it happens, the types to watch for, and how to protect yourself.",
    primaryKeyword: "AI hallucinations",
    secondaryKeywordsCsv:
      "what are AI hallucinations, why does AI make things up, AI accuracy, AI confabulation, LLM hallucination, AI factual errors",
    ogTitle: "What Are AI Hallucinations?",
    ogDescription:
      "AI can sound perfectly right while being completely wrong. Here's why hallucinations happen and how to protect yourself.",
    h1Tag: "What are AI hallucinations?",
    focusKeyphrase: "AI hallucinations",
    canonicalPath: "/en/blog/what-are-ai-hallucinations",
  },
  {
    slug: "the-context-switching-tax",
    metaTitle: "The Context Switching Tax: How Fragmented AI Kills Productivity",
    metaDescription:
      "Knowledge workers lose up to 4 hours daily to context switching between disconnected AI tools. The productivity cost isn't speed - it's cognitive quality.",
    primaryKeyword: "context switching productivity",
    secondaryKeywordsCsv:
      "context switching cost, AI tool sprawl, AI productivity tools, knowledge worker productivity, too many AI tools, fragmented AI workflow",
    ogTitle: "The Context Switching Tax",
    ogDescription:
      "Your AI tools don't talk to each other. The hidden cost? Up to 4 hours of impaired focus every day.",
    h1Tag: "The context switching tax: how fragmented AI is killing your productivity",
    focusKeyphrase: "context switching productivity cost",
    canonicalPath: "/en/blog/the-context-switching-tax",
  },
  {
    slug: "what-are-ai-tokens",
    metaTitle: "What Are AI Tokens? The Simple Explanation for 2026 | Krellix",
    metaDescription:
      "AI tokens are the basic units of text that language models process. They determine context limits, costs, and why AI sometimes forgets what you said. Here's how they work.",
    primaryKeyword: "AI tokens",
    secondaryKeywordsCsv:
      "what are AI tokens, AI token explained, context window, AI token limit, how tokenization works, AI token cost",
    ogTitle: "What Are AI Tokens?",
    ogDescription:
      "Tokens are the invisible currency of every AI interaction. Understanding them makes you a smarter user of these tools.",
    h1Tag: "What are AI tokens?",
    focusKeyphrase: "what are AI tokens",
    canonicalPath: "/en/blog/what-are-ai-tokens",
  },
  {
    slug: "ai-automation-vs-ai-augmentation",
    metaTitle: "AI Automation vs AI Augmentation: Why Augmentation Wins | Krellix",
    metaDescription:
      "Hybrid human-AI teams outperform full automation by 68.7%. The data is clear: AI augmentation produces better results than replacing humans entirely.",
    primaryKeyword: "AI automation vs augmentation",
    secondaryKeywordsCsv:
      "AI augmentation, human in the loop AI, AI replacing humans, human-AI collaboration, AI automation problems, augmentation vs automation",
    ogTitle: "Automate Everything Is Bad Advice",
    ogDescription:
      "Hybrid human-AI teams outperform full automation by 68.7%. The research is clear - augmentation beats replacement.",
    h1Tag: "Automate everything is bad advice",
    focusKeyphrase: "AI automation vs AI augmentation",
    canonicalPath: "/en/blog/ai-automation-vs-ai-augmentation",
  },
  {
    slug: "ai-is-not-everywhere-yet",
    metaTitle: "AI Is Not Everywhere Yet: Hype vs Reality in 2026 | Krellix",
    metaDescription:
      "AI adoption is slower, messier, and more political than the media narrative. The revolution is real - but it's incremental, uneven, and deeply contextual.",
    primaryKeyword: "AI adoption",
    secondaryKeywordsCsv:
      "AI hype vs reality, AI in the workplace, enterprise AI adoption, AI implementation challenges, AI in business, is AI overhyped",
    ogTitle: "AI Is Not Everywhere (Yet)",
    ogDescription:
      "The hype is universal. The reality is practical. AI adoption is real, but it's slower and messier than anyone admits.",
    h1Tag: "AI is not everywhere (Yet)",
    focusKeyphrase: "AI adoption reality",
    canonicalPath: "/en/blog/ai-is-not-everywhere-yet",
  },
  {
    slug: "the-proactive-ai",
    metaTitle: "The Proactive AI: From Reactive Answers to Real Leverage | Krellix",
    metaDescription:
      "Reactive AI answers questions. Proactive AI creates leverage - anticipating needs, remembering context, and acting before you ask. Here's why the shift matters.",
    primaryKeyword: "proactive AI",
    secondaryKeywordsCsv:
      "reactive vs proactive AI, AI anticipation, AI that remembers, AI context awareness, proactive AI assistant, AI leverage",
    ogTitle: "The Proactive AI",
    ogDescription:
      "Reactive AI answers. Proactive AI creates leverage. The difference changes everything about how AI fits into your work.",
    h1Tag: "The proactive AI",
    focusKeyphrase: "proactive AI",
    canonicalPath: "/en/blog/the-proactive-ai",
  },
  {
    slug: "the-end-of-the-search-bar",
    metaTitle: "The End of the Search Bar: What Comes Next | Krellix Blog",
    metaDescription:
      "Search bars return links. AI delivers answers. The shift from searching to conversing is changing how we find, process, and act on information.",
    primaryKeyword: "AI search",
    secondaryKeywordsCsv:
      "AI vs search, conversational AI search, end of search engines, AI replacing Google, future of search, AI information retrieval",
    ogTitle: "The End of the Search Bar",
    ogDescription:
      "What comes after the search bar is faster, deeper, and conversational. The way we find information is changing fundamentally.",
    h1Tag: "The end of the search bar",
    focusKeyphrase: "AI search future",
    canonicalPath: "/en/blog/the-end-of-the-search-bar",
  },
] as const;

const BLOG_SEO_METADATA_BY_SLUG: Readonly<Record<string, BlogSeoMetadata>> =
  Object.fromEntries(BLOG_SEO_METADATA.map((item) => [item.slug, item]));

export function getBlogSeoBySlug(slug: string): BlogSeoMetadata | undefined {
  return BLOG_SEO_METADATA_BY_SLUG[slug];
}

export function getAllBlogSeoMetadata(): readonly BlogSeoMetadata[] {
  return BLOG_SEO_METADATA;
}
