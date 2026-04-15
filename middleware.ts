import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n";

const LOCALE_SEGMENT_PATTERN = /^[a-z]{2}(?:-[a-z]{2,4})?$/i;

function hasSupportedLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasSupportedLocale(pathname)) {
    return NextResponse.next();
  }

  const [, firstSegment, ...restSegments] = pathname.split("/");
  const hasUnsupportedLocalePrefix =
    Boolean(firstSegment) &&
    LOCALE_SEGMENT_PATTERN.test(firstSegment) &&
    !isSupportedLocale(firstSegment);

  const normalizedPath = hasUnsupportedLocalePrefix
    ? `/${restSegments.join("/")}`.replace(/\/+$/, "") || "/"
    : pathname;

  const url = request.nextUrl.clone();
  url.pathname =
    normalizedPath === "/"
      ? `/${DEFAULT_LOCALE}`
      : `/${DEFAULT_LOCALE}${normalizedPath}`;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
