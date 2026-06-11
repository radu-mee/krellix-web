import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is a project planning template?",
    answer:
      "A project planning template is a structured framework used to define project objectives, scope, timelines, responsibilities, risks, and success criteria before work begins.",
  },
  {
    question: "What should a project plan include?",
    answer:
      "Most project planning templates include project goals, scope, stakeholders, deliverables, timelines, milestones, risks, dependencies, resource requirements, and communication plans.",
  },
  {
    question: "Why is project planning important?",
    answer:
      "Project planning helps teams align around priorities, reduce uncertainty, manage risks proactively, allocate resources effectively, and improve the likelihood of successful delivery.",
  },
  {
    question: "Can this template support project reporting?",
    answer:
      "Yes. This framework can support project planning, stakeholder communication, milestone tracking, and ongoing project reporting throughout the lifecycle of an initiative.",
  },
] as const;

export default function ResourceTemplateProjectPlanningContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources/templates")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO TEMPLATES
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Project Planning Template</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Plan projects with greater clarity using a Project Planning Template designed to define objectives,
            organize work, align stakeholders, manage risks, and keep delivery on track from kickoff to completion.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this template</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Successful projects rarely fail because teams lack effort. More often, challenges emerge when priorities
            are unclear, responsibilities are undefined, risks are overlooked, or important decisions are made without
            shared visibility. Effective project planning creates alignment early, helping teams understand what needs
            to be delivered, who owns each part of the work, and how progress will be measured along the way.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Use this template for project planning to establish project goals, define scope, organize deliverables,
            map timelines, identify dependencies, manage risks, and coordinate communication across stakeholders. The
            framework can support strategic initiatives, operational projects, product launches, process improvements,
            and other cross-functional efforts that require structure, accountability, and clear execution plans.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-templates/Project-planning-template-krellixlabs.zip"
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
