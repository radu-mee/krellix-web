import Link from "next/link";
import { RESOURCE_GUIDES } from "@/content/resourceGuides";
import { localizePath } from "@/lib/i18n";
import BlogPagination from "@/ui/BlogPagination";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";

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
  return (
    <article
      id={slug}
      className={`flex min-h-[128px] items-center gap-5 bg-[var(--surface-raised)] px-4 py-6 md:px-6 ${withDivider ? "border-b border-[var(--border-soft)]" : ""}`.trim()}
    >
      <div className="inline-flex w-8 shrink-0 self-stretch items-center justify-center rounded-full bg-[var(--resource-row-pill-bg)]">
        <span className="font-display text-[12px] leading-none text-[var(--text-strong)]">
          {number}
        </span>
      </div>

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

      <button
        type="button"
        className="ml-8 inline-flex h-[38px] shrink-0 items-center justify-center rounded-[6px] border border-[var(--border-soft)] bg-[var(--resource-row-button-bg)] px-3 transition-colors hover:text-brand-mint md:ml-32"
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
          <h1 className="mt-3 font-display text-[52px] leading-none text-[var(--text-strong)] md:text-[40px]">
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

      <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(420px,1.2fr)] md:items-center md:gap-10">
          <div className="max-w-[460px]">
            <p className="type-label text-brand-mint">TRY KRELLIX FOR FREE</p>
            <h2 className="mt-3 font-display text-[20px] leading-none text-[var(--text-strong)] md:text-[24px]">
              Get more done with your team of AI copilots
            </h2>
            <p className="type-paragraph mt-4 text-[var(--text-muted)]">
              Solo or with a team, Krellix gives you the collaborators you need to move faster and ship better work.
            </p>
            <Link
              href={localizePath("/product")}
              style={{
                backgroundColor: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
              className="mt-8 inline-flex h-[38px] items-center justify-center rounded-[6px] px-4 font-display text-[12px] leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]"
            >
              Learn more
            </Link>
          </div>

          <div className="hidden justify-center md:flex">
            <ThemeImage
              lightSrc="/images/resources-chat-image-light-mode-eng.svg"
              darkSrc="/images/resources-chat-image-dark-mode-eng.svg"
              alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
              width={738}
              height={637}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <ThemeImage
            lightSrc="/images/resources-chat-mobile-image-light-mode-eng.svg"
            darkSrc="/images/resources-chat-mobile-image-dark-mode-eng.svg"
            alt="Krellix AI copilots working together in a shared workspace to help individuals and teams manage tasks, communicate, and ship better work."
            width={375}
            height={639}
          />
        </div>
      </div>

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
