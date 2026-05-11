import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n";

const LOCALE_SEGMENT_PATTERN = /^[a-z]{2}(?:-[a-z]{2,4})?$/i;
const EU_VISITOR_COOKIE_KEY = "krellix-eu-visitor";
const EU_COUNTRY_CODES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]);

function hasSupportedLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function isEuVisitor(request: NextRequest): boolean {
  const countryCode = request.headers.get("cf-ipcountry")?.trim().toUpperCase();

  // Safe fallback: when country is unknown, keep consent mode strict.
  if (!countryCode || countryCode.length !== 2) {
    return true;
  }

  return EU_COUNTRY_CODES.has(countryCode);
}

function withEuVisitorCookie(response: NextResponse, isEu: boolean): NextResponse {
  response.cookies.set(EU_VISITOR_COOKIE_KEY, isEu ? "1" : "0", {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    httpOnly: false,
  });

  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const euVisitor = isEuVisitor(request);

  if (hasSupportedLocale(pathname)) {
    return withEuVisitorCookie(NextResponse.next(), euVisitor);
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

  return withEuVisitorCookie(NextResponse.redirect(url, 308), euVisitor);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
