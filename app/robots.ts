import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // AI answer engines — explicitly welcomed so CoolVu can be cited
        // in ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews.
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "meta-externalagent",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
