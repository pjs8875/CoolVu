import type { MetadataRoute } from "next";
import { SERVICE_AREA_CITIES } from "@/lib/data/locations";
import { getSiteUrl } from "@/lib/seo/site";

const GEO_PATHS: { slug: string; lastMod: string }[] = [
  { slug: "solar-window-film-long-island",           lastMod: "2026-06-02" },
  { slug: "privacy-window-film-long-island",          lastMod: "2026-06-02" },
  { slug: "safety-security-window-film-long-island",  lastMod: "2026-06-02" },
  { slug: "decorative-window-film-long-island",       lastMod: "2026-06-02" },
  { slug: "best-window-film-installer-long-island",   lastMod: "2026-06-02" },
  { slug: "complete-guide-window-film-long-island",   lastMod: "2026-06-02" },
];

const BLOG_PATHS: { slug: string; lastMod: string }[] = [
  { slug: "window-film-skylights-long-island",                    lastMod: "2026-06-11" },
  { slug: "window-film-vs-curtains-blinds-long-island",           lastMod: "2026-06-10" },
  { slug: "window-film-garage-long-island",                       lastMod: "2026-06-09" },
  { slug: "pseg-long-island-window-film-energy-savings",          lastMod: "2026-06-08" },
  { slug: "signs-your-long-island-home-needs-window-film",        lastMod: "2026-06-08" },
  { slug: "window-film-home-gym-long-island",                     lastMod: "2026-06-08" },
  { slug: "window-film-pet-owners-long-island",                   lastMod: "2026-06-07" },
  { slug: "window-film-tax-credits-energy-rebates-long-island",   lastMod: "2026-06-06" },
  { slug: "window-film-beach-houses-long-island",                 lastMod: "2026-06-05" },
  { slug: "waterfront-homes-window-film-long-island",             lastMod: "2026-06-04" },
  { slug: "glare-reduction-window-film-long-island",              lastMod: "2026-06-03" },
  { slug: "window-film-sunrooms-long-island",                     lastMod: "2026-06-02" },
  { slug: "window-film-long-island-rental-properties",            lastMod: "2026-06-01" },
  { slug: "hurricane-season-window-film-long-island",             lastMod: "2026-06-01" },
  { slug: "window-film-home-resale-value-long-island",            lastMod: "2026-05-31" },
  { slug: "window-film-sliding-glass-doors-sunrooms-long-island", lastMod: "2026-05-30" },
  { slug: "window-film-medical-offices-long-island",              lastMod: "2026-05-29" },
  { slug: "window-film-installation-process-long-island",         lastMod: "2026-05-28" },
  { slug: "window-film-restaurants-long-island",                  lastMod: "2026-05-27" },
  { slug: "best-window-film-brands-long-island",                  lastMod: "2026-05-26" },
  { slug: "window-film-schools-daycares-long-island",             lastMod: "2026-05-25" },
  { slug: "energy-savings-window-film-long-island",               lastMod: "2026-05-24" },
  { slug: "how-to-choose-window-tint-level-long-island",          lastMod: "2026-05-23" },
  { slug: "window-film-condos-apartments-long-island",            lastMod: "2026-05-22" },
  { slug: "security-window-film-long-island-storefronts",         lastMod: "2026-05-21" },
  { slug: "uv-damage-furniture-floors-window-film-long-island",   lastMod: "2026-05-20" },
  { slug: "decorative-window-film-ideas-long-island",             lastMod: "2026-05-20" },
  { slug: "privacy-window-film-home-office-long-island",          lastMod: "2026-05-19" },
  { slug: "south-shore-vs-north-shore-window-film-long-island",   lastMod: "2026-05-18" },
  { slug: "window-film-vs-new-windows-long-island",               lastMod: "2026-05-17" },
  { slug: "commercial-window-film-long-island",                   lastMod: "2026-05-16" },
  { slug: "how-long-does-window-film-last-long-island",           lastMod: "2026-05-15" },
  { slug: "summer-heat-solar-window-film-long-island",            lastMod: "2026-05-01" },
  { slug: "one-way-privacy-window-film-long-island",              lastMod: "2026-05-01" },
  { slug: "frosted-bathroom-window-film-long-island",             lastMod: "2026-05-01" },
  { slug: "safety-window-film-storms-long-island",                lastMod: "2026-05-01" },
  { slug: "window-film-vs-window-tinting-long-island",            lastMod: "2026-05-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date("2026-06-08"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...GEO_PATHS.map(({ slug, lastMod }) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(lastMod),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    })),
    {
      url: `${base}/press/county-advisory-board-recognition`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/reviews`,
      lastModified: new Date("2026-06-08"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-06-08"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...BLOG_PATHS.map(({ slug, lastMod }) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(lastMod),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...SERVICE_AREA_CITIES.map(({ slug }) => ({
      url: `${base}/locations/${slug}`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
