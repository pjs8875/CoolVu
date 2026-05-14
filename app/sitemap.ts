import type { MetadataRoute } from "next";
import { SERVICE_AREA_CITIES } from "@/lib/data/locations";
import { getSiteUrl } from "@/lib/seo/site";

const SERVICE_PATHS = [
  "solar-and-heat-reduction",
  "safety-and-security-film",
  "privacy-and-decorative-film",
  "commercial-graphics",
  "surface-finishes",
] as const;

const MARKET_PATHS = [
  "residential",
  "commercial",
  "educational",
  "energy",
  "fema",
  "government",
  "places-of-worship",
  "retail",
  "data-centers",
  "healthcare",
] as const;

const GEO_PATHS = [
  "solar-window-film-long-island",
  "privacy-window-film-long-island",
  "safety-security-window-film-long-island",
  "decorative-window-film-long-island",
  "best-window-film-installer-long-island",
  "complete-guide-window-film-long-island",
] as const;

const BLOG_PATHS = [
  "summer-heat-solar-window-film-long-island",
  "one-way-privacy-window-film-long-island",
  "frosted-bathroom-window-film-long-island",
  "safety-window-film-storms-long-island",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...GEO_PATHS.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),
    {
      url: `${base}/press/county-advisory-board-recognition`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...BLOG_PATHS.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...SERVICE_PATHS.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...MARKET_PATHS.map((slug) => ({
      url: `${base}/markets/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...SERVICE_AREA_CITIES.map(({ slug }) => ({
      url: `${base}/locations/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return entries;
}
