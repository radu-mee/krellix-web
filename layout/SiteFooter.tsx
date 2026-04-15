import Image from "next/image";
import Link from "next/link";
import {
  complianceNavigation,
  footerNavigation,
  legalNavigation,
  privacyChoicesLabel,
} from "@/lib/site";
import CurrentYear from "@/ui/CurrentYear";
import ThemeImage from "@/ui/ThemeImage";

function FooterLinks({
  links,
  label,
  className,
}: {
  links: readonly { href: string; label: string }[];
  label: string;
  className?: string;
}) {
  return (
    <nav
      className={`flex flex-col gap-6 text-sm text-[var(--text-strong)] md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-4 ${className ?? ""}`}
      aria-label={label}
    >
      {links.map((item) => {
        const isExternal = item.href.startsWith("http");

        if (isExternal) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-mint"
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="transition-colors hover:text-brand-mint"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-16 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Link href="/en" aria-label="Krellix home">
            <ThemeImage
              lightSrc="/brand/krellix-website-logo-black.svg"
              darkSrc="/brand/krellix-website-logo-white.svg"
              alt="Krellix"
              width={72}
              height={20}
            />
          </Link>
        </div>

        <div className="h-px w-full bg-[var(--border-soft)]" />

        <FooterLinks links={footerNavigation} label="Company links" />

        <div className="h-px w-full bg-[var(--border-soft)]" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <FooterLinks
            links={legalNavigation}
            label="Legal links"
            className="md:max-w-[75%]"
          />
          <button
            type="button"
            data-open-privacy-choices
            className="inline-flex cursor-pointer items-center gap-3 text-sm text-[var(--text-strong)]"
          >
            <span className="text-sm text-[var(--text-strong)]">
              {privacyChoicesLabel}
            </span>
            <ThemeImage
              lightSrc="/brand/privacy-choices-footer-light-mode.svg"
              darkSrc="/brand/privacy-choices-footer-dark-mode.svg"
              alt="Privacy choices icon"
              width={32}
              height={20}
            />
          </button>
        </div>

        <div className="h-px w-full bg-[var(--border-soft)]" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <FooterLinks
            links={complianceNavigation}
            label="Compliance links"
            className="md:max-w-[75%]"
          />
          <ThemeImage
            lightSrc="/brand/eu-logo-black.svg"
            darkSrc="/brand/eu-logo-white.svg"
            alt="European Union mark"
            width={22}
            height={16}
          />
        </div>

        <div className="h-px w-full bg-[var(--border-soft)]" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-4 text-sm text-[var(--text-strong)]">
            <Image
              src="/brand/stripe-climate-logo.svg"
              alt="Stripe Climate member"
              width={40}
              height={28}
            />
            <Link
              href="https://climate.stripe.com/YEcOob"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-mint"
            >
              Stripe Climate member
            </Link>
          </div>
          <p className="text-sm text-[var(--text-strong)]">
            Krellix &copy; <CurrentYear />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}