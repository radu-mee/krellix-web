import Link from "next/link";
import {
  RESOURCE_FAQ_ITEMS,
  RESOURCE_TYPES,
  type ResourceType,
} from "@/content/resources";
import { localizePath } from "@/lib/i18n";
import DotGridDivider from "@/ui/DotGridDivider";
import ThemeImage from "@/ui/ThemeImage";

function ResourceCard({
  resource,
  withRightDivider,
}: {
  resource: ResourceType;
  withRightDivider: boolean;
}) {
  return (
    <article
      id={resource.id}
      className={`flex flex-col border-b border-[var(--border-soft)] ${withRightDivider ? "md:border-r" : ""}`.trim()}
    >
      <div className="flex flex-1 flex-col items-center bg-[var(--surface-bg)] px-6 py-10 text-center">
        <ThemeImage
          lightSrc={resource.lightIconSrc}
          darkSrc={resource.darkIconSrc}
          alt={`${resource.title} resources icon`}
          width={64}
          height={64}
        />
        <h2 className="mt-8 font-display text-[20px] leading-none text-[var(--text-strong)]">
          {resource.title}
        </h2>
        <p className="type-paragraph mt-4 max-w-[320px] text-[var(--text-muted)]">
          {resource.description}
        </p>
        <Link
          href={localizePath(resource.href)}
          style={{
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
          }}
          className="mt-6 inline-flex h-[38px] items-center justify-center rounded-[6px] border border-[var(--border-contrast)] px-4 font-display text-[12px] leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg)]"
        >
          {resource.ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default function ResourcesIndexContent() {
  return (
    <section className="flex flex-col">
      <div className="border-b border-[var(--border-soft)] px-4 py-14 md:px-6 md:py-16">
        <div className="max-w-[900px]">
          <p className="type-label text-brand-mint">Resources</p>
          <h1 className="type-h1 mt-3 text-[var(--text-strong)]">
            The working professional&apos;s toolkit
          </h1>
          <p className="type-paragraph mt-4 text-[var(--text-muted)]">
            Free workflow templates, AI prompts, and guides to help you work
            smarter.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3">
        {RESOURCE_TYPES.map((resource, index) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            withRightDivider={index % 3 !== 2}
          />
        ))}
      </div>

      <div className="my-16">
        <DotGridDivider />
      </div>

      <div className="px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col">
          {RESOURCE_FAQ_ITEMS.map((item) => (
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
