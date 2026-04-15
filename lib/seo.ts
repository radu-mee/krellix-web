import type { Metadata } from "next";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, localizePath } from "@/lib/i18n";

export function buildLocaleAlternates(
  path: string,
  canonicalPath?: string,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};

  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = localizePath(path, locale);
  }

  languages["x-default"] = localizePath(path, DEFAULT_LOCALE);

  return {
    canonical: localizePath(canonicalPath ?? path),
    languages,
  };
}
