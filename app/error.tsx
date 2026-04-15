"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--page-bg)] px-4 py-24 md:px-6">
      <section className="frame-shadow w-full max-w-[720px] border border-[var(--border-soft)] bg-[var(--surface-bg)] p-8 md:p-12">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-brand-mint">
          Something went wrong
        </p>
        <h1 className="mt-4 font-display text-3xl leading-none text-[var(--text-strong)] md:text-4xl">
          The page could not be rendered.
        </h1>
        <p className="mt-4 max-w-[48ch] text-sm text-[var(--text-muted)] md:text-base">
          The current scaffold caught an unexpected error. You can retry this page
          or return to the legal-page sample while we keep building.
        </p>
        {error.digest ? (
          <p className="mt-4 rounded-md border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 text-xs text-[var(--text-muted)]">
            Reference: {error.digest}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-10 items-center rounded-md border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 font-display text-sm text-[var(--text-strong)] transition-colors hover:border-brand-mint hover:text-brand-mint"
          >
            Try again
          </button>
          <Link
            href="/en/cookie-policy"
            className="inline-flex min-h-10 items-center rounded-md border border-transparent px-4 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
          >
            Go to cookie policy
          </Link>
        </div>
      </section>
    </main>
  );
}


