import { localizePath } from "@/lib/i18n";

export interface NavigationItem {
  href: string;
  label: string;
}

export const siteConfig = {
  name: "Krellix",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://krellixlabs.com",
  downloadHref: "#",
  waitlistHref: localizePath("/join-waitlist"),
  youtubeHref: "#",
} as const;

export const primaryNavigation = [
  { href: localizePath("/"), label: "Home" },
  { href: localizePath("/product"), label: "Product" },
  { href: localizePath("/solutions"), label: "Solutions" },
  { href: localizePath("/resources"), label: "Resources" },
  { href: localizePath("/pricing"), label: "Pricing" },
  { href: localizePath("/blog"), label: "Blog" },
] satisfies readonly NavigationItem[];

export const privacyChoicesLabel = "Your privacy choices";
