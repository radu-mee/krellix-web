export type ResourceAgent = {
  slug: string;
  title: string;
  description: string;
};

export const RESOURCE_AGENTS: readonly ResourceAgent[] = [
  {
    slug: "customer-manager",
    title: "Customer manager",
    description:
      "A retention-focused CRM specialist that turns customers into advocates.",
  },
  {
    slug: "data-analyst",
    title: "Data analyst",
    description:
      "A clear-headed analyst that turns raw datasets into actionable decisions.",
  },
  {
    slug: "executive-coach",
    title: "Executive coach",
    description:
      "A trusted advisor for leaders navigating complexity, growth, and hard decisions.",
  },
  {
    slug: "financial-analyst",
    title: "Financial analyst",
    description:
      "A rigorous financial thinker that turns numbers into structured plans.",
  },
  {
    slug: "legal-expert",
    title: "Legal expert",
    description:
      "A sharp-eyed contract specialist that flags risks and explains legal language clearly.",
  },
  {
    slug: "project-manager",
    title: "Project manager",
    description:
      "A delivery-focused PM that keeps projects on track and stakeholders aligned.",
  },
  {
    slug: "sales-coach",
    title: "Sales coach",
    description:
      "An experienced sales strategist that helps improve preparation, performance, and execution.",
  },
  {
    slug: "seo-strategist",
    title: "SEO strategist",
    description:
      "A data-driven SEO specialist that turns search intent into organic growth.",
  },
  {
    slug: "ux-researcher",
    title: "UX researcher",
    description:
      "A structured researcher that turns user insights into product clarity.",
  },
  {
    slug: "recruiting-agent",
    title: "Recruiting agent",
    description:
      "A hiring specialist that helps teams evaluate candidates and structure better interviews.",
  },
  {
    slug: "social-media-manager",
    title: "Social media manager",
    description:
      "A content-focused strategist that helps teams plan, write, and manage social campaigns.",
  },
  {
    slug: "technical-support-agent",
    title: "Technical support agent",
    description:
      "A clear-headed support specialist that resolves technical issues efficiently.",
  },
] as const;
