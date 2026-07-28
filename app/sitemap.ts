import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
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

// Known publish dates for blog posts. This map is OPTIONAL — every folder under
// app/blog/ is included in the sitemap automatically (see getBlogSlugs below),
// so a new article is never missing even if it's not listed here. This map only
// supplies a nicer <lastmod> date; unlisted posts fall back to the build date.
const BLOG_DATES: Record<string, string> = {
  "window-film-double-pane-windows-long-island": "2026-06-20",
  "window-film-cost-long-island": "2026-06-18",
  "anti-graffiti-window-film-long-island": "2026-06-17",
  "window-film-nursery-baby-room-long-island": "2026-06-15",
  "window-film-car-dealerships-long-island": "2026-06-13",
  "does-window-film-make-house-dark-long-island": "2026-06-12",
  "daytime-privacy-window-film-long-island": "2026-06-20",
  "window-film-skylights-long-island": "2026-06-11",
  "window-film-vs-curtains-blinds-long-island": "2026-06-10",
  "window-film-garage-long-island": "2026-06-09",
  "pseg-long-island-window-film-energy-savings": "2026-06-08",
  "signs-your-long-island-home-needs-window-film": "2026-06-08",
  "window-film-home-gym-long-island": "2026-06-08",
  "window-film-pet-owners-long-island": "2026-06-07",
  "window-film-tax-credits-energy-rebates-long-island": "2026-06-06",
  "window-film-beach-houses-long-island": "2026-06-05",
  "waterfront-homes-window-film-long-island": "2026-06-04",
  "glare-reduction-window-film-long-island": "2026-06-03",
  "window-film-sunrooms-long-island": "2026-06-02",
  "window-film-long-island-rental-properties": "2026-06-01",
  "hurricane-season-window-film-long-island": "2026-06-01",
  "window-film-home-resale-value-long-island": "2026-05-31",
  "window-film-sliding-glass-doors-sunrooms-long-island": "2026-05-30",
  "window-film-medical-offices-long-island": "2026-05-29",
  "window-film-installation-process-long-island": "2026-05-28",
  "window-film-restaurants-long-island": "2026-05-27",
  "best-window-film-brands-long-island": "2026-05-26",
  "window-film-schools-daycares-long-island": "2026-05-25",
  "energy-savings-window-film-long-island": "2026-05-24",
  "how-to-choose-window-tint-level-long-island": "2026-05-23",
  "window-film-condos-apartments-long-island": "2026-05-22",
  "security-window-film-long-island-storefronts": "2026-05-21",
  "uv-damage-furniture-floors-window-film-long-island": "2026-05-20",
  "decorative-window-film-ideas-long-island": "2026-05-20",
  "privacy-window-film-home-office-long-island": "2026-05-19",
  "south-shore-vs-north-shore-window-film-long-island": "2026-05-18",
  "window-film-vs-new-windows-long-island": "2026-05-17",
  "commercial-window-film-long-island": "2026-05-16",
  "how-long-does-window-film-last-long-island": "2026-05-15",
  "summer-heat-solar-window-film-long-island": "2026-05-01",
  "one-way-privacy-window-film-long-island": "2026-05-01",
  "frosted-bathroom-window-film-long-island": "2026-05-01",
  "safety-window-film-storms-long-island": "2026-05-01",
  "window-film-vs-window-tinting-long-island": "2026-05-01",
};

// Auto-discover every published blog article by reading the app/blog directory
// at build time. Any folder containing a page.tsx is a live article and is
// included automatically — this is what keeps the sitemap in sync with no
// manual step. Falls back to the known date map if the directory can't be read.
function getBlogSlugs(): string[] {
  try {
    const blogDir = path.join(process.cwd(), "app", "blog");
    return fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          fs.existsSync(path.join(blogDir, entry.name, "page.tsx"))
      )
      .map((entry) => entry.name);
  } catch {
    return Object.keys(BLOG_DATES);
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const buildDate = new Date();
  const blogSlugs = getBlogSlugs();

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
      lastModified: new Date("2026-07-17"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
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

    {
      url: `${base}/partners`,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: BLOG_DATES[slug] ? new Date(BLOG_DATES[slug]) : buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${base}/locations/nassau-county`,
      lastModified: new Date("2026-07-05"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/locations/suffolk-county`,
      lastModified: new Date("2026-07-05"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...SERVICE_AREA_CITIES.map(({ slug }) => ({
      url: `${base}/locations/${slug}`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
