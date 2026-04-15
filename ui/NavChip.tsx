"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface NavChipProps {
  href: string;
  label: string;
  className?: string;
}

const LOCALE_ROOT_PATH_PATTERN = /^\/[a-z]{2}(?:-[a-z]{2,4})?$/i;

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function isHrefActive(pathname: string, hash: string, href: string) {
  const normalizedPathname = normalizePath(pathname);
  const normalizedHref = normalizePath(href);

  if (normalizedHref === "/") {
    return normalizedPathname === "/" && hash.length === 0;
  }

  if (normalizedHref.startsWith("#")) {
    return normalizedPathname === "/" && hash === normalizedHref;
  }

  if (LOCALE_ROOT_PATH_PATTERN.test(normalizedHref)) {
    return normalizedPathname === normalizedHref && hash.length === 0;
  }

  if (normalizedHref.startsWith("/")) {
    return (
      normalizedPathname === normalizedHref
      || normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  }

  return false;
}

export default function NavChip({ href, label, className = "" }: NavChipProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  const isActive = useMemo(
    () => isHrefActive(pathname, hash, href),
    [pathname, hash, href],
  );

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      style={
        isActive
          ? {
              borderColor: "var(--border-contrast)",
              backgroundColor: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
            }
          : undefined
      }
      className={`inline-flex min-h-[38px] items-center rounded-md border border-[var(--border-strong)] bg-[var(--control-bg)] px-3 font-display text-xs text-[var(--text-strong)] transition-colors hover:bg-[var(--button-waitlist-hover-bg)] md:text-sm ${className}`.trim()}
    >
      {label}
    </Link>
  );
}
