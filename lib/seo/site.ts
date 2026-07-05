/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return "https://www.coolvulongisland.com";
}

export const SITE_NAME = "CoolVu of Long Island";

export const DEFAULT_DESCRIPTION =
  "CoolVu installs solar, privacy, safety & decorative window film & tinting across Long Island. 99% UV blocked, lifetime warranty, free estimates. Call 516-535-9555.";
