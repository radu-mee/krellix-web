import Link from "next/link";
import { primaryNavigation, siteConfig } from "@/lib/site";
import NavChip from "@/ui/NavChip";
import ThemeImage from "@/ui/ThemeImage";
import ThemeToggle from "@/ui/ThemeToggle";
import WaitlistButton from "@/ui/WaitlistButton";

export default function TopNavbar() {
  return (
    <>
      <div className="hidden h-[76px] items-center justify-between border-b border-[var(--border-strong)] bg-[var(--navbar-top-bg)] px-6 backdrop-blur-md md:flex">
        <Link href="/en" aria-label="Krellix home">
          <ThemeImage
            lightSrc="/brand/krellix-website-logo-black.svg"
            darkSrc="/brand/krellix-website-logo-white.svg"
            alt="Krellix"
            width={72}
            height={20}
            priority
          />
        </Link>
        <WaitlistButton
          href={siteConfig.waitlistHref}
          label="Join the waitlist"
        />
      </div>

      <div className="border-b border-[var(--border-strong)] bg-[var(--navbar-top-bg)] backdrop-blur-md md:hidden">
        <div className="flex h-[76px] items-center justify-between px-4">
          <Link href="/en" aria-label="Krellix home">
            <ThemeImage
              lightSrc="/brand/krellix-website-logo-black.svg"
              darkSrc="/brand/krellix-website-logo-white.svg"
              alt="Krellix"
              width={72}
              height={20}
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <details className="group relative">
              <summary className="flex size-[38px] list-none items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--control-bg)] text-[var(--text-strong)] transition-colors hover:border-brand-mint hover:text-brand-mint [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open navigation menu</span>
                <span className="block h-0.5 w-4 rounded-full bg-current" />
              </summary>
              <div className="absolute right-0 top-[calc(100%+12px)] z-20 w-[260px] border border-[var(--border-soft)] bg-[var(--surface-raised)] p-4 shadow-[var(--shadow-soft)]">
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-3"
                >
                  {primaryNavigation.map((item) => (
                    <NavChip key={item.label} href={item.href} label={item.label} />
                  ))}
                  <WaitlistButton
                    href={siteConfig.waitlistHref}
                    label="Join the waitlist"
                    fullWidth
                    className="mt-2"
                  />
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
