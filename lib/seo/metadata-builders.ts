import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl } from "./site";

const OG_IMAGE_PATH = "/og-image.png";

const ogImage = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "CoolVu of Long Island — window film, tint, and surface solutions",
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
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: DEFAULT_DESCRIPTION,
      images: [ogImage],
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
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
