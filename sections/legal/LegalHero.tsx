import DotGridDivider from "@/ui/DotGridDivider";

export default function LegalHero({
  title,
  updatedAt,
}: {
  /** No longer rendered; kept so existing pages still type-check. */
  label?: string;
  title: string;
  updatedAt: string;
}) {
  return (
    <section className="flex flex-col gap-16">
      <div className="px-4 md:px-6">
        <div className="flex max-w-[720px] flex-col gap-2">
          <h1 className="type-h1 text-balance text-[var(--text-strong)]">{title}</h1>
          <p className="type-paragraph max-w-[520px] text-balance text-[var(--text-strong)]">
            Last updated: {updatedAt}
          </p>
        </div>
      </div>

      <DotGridDivider />
    </section>
  );
}