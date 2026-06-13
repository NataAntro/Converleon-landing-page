import { useEffect } from "react";

const SITE_URL = "https://www.converleon.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  jsonLd?: JsonLd | JsonLd[];
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

function setJsonLd(items: JsonLd[]) {
  document.head.querySelectorAll('script[data-converleon-seo="json-ld"]').forEach((element) => element.remove());

  items.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.converleonSeo = "json-ld";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Converleon",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  email: "converleonapp@gmail.com",
};

export const softwareApplicationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Converleon",
  operatingSystem: "macOS 13.5 or later",
  applicationCategory: "UtilitiesApplication",
  description: "An offline Mac file converter for images, video, audio, documents, PDFs, and archives.",
  url: SITE_URL,
  downloadUrl: "https://apps.apple.com/app/converleon/id6751464821",
  image: DEFAULT_IMAGE,
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index, follow, max-image-preview:large",
  jsonLd = [],
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

    document.title = title;
    setCanonical(canonicalUrl);
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: robots });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: image });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    setJsonLd(schemas);
  }, [description, image, jsonLd, path, robots, title, type]);

  return null;
}

export { DEFAULT_IMAGE, SITE_URL };
