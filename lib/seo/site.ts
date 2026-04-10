/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.coolvu.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://www.coolvu.com";
}

export const SITE_NAME = "CoolVu of Long Island";

export const DEFAULT_DESCRIPTION =
  "CoolVu serves Long Island, Brooklyn, Queens, NJ & CT with professional window tinting, solar and security film, privacy film, commercial graphics, and architectural surface finishes. Request a free estimate.";
