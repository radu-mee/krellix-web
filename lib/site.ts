import { localizePath } from "@/lib/i18n";

export interface NavigationItem {
  href: string;
  label: string;
}

export const siteConfig = {
  name: "Krellix",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  downloadHref: "#",
  waitlistHref: localizePath("/join-waitlist"),
  youtubeHref: "#",
} as const;

export const primaryNavigation = [
  { href: localizePath("/"), label: "Home" },
  { href: localizePath("/product"), label: "Product" },
  { href: localizePath("/solutions"), label: "Solutions" },
  { href: localizePath("/pricing"), label: "Pricing" },
  { href: localizePath("/blog"), label: "Blog" },
] satisfies readonly NavigationItem[];

export const footerNavigation = [
  ...primaryNavigation,
  { href: localizePath("/about"), label: "About" },
  { href: localizePath("/contact"), label: "Contact" },
  { href: localizePath("/press-kit"), label: "Press kit" },
] satisfies readonly NavigationItem[];

export const legalNavigation = [
  { href: localizePath("/terms-of-service"), label: "Terms of Service" },
  { href: localizePath("/privacy-policy"), label: "Privacy Policy" },
  { href: localizePath("/cookie-policy"), label: "Cookie Policy" },
  { href: localizePath("/subprocessors"), label: "Subprocessors" },
] satisfies readonly NavigationItem[];

export const complianceNavigation = [
  {
    href: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
    label: "EU Artificial Intelligence Act",
  },
  {
    href: "https://commission.europa.eu/law/law-topic/data-protection_en",
    label: "Data Protection",
  },
  {
    href: "https://www.consilium.europa.eu/en/policies/data-protection-regulation/",
    label: "User Rights",
  },
] satisfies readonly NavigationItem[];

export const privacyChoicesLabel = "Your privacy choices";
