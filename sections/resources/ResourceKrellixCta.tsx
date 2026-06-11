import Link from "next/link";
import { localizePath } from "@/lib/i18n";

function ResourceKrellixCtaImage() {
  return (
    <span
      className="mx-auto block w-full max-w-[375px] md:max-w-[786px] lg:max-w-[1232px]"
      role="img"
      aria-label="Krellix AI copilots collaborating in a multi-agent workspace interface"
    >
      <picture className="theme-only-light w-full">
        <source
          media="(min-width: 64rem)"
          srcSet="/images/home-hero-image-light-mode-eng.svg"
        />
        <source
          media="(min-width: 48rem)"
          srcSet="/images/home-hero-tablet-image-light-mode-eng.svg"
        />
        <img
          src="/images/home-hero-mobile-image-light-mode-eng.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={928}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </picture>

      <picture className="theme-only-dark w-full">
        <source
          media="(min-width: 64rem)"
          srcSet="/images/home-hero-image-dark-mode-eng.svg"
        />
        <source
          media="(min-width: 48rem)"
          srcSet="/images/home-hero-tablet-image-dark-mode-eng.svg"
        />
        <img
          src="/images/home-hero-mobile-image-dark-mode-eng.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={919}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </picture>
    </span>
  );
}

export default function ResourceKrellixCta() {
  return (
    <div className="border-b border-[var(--border-soft)] px-4 py-10 md:px-6 md:py-12">
      <div className="flex flex-col">
        <div className="max-w-[760px]">
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

        <div className="mt-10 md:mt-12">
          <ResourceKrellixCtaImage />
        </div>
      </div>
    </div>
  );
}
