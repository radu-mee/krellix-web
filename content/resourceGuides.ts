export type ResourceGuide = {
  slug: string;
  title: string;
  description: string;
};

export const RESOURCE_GUIDES: readonly ResourceGuide[] = [
  {
    slug: "ai-prompts-for-product-managers",
    title: "AI prompts for product managers",
    description:
      "A complete reference of copy-paste prompts organized by PM workflows - discovery, prioritization, requirements, stakeholder communication, and more.",
  },
  {
    slug: "how-developers-can-use-ai-for-code-review",
    title: "How Developers Can Use AI for Code Review",
    description:
      "What AI catches well, what it consistently misses, and how to configure a code review agent that improves quality without replacing human judgment.",
  },
  {
    slug: "how-to-build-an-ai-workflow-for-your-team",
    title: "How to build an AI workflow for your team",
    description:
      "A practical guide to building shared AI workflows, prompts, and systems that improve collaboration, reduce repetitive work, and help teams work efficiently.",
  },
  {
    slug: "how-to-onboard-your-team-to-ai-without-the-pushback",
    title: "How to onboard your team to AI without the pushback",
    description:
      "The people and process side of AI adoption - how teams genuinely buy-in, address job security concerns honestly, and build habits that actually stick.",
  },
  {
    slug: "how-to-run-a-marketing-campaign-with-ai",
    title: "How to run a marketing campaign with AI",
    description:
      "From positioning and messaging to content production and post-campaign analysis, a practical framework for using AI throughout a campaign.",
  },
  {
    slug: "how-to-run-better-meetings-with-ai",
    title: "How to run better meetings with AI",
    description:
      "How to use AI before, during and after meetings to write sharper agendas, capture action items, and make sure what was decided actually gets followed up on.",
  },
  {
    slug: "how-to-use-ai-for-competitive-analysis",
    title: "How to use AI for competitive analysis",
    description:
      "A step-by-step workflow for turning scattered competitor research and information into clearer positioning, stronger strategic insight, and better decisions.",
  },
  {
    slug: "how-to-use-ai-for-data-analysis",
    title: "How to use AI for data analysis",
    description:
      "From framing the right question to interpreting findings and communicating insights clearly, a practical guide to AI-assisted analysis.",
  },
  {
    slug: "how-to-use-ai-for-user-research",
    title: "How to use AI for user research",
    description:
      "How to use AI to design better studies, write sharper discussion guides, and synthesize findings faster - without replacing the human your research depends on.",
  },
  {
    slug: "how-to-write-a-prd-with-ai",
    title: "How to write a PRD with AI",
    description:
      "Use AI to pressure-test your problem statement, generate user stories, sharpen requirements, and catch the gaps that only show up during sprint planning.",
  },
  {
    slug: "how-to-write-a-system-prompt-for-ai-agents",
    title: "How to write a system prompt for AI agents",
    description:
      "Learn the four components that turn a generic AI tool into a specialist that actually understands your role, your context, and your workflow.",
  },
  {
    slug: "the-beginners-guide-to-ai-agents",
    title: "The beginner's guide to AI agents",
    description:
      "Understand what AI agents are, how they differ from standard AI tools, and how to build your first one without technical experience.",
  },
] as const;
