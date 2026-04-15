export const SUPPORTED_LOCALES = ["en"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "en";

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export function localizePath(
  path: string,
  locale: SupportedLocale = DEFAULT_LOCALE,
): string {
  if (!path) {
    return `/${locale}`;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith("#")) {
    return `/${locale}${path}`;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  if (!path.startsWith("/")) {
    return `/${locale}/${path}`;
  }

  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) {
    return path;
  }

  return `/${locale}${path}`;
}
