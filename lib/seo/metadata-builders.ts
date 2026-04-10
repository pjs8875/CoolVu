import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl } from "./site";

const OG_IMAGE_PATH = "/hero-bg.png";

const ogImage = {
  url: OG_IMAGE_PATH,
  alt: "CoolVu window film and architectural surface solutions",
};

export function buildHomeMetadata(): Metadata {
  const base = getSiteUrl();
  const title = `${SITE_NAME} | Window Film, Tint & Surface Solutions`;

  return {
    title: { absolute: title },
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical: `${base}/` },
    openGraph: {
      title,
      description: DEFAULT_DESCRIPTION,
      url: base,
      siteName: "CoolVu",
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${base}${normalizedPath}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "CoolVu",
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
