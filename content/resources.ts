export type ResourceType = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  lightIconSrc: string;
  darkIconSrc: string;
};

export type ResourceFaq = {
  question: string;
  answer: string;
};

export const RESOURCE_TYPES: readonly ResourceType[] = [
  {
    id: "agents",
    title: "Agents",
    description:
      "Copy, paste, and use AI agent prompts that think like specialists.",
    ctaLabel: "Explore agents",
    href: "/resources/agents",
    lightIconSrc: "/brand/resources-agents-icon-light-mode.svg",
    darkIconSrc: "/brand/resources-agents-icon-dark-mode.svg",
  },
  {
    id: "templates",
    title: "Templates",
    description:
      "Download free workflow templates for the documents your team runs on.",
    ctaLabel: "Explore templates",
    href: "/resources/templates",
    lightIconSrc: "/brand/resources-templates-icon-light-mode.svg",
    darkIconSrc: "/brand/resources-templates-icon-dark-mode.svg",
  },
  {
    id: "guides",
    title: "Guides",
    description:
      "Cut through the noise with practical AI guides built for real work.",
    ctaLabel: "Explore guides",
    href: "/resources/guides",
    lightIconSrc: "/brand/resources-guides-icon-light-mode.svg",
    darkIconSrc: "/brand/resources-guides-icon-dark-mode.svg",
  },
];

export const RESOURCE_FAQ_ITEMS: readonly ResourceFaq[] = [
  {
    question: "Are these resources free?",
    answer:
      "Yes. Everything in the Krellix Resources library is completely free-no account required. Download workflow templates, copy AI prompts, and read practical AI guides without signing up or filling out forms.",
  },
  {
    question: "Do I need to use Krellix to use these resources?",
    answer:
      "No. The AI prompts and system prompts work with tools like ChatGPT, Claude, Gemini, and other AI platforms. The templates are standard files you can edit anywhere, and the guides are designed to be useful regardless of the tools your team already uses.",
  },
  {
    question: "How do I use an agent template?",
    answer:
      "Copy the system prompt and paste it into the instructions field of your AI tool. In Krellix, this is the agent creation wizard; in ChatGPT, it's Custom Instructions; in Claude, it's the System Prompt field. Set it once and every conversation with that agent starts from the right context automatically.",
  },
  {
    question: "What are AI prompts?",
    answer:
      "AI prompts are instructions that help guide how an AI responds, behaves, or completes tasks. Strong prompts provide context, goals, tone, and constraints so AI systems can generate more accurate and useful outputs.",
  },
  {
    question: "What are workflow templates?",
    answer:
      "Workflow templates are structured documents or systems that help teams standardize recurring work like planning, reporting, research, meetings, strategy, and execution.",
  },
  {
    question: "Are these AI prompts only for technical users?",
    answer:
      "No. The resources are designed for working professionals across product, marketing, operations, research, strategy, leadership, and creative work-not just technical teams.",
  },
];
