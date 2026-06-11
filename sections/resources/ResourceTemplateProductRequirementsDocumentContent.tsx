import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceMarkdownNotice from "@/sections/resources/ResourceMarkdownNotice";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const FAQ_ITEMS = [
  {
    question: "What is a PRD?",
    answer:
      "A PRD (Product Requirements Document) is a document that defines the purpose, requirements, user needs, and success criteria for a product or feature before development begins.",
  },
  {
    question: "What should a product requirements document include?",
    answer:
      "Most product requirements document templates include problem statements, user stories, requirements, success metrics, technical considerations, launch planning, dependencies, and open questions.",
  },
  {
    question: "How does a PRD help product teams?",
    answer:
      "A PRD helps product, design, and engineering teams align around shared requirements, priorities, and success criteria before development begins, reducing confusion and improving decision-making throughout the product lifecycle.",
  },
  {
    question: "Can this template support product development planning?",
    answer:
      "Yes. This framework can support product planning, feature development, stakeholder alignment, requirement gathering, launch preparation, and cross-functional collaboration throughout the product lifecycle.",
  },
] as const;

export default function ResourceTemplateProductRequirementsDocumentContent() {
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
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">Product Requirements Document</h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Define what you're building, why it matters, and how success will be measured with a Product Requirements
            Document template designed to align product, design, engineering, and business stakeholders around a
            shared plan.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)] bg-[var(--resource-agent-detail-bg)] px-4 py-10 md:px-6 md:py-12">
        <div className="max-w-[980px]">
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">About this template</h2>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Strong products are built on shared understanding. Before development begins, teams need clarity around
            the problem being solved, the users being served, the requirements that matter most, and the outcomes that
            define success. A well-structured product requirements document creates a single source of truth that
            helps teams make better decisions throughout the product development process.
          </p>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Use this PRD template to document user needs, define functional and non-functional requirements, capture
            technical considerations, organize launch planning, and establish measurable success criteria. The
            framework can support new products, feature development, platform improvements, and other initiatives that
            require alignment across multiple stakeholders.
          </p>

          <a
            href="https://cdlhsmdugnbzoirpwpxh.supabase.co/storage/v1/object/public/website-assets/resources-templates/Product-requirements-document-PRD-krellixlabs.zip"
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
