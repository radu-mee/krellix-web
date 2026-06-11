import Link from "next/link";
import { RESOURCE_GUIDES } from "@/content/resourceGuides";
import { localizePath } from "@/lib/i18n";
import BlogPagination from "@/ui/BlogPagination";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";
import ResourceKrellixCta from "@/sections/resources/ResourceKrellixCta";

const GUIDES_PER_PAGE = 12;
const FAQ_ITEMS = [
  {
    question: "What are practical AI guides?",
    answer:
      "AI guides are practical resources that help professionals apply AI to real workflows, decision-making, planning, research, communication, and operational work.",
  },
  {
    question: "How do these AI guides differ from tutorials?",
    answer:
      "These guides focus on practical workflows, real work scenarios, and implementation strategies rather than theoretical AI concepts or technical development.",
  },
  {
    question: "Are these AI guides beginner-friendly?",
    answer:
      "Yes. The guides are designed for both beginners and experienced professionals looking to improve workflows, decision-making, and practical AI usage.",
  },
  {
    question: "What are AI prompt guides?",
    answer:
      "AI prompt guides explain how to structure prompts, workflows, and instructions so AI systems produce more accurate, useful, and consistent results.",
  },
  {
    question: "Do I need technical experience to use these guides?",
    answer:
      "No. The guides focus on practical implementation and real work scenarios rather than technical AI development.",
  },
  {
    question: "What kinds of AI workflows are covered?",
    answer:
      "The guides cover workflows for product management, meetings, research, strategy, marketing, data analysis, AI adoption, collaboration, and operational execution.",
  },
] as const;

const GUIDE_DETAIL_ROUTES: Partial<Record<string, string>> = {
  "ai-prompts-for-product-managers": "/resources/guides/ai-prompts-for-product-managers",
  "how-developers-can-use-ai-for-code-review":
    "/resources/guides/how-developers-can-use-ai-for-code-review",
  "how-to-build-an-ai-workflow-for-your-team":
    "/resources/guides/how-to-build-an-ai-workflow-for-your-team",
  "how-to-onboard-your-team-to-ai-without-the-pushback":
    "/resources/guides/how-to-onboard-your-team-to-ai-without-the-pushback",
  "how-to-run-a-marketing-campaign-with-ai":
    "/resources/guides/how-to-run-a-marketing-campaign-with-ai",
  "how-to-run-better-meetings-with-ai":
    "/resources/guides/how-to-run-better-meetings-with-ai",
  "how-to-use-ai-for-competitive-analysis":
    "/resources/guides/how-to-use-ai-for-competitive-analysis",
  "how-to-use-ai-for-data-analysis":
    "/resources/guides/how-to-use-ai-for-data-analysis",
  "how-to-use-ai-for-user-research":
    "/resources/guides/how-to-use-ai-for-user-research",
  "how-to-write-a-prd-with-ai":
    "/resources/guides/how-to-write-a-prd-with-ai",
  "how-to-write-a-system-prompt-for-ai-agents":
    "/resources/guides/how-to-write-a-system-prompt-for-ai-agents",
  "the-beginners-guide-to-ai-agents":
    "/resources/guides/the-beginners-guide-to-ai-agents",
};

function GuidesListRow({
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
  const detailRoute = GUIDE_DETAIL_ROUTES[slug];

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
              Get guide
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
              Get guide
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

export default function ResourceGuidesIndexContent({
  currentPage,
}: {
  currentPage: number;
}) {
  const totalPages = Math.max(
    1,
    Math.ceil(RESOURCE_GUIDES.length / GUIDES_PER_PAGE),
  );
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * GUIDES_PER_PAGE;
  const pagedGuides = RESOURCE_GUIDES.slice(startIndex, startIndex + GUIDES_PER_PAGE);

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
            Guides
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Cut through the noise with practical AI guides for real work.
          </p>
        </div>
      </div>

      <div className="border-b border-[var(--border-soft)]">
        {pagedGuides.map((guide, index) => (
          <GuidesListRow
            key={guide.slug}
            slug={guide.slug}
            title={guide.title}
            description={guide.description}
            number={startIndex + index + 1}
            withDivider={index < pagedGuides.length - 1}
          />
        ))}
      </div>

      <BlogPagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        basePath={localizePath("/resources/guides")}
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
