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
    ...SERVICE_PATHS.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...MARKET_PATHS.map((slug) => ({
      url: `${base}/markets/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...SERVICE_AREA_CITIES.map(({ slug }) => ({
      url: `${base}/locations/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
