import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

