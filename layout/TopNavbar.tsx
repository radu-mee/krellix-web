"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { primaryNavigation, siteConfig } from "@/lib/site";
import NavChip from "@/ui/NavChip";
import ThemeImage from "@/ui/ThemeImage";
import ThemeToggle from "@/ui/ThemeToggle";
import WaitlistButton from "@/ui/WaitlistButton";

export default function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenuOnLinkClick = (event: ReactMouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) {
      setIsMobileMenuOpen(false);
    }
  };

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
            <div className="relative" ref={mobileMenuRef}>
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                className="flex size-[38px] items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--control-bg)] text-[var(--text-strong)] transition-colors"
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                </span>
                <span
                  className={`block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`.trim()}
                />
              </button>
              {isMobileMenuOpen ? (
                <div
                  id="mobile-navigation-menu"
                  className="fixed inset-x-0 top-[76px] z-20 border-y border-[var(--border-soft)] bg-[var(--surface-raised)] p-4 shadow-[var(--shadow-soft)]"
                >
                  <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col gap-3"
                    onClickCapture={closeMobileMenuOnLinkClick}
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
