import Link from "next/link";
import { localizePath } from "@/lib/i18n";
import CurrentYear from "@/ui/CurrentYear";
import ThemeImage from "@/ui/ThemeImage";

type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterPrivacyItem = {
  label: string;
  privacyChoices: true;
};

type FooterColumnItem = FooterLinkItem | FooterPrivacyItem;

const footerIntro =
  "Krellix is a collaborative AI workspace. Check for mistakes. It may produce inaccurate information about people, places, or facts.";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: localizePath("/"), label: "Home" },
      { href: localizePath("/product"), label: "Product" },
      { href: localizePath("/pricing"), label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: localizePath("/solutions/founders"), label: "Founders" },
      { href: localizePath("/solutions/product-managers"), label: "Product managers" },
      { href: localizePath("/solutions/marketers"), label: "Marketers" },
      { href: localizePath("/solutions/developers"), label: "Developers" },
      { href: localizePath("/solutions/designers"), label: "Designers" },
      { href: localizePath("/solutions/researchers"), label: "Researchers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: localizePath("/resources/agents"), label: "Agents" },
      { href: localizePath("/resources/templates"), label: "Templates" },
      { href: localizePath("/resources/guides"), label: "Guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: localizePath("/about"), label: "About" },
      { href: localizePath("/contact"), label: "Contact" },
      { href: localizePath("/press-kit"), label: "Press kit" },
      { href: localizePath("/subprocessors"), label: "Subprocessors" },
      { href: "https://climate.stripe.com/YEcOob", label: "Stripe climate" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: localizePath("/terms-of-service"), label: "Terms of service" },
      { href: localizePath("/privacy-policy"), label: "Privacy policy" },
      { href: localizePath("/cookie-policy"), label: "Cookie policy" },
      { href: localizePath("/data-processing-agreement"), label: "Data processing agreement" },
      {
        href: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
        label: "EU artificial intelligence act",
      },
      {
        href: "https://commission.europa.eu/law/law-topic/data-protection_en",
        label: "Data protection",
      },
      {
        href: "https://www.consilium.europa.eu/en/policies/data-protection-regulation/",
        label: "User rights",
      },
      { label: "Your privacy choices", privacyChoices: true },
    ],
  },
] satisfies readonly {
  title: string;
  links: readonly FooterColumnItem[];
}[];

const socialLinks = [
  {
    href: "https://x.com/krellixlabs",
    label: "X",
    icon: "x-logo",
  },
  {
    href: "https://github.com/krellixlabs",
    label: "GitHub",
    icon: "github-logo",
  },
  {
    href: "https://www.instagram.com/krellixlabs",
    label: "Instagram",
    icon: "instagram-logo",
  },
  {
    href: "https://www.youtube.com/@Krellixlabs",
    label: "YouTube",
    icon: "youtube-logo",
  },
  {
    href: "https://www.threads.com/@krellixlabs",
    label: "Threads",
    icon: "threads-logo",
  },
  {
    href: "https://pinterest.com/krellixlabs",
    label: "Pinterest",
    icon: "pinterest-logo",
  },
  {
    href: "https://www.linkedin.com/company/krellixlabs",
    label: "LinkedIn",
    icon: "linkedin-logo",
  },
] as const;

const complianceLabels = [
  "GDPR Compliant",
  "CCPA Compliant",
  "PIPEDA Compliant",
  "LGPD Compliant",
  "SSL Secure",
] as const;

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function FooterColumn({
  links,
  title,
}: {
  links: readonly FooterColumnItem[];
  title: string;
}) {
  return (
    <section className="md:shrink-0">
      <h2 className="text-xs font-semibold leading-none text-[#979797] uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-4 whitespace-nowrap text-sm leading-[1.4] text-[var(--text-strong)]">
        {links.map((item) => {
          if ("privacyChoices" in item) {
            return (
              <li key={item.label}>
                <button
                  type="button"
                  data-open-privacy-choices
                  className="cursor-pointer text-left"
                >
                  {item.label}
                </button>
              </li>
            );
          }

          const linkClassName = "transition-colors hover:text-brand-mint";

          return (
            <li key={item.label}>
              {isExternalHref(item.href) ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={linkClassName}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-raised)] px-6 pt-16 pb-14">
      <div className="mx-auto w-full max-w-[1232px]">
        <div className="grid gap-16 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-28">
          <div className="max-w-[270px]">
            <Link href={localizePath("/")} aria-label="Krellix home" className="inline-flex">
              <ThemeImage
                lightSrc="/brand/krellixlabs-symbol-footer-black.svg"
                darkSrc="/brand/krellixlabs-symbol-footer-white.svg"
                alt="Krellix"
                width={32}
                height={32}
              />
            </Link>

            <p className="mt-[26px] text-sm leading-[1.42] text-[#979797]">
              {footerIntro}
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold leading-none text-[#979797] uppercase">
                Let&apos;s keep in touch
              </p>
              <ul className="mt-5 flex items-center gap-5 sm:gap-6">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-5 w-5 items-center justify-center transition-opacity hover:opacity-70"
                    >
                      <ThemeImage
                        lightSrc={`/brand/${item.icon}-black-20x20.svg`}
                        darkSrc={`/brand/${item.icon}-white-20x20.svg`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid gap-7 md:flex md:gap-16"
          >
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </nav>
        </div>

        <div className="mt-16 h-px w-full bg-[var(--border-soft)] md:mt-7 lg:mt-[25px]" />

        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 text-sm leading-none text-[#979797] md:mt-7 md:flex md:items-center md:justify-center md:gap-7">
          {complianceLabels.map((label) => (
            <li key={label} className="inline-flex items-center gap-3">
              <img
                src="/brand/compliance-badge-24x24.svg"
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 shrink-0"
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-none text-[#979797] md:text-center lg:mt-7">
          Krellix &copy; <CurrentYear />. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
