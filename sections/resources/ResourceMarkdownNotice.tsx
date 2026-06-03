export default function ResourceMarkdownNotice() {
  return (
    <div className="border-b border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-8 md:px-6 md:py-9">
      <div className="flex items-start gap-5 md:items-center">
        <img
          src="/brand/obisidian-logo-32x32.svg"
          alt="Obsidian logo"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 shrink-0"
        />
        <p className="type-paragraph w-full text-[var(--text-muted)] md:w-1/2">
          This resource is a Markdown file. It opens in any text editor, but we recommend{" "}
          <a
            href="https://obsidian.md"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-brand-mint)" }}
            className="underline underline-offset-2 hover:opacity-80"
          >
            Obsidian
          </a>{" "}
          for the best editing and visualization experience.
        </p>
      </div>
    </div>
  );
}
