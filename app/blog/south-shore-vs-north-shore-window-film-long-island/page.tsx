import BlogSouthShoreNorthShorePage from "@/components/blog/BlogSouthShoreNorthShorePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "South Shore vs. North Shore Long Island: Which Windows Need Film Most? | CoolVu",
  description: "Which Long Island homes need window film more — South Shore or North Shore? The real answer depends on window direction, not your zip code. CoolVu of Long Island explains everything.",
  path: "/blog/south-shore-vs-north-shore-window-film-long-island",
});

export default function Page() {
  return <BlogSouthShoreNorthShorePage />;
}
