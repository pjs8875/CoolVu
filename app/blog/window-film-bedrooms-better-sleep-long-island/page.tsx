import BlogBedroomSleepPage from "@/components/blog/BlogBedroomSleepPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Bedrooms: Cooler, Calmer, Better Sleep | CoolVu Long Island",
  description: "Long Island summer sun rises before 5:30am and bakes east- and west-facing bedrooms. CoolVu explains how window film blocks up to 60% of heat and 99% of UV, cuts dawn glare, and adds daytime privacy for better sleep across Nassau and Suffolk.",
  path: "/blog/window-film-bedrooms-better-sleep-long-island",
});

export default function Page() {
  return <BlogBedroomSleepPage />;
}
