import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force a unique build ID on every deploy so Vercel/Next.js never reuses a
  // stale cached page from a previous build. Without this, some routes were
  // intermittently served with old content after a fix had already shipped
  // (e.g. old footer/nav content persisting after the component was fixed).
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  async redirects() {
    return [
      {
        source: "/the-best-window-film-for-homes-on-long-island-reduce-heat-glare-and-uv-damage",
        destination: "/best-window-film-installer-long-island",
        permanent: true,
      },
      {
        source: "/the-best-window-film-for-homes-on-long-island-reduce-heat-glare-and-uv-damage/",
        destination: "/best-window-film-installer-long-island",
        permanent: true,
      },
      {
        source: "/security-window-film-long-island-break-ins-storm-protection",
        destination: "/safety-security-window-film-long-island",
        permanent: true,
      },
      {
        source: "/security-window-film-long-island-break-ins-storm-protection/",
        destination: "/safety-security-window-film-long-island",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
