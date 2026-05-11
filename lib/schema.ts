import { DEFAULT_LOCALE, localizePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

export const ORGANIZATION_ID = new URL(
  "#organization",
  siteConfig.siteUrl,
).toString();
export const WEBSITE_ID = new URL("#website", siteConfig.siteUrl).toString();

function getSiteRootUrl() {
  return new URL("/", siteConfig.siteUrl).toString();
}

export function buildLocalizedAbsoluteUrl(path: string) {
  return new URL(localizePath(path, DEFAULT_LOCALE), siteConfig.siteUrl).toString();
}

export function buildSiteSchemaNodes(): JsonLdNode[] {
  return [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: siteConfig.name,
      url: getSiteRootUrl(),
      logo: {
        "@type": "ImageObject",
        url: new URL("/icon.svg", siteConfig.siteUrl).toString(),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: siteConfig.name,
      url: getSiteRootUrl(),
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: DEFAULT_LOCALE,
    },
  ];
}

type WebPageSchemaInput = {
  path: string;
  title: string;
  description: string;
  mainEntityId?: string;
};

export function buildWebPageSchema({
  path,
  title,
  description,
  mainEntityId,
}: WebPageSchemaInput) {
  const pageUrl = buildLocalizedAbsoluteUrl(path);
  const webPageSchema: JsonLdNode = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
    inLanguage: DEFAULT_LOCALE,
  };

  if (mainEntityId) {
    webPageSchema.mainEntity = {
      "@id": mainEntityId,
    };
  }

  return {
    pageUrl,
    webPageSchema,
  };
}

type ServiceSchemaInput = {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  audienceType: string;
};

export function buildServiceSchema({
  path,
  name,
  description,
  serviceType,
  audienceType,
}: ServiceSchemaInput) {
  const pageUrl = buildLocalizedAbsoluteUrl(path);
  const serviceId = `${pageUrl}#service`;

  const serviceSchema: JsonLdNode = {
    "@type": "Service",
    "@id": serviceId,
    name,
    description,
    serviceType,
    url: pageUrl,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    audience: {
      "@type": "Audience",
      audienceType,
    },
    areaServed: "Global",
    availableLanguage: DEFAULT_LOCALE,
  };

  return {
    serviceId,
    serviceSchema,
  };
}
