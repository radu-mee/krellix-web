export type ResourceTemplate = {
  slug: string;
  title: string;
  description: string;
};

export const RESOURCE_TEMPLATES: readonly ResourceTemplate[] = [
  {
    slug: "architecture-decision-record",
    title: "Architecture decision record",
    description:
      "Document the technical decisions that matter, the options you considered, and the reasoning behind your choice so future work builds on clear context.",
  },
  {
    slug: "creative-brief",
    title: "Creative brief",
    description:
      "Give your creative team everything they need to produce strong work - audience, message, deliverables, and constraints - before execution begins.",
  },
  {
    slug: "competitor-analysis-framework",
    title: "Competitor analysis framework",
    description:
      "Map your competitive landscape, profile key competitors, and turn research into positioning and product decisions.",
  },
  {
    slug: "go-to-market-strategy",
    title: "Go-to-market strategy",
    description:
      "Plan launches end-to-end, from positioning and messaging to pricing, channels, timelines, and the execution steps that bring everything together.",
  },
  {
    slug: "job-description",
    title: "Job description",
    description:
      "Write job descriptions that attract the right candidates by being specific about the role, normal about expectations, and clear about what makes your company worth joining.",
  },
  {
    slug: "meeting-agenda-template",
    title: "Meeting agenda template",
    description:
      "Design meetings around outcomes not topics, so every attendee knows why they\u2019re there and every room leaves knowing what was decided.",
  },
  {
    slug: "okr-planning-template",
    title: "OKR planning template",
    description:
      "Set objectives that are actually ambitious, key results that are actually measurable, and a review process that holds the team accountable.",
  },
  {
    slug: "sales-call-debrief",
    title: "Sales call debrief",
    description:
      "Capture key insights, objections, next steps, and follow-up actions while the conversation is still fresh and easy to act on.",
  },
  {
    slug: "product-requirements-document",
    title: "Product requirements document",
    description:
      "Define what you\u2019re building, why it matters, and what success looks like - all in one structured document your whole team can align around.",
  },
  {
    slug: "sprint-retrospective-template",
    title: "Sprint retrospective template",
    description:
      "Run retrospectives that go beyond what worked and what didn\u2019t - and turn recurring patterns into actionable improvements for future sprints.",
  },
  {
    slug: "weekly-status-report",
    title: "Weekly status report",
    description:
      "Keep stakeholders informed with structured updates covering progress, blockers, priorities, decisions, and the work that still needs attention.",
  },
  {
    slug: "project-planning-template",
    title: "Project planning template",
    description:
      "Plan projects with greater clarity using a Project Planning Template designed to define objectives, organize work, align stakeholders, manage risks, and keep delivery on track from kickoff to completion.",
  },
] as const;
