import type { LegalSection } from "@/types/legal";

export default function LegalArticle({
  sections,
}: {
  sections: readonly LegalSection[];
}) {
  return (
    <article className="px-4 md:px-6">
      <div className="flex flex-col gap-16">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <h2 className="type-h3 text-[var(--text-strong)]">{section.title}</h2>
            <div className="flex flex-col gap-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="type-paragraph max-w-[90ch] text-[var(--text-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

