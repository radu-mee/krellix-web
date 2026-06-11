import Link from "next/link";
import { RESOURCE_TEMPLATES } from "@/content/resourceTemplates";
import { localizePath } from "@/lib/i18n";
import BlogPagination from "@/ui/BlogPagination";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const TEMPLATES_PER_PAGE = 12;
const FAQ_ITEMS = [
  {
    question: "What are workflow templates?",
    answer:
      "Workflow templates are reusable documents and systems that help teams standardize recurring work like planning, reporting, meetings, strategy, and execution.",
  },
  {
    question: "Are these templates free?",
    answer:
      "Yes. All templates in the Krellix Resources library are completely free to use, download, and customize.",
  },
  {
    question: "Who are these templates designed for?",
    answer:
      "These templates are built for professionals across operations, product, leadership, marketing, strategy, research, recruiting, and creative work.",
  },
  {
    question: "Can I customize these workflow templates?",
    answer:
      "Yes. You can adapt the templates to match your workflow, processes, goals, documentation style, or preferred way of working.",
  },
  {
    question: "Are these templates only for teams?",
    answer:
      "No. The templates work for both individuals and teams managing structured workflows, projects, planning, and operational work.",
  },
  {
    question: "What kinds of workflow templates are included?",
    answer:
      "The library includes planning documents, meeting frameworks, reporting systems, and reusable workflow process templates for recurring operational work.",
  },
] as const;

const TEMPLATE_DETAIL_ROUTES: Partial<Record<string, string>> = {
  "architecture-decision-record": "/resources/templates/architecture-decision-record",
  "creative-brief": "/resources/templates/creative-brief",
  "competitor-analysis-framework": "/resources/templates/competitor-analysis-framework",
  "go-to-market-strategy": "/resources/templates/go-to-market-strategy",
  "job-description": "/resources/templates/job-description",
  "meeting-agenda-template": "/resources/templates/meeting-agenda-template",
  "okr-planning-template": "/resources/templates/okr-planning-template",
  "sales-call-debrief": "/resources/templates/sales-call-debrief",
  "product-requirements-document": "/resources/templates/product-requirements-document",
  "sprint-retrospective-template": "/resources/templates/sprint-retrospective-template",
  "weekly-status-report": "/resources/templates/weekly-status-report",
  "project-planning-template": "/resources/templates/project-planning-template",
};

function TemplatesListRow({
  slug,
  title,
  description,
  number,
  withDivider,
}: {
  slug: string;
  title: string;
  description: string;
  number: number;
  withDivider: boolean;
}) {
  const detailRoute = TEMPLATE_DETAIL_ROUTES[slug];

  return (
    <article
      id={slug}
      className={`flex min-h-[128px] items-stretch gap-5 bg-[var(--surface-raised)] px-4 py-6 md:items-center md:px-6 ${withDivider ? "border-b border-[var(--border-soft)]" : ""}`.trim()}
    >
      <div className="inline-flex w-8 shrink-0 self-stretch items-center justify-center rounded-full bg-[var(--resource-row-pill-bg)]">
        <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
          {number}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col md:flex-row md:items-center">
        <div className="min-w-0 flex-1">
          <p className="mb-4 whitespace-pre font-display text-[10px] leading-none text-[#807E7F]">
            .... *  : .::  .
          </p>
          <h2 className="font-display text-[20px] leading-none text-[var(--text-strong)]">
            {title}
          </h2>
          <p className="type-paragraph mt-1 text-[var(--text-muted)]">
            {description}
          </p>
        </div>

        {detailRoute ? (
          <Link
            href={localizePath(detailRoute)}
            className="mt-6 inline-flex h-[38px] shrink-0 items-center justify-center self-start rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-row-button-bg)] px-3 transition-colors hover:text-brand-mint md:ml-32 md:mt-0 md:self-auto"
          >
            <ThemeImage
              lightSrc="/brand/resources-get-resource-icon-button-light-mode.svg"
              darkSrc="/brand/resources-get-resource-icon-button-dark-mode.svg"
              alt=""
              width={16}
              height={14}
            />
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
              Get template
            </span>
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <ThemeImage
              lightSrc="/brand/resources-get-resource-chevron-button-light-mode.svg"
              darkSrc="/brand/resources-get-resource-chevron-button-dark-mode.svg"
              alt=""
              width={5}
              height={8}
            />
          </Link>
        ) : (
          <button
            type="button"
            className="mt-6 inline-flex h-[38px] shrink-0 items-center justify-center self-start rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-row-button-bg)] px-3 transition-colors hover:text-brand-mint md:ml-32 md:mt-0 md:self-auto"
          >
            <ThemeImage
              lightSrc="/brand/resources-get-resource-icon-button-light-mode.svg"
              darkSrc="/brand/resources-get-resource-icon-button-dark-mode.svg"
              alt=""
              width={16}
              height={14}
            />
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
              Get template
            </span>
            <span className="mx-[10px] h-[14px] w-px bg-[var(--resource-row-button-divider)]" aria-hidden="true" />
            <ThemeImage
              lightSrc="/brand/resources-get-resource-chevron-button-light-mode.svg"
              darkSrc="/brand/resources-get-resource-chevron-button-dark-mode.svg"
              alt=""
              width={5}
              height={8}
            />
          </button>
        )}
      </div>
    </article>
  );
}

export default function ResourceTemplatesIndexContent({
  currentPage,
}: {
  currentPage: number;
}) {
  const totalPages = Math.max(
    1,
    Math.ceil(RESOURCE_TEMPLATES.length / TEMPLATES_PER_PAGE),
  );
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * TEMPLATES_PER_PAGE;
  const pagedTemplates = RESOURCE_TEMPLATES.slice(
    startIndex,
    startIndex + TEMPLATES_PER_PAGE,
  );

  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <Link
            href={localizePath("/resources")}
            className="type-label inline-flex text-brand-mint transition-opacity hover:opacity-80"
            style={{ color: "#00ddb5" }}
          >
            BACK TO RESOURCES
          </Link>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            Templates
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Download free workflow templates for the documents your work runs on.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)]">
        {pagedTemplates.map((template, index) => (
          <TemplatesListRow
            key={template.slug}
            slug={template.slug}
            title={template.title}
            description={template.description}
            number={startIndex + index + 1}
            withDivider={index < pagedTemplates.length - 1}
          />
        ))}
      </div>

      <BlogPagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        basePath={localizePath("/resources/templates")}
      />

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
              <p className="type-paragraph text-[var(--text-muted)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
