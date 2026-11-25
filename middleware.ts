import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n";

const LOCALE_SEGMENT_PATTERN = /^[a-z]{2}(?:-[a-z]{2,4})?$/i;
const EU_VISITOR_COOKIE_KEY = "krellix-eu-visitor";
const WWW_HOSTNAME = "www.krellixlabs.com";
const CANONICAL_HOSTNAME = "krellixlabs.com";
// Countries where analytics require opt-in consent: EU-27, the rest of the EEA
// (IS, LI, NO), the UK (UK GDPR) and Switzerland (revFADP).
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
  "IS",
  "LI",
  "NO",
  "GB",
  "CH",
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

// Only send Set-Cookie when the visitor's cookie is missing or out of date.
// Writing it on every response would make every HTML response uncacheable.
function withEuVisitorCookie(
  request: NextRequest,
  response: NextResponse,
  isEu: boolean,
): NextResponse {
  const value = isEu ? "1" : "0";
  if (request.cookies.get(EU_VISITOR_COOKIE_KEY)?.value === value) {
    return response;
  }

  response.cookies.set(EU_VISITOR_COOKIE_KEY, value, {
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
  const hostname = request.nextUrl.hostname.toLowerCase();

  // Keep crawlers and users on a single canonical host to avoid duplicate URLs.
  if (hostname === WWW_HOSTNAME) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOSTNAME;
    return withEuVisitorCookie(request, NextResponse.redirect(url, 308), euVisitor);
  }

  const isLocaleHomepage = SUPPORTED_LOCALES.some((locale) => pathname === `/${locale}`);
  const isAgentMode = request.nextUrl.searchParams.get("mode")?.toLowerCase() === "agent";

  if (isLocaleHomepage && isAgentMode) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/agent-mode`;
    url.searchParams.delete("mode");
    return withEuVisitorCookie(request, NextResponse.rewrite(url), euVisitor);
  }

  if (hasSupportedLocale(pathname)) {
    return withEuVisitorCookie(request, NextResponse.next(), euVisitor);
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

  return withEuVisitorCookie(request, NextResponse.redirect(url, 308), euVisitor);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
