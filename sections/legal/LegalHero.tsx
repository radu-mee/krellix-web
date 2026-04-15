import DotGridDivider from "@/ui/DotGridDivider";

export default function LegalHero({
  label,
  title,
  updatedAt,
}: {
  label: string;
  title: string;
  updatedAt: string;
}) {
  return (
    <section className="flex flex-col gap-16">
      <div className="px-4 md:px-6">
        <div className="flex max-w-[720px] flex-col gap-2">
          <p className="type-label text-brand-mint">{label}</p>
          <h1 className="type-h1 text-[var(--text-strong)]">{title}</h1>
          <p className="type-paragraph text-[var(--text-muted)]">
            Last updated: {updatedAt}
          </p>
        </div>
      </div>

      <DotGridDivider />
    </section>
  );
}