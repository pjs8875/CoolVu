import BlogHurricaneSeasonPage from "@/components/blog/BlogHurricaneSeasonPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Hurricane Season Window Film for Long Island Homes | CoolVu",
  description: "Hurricane season runs June–November on Long Island. Safety window film holds broken glass together so storms don't turn your windows into flying hazards. CoolVu of Long Island explains what it does — and what it doesn't do.",
  path: "/blog/hurricane-season-window-film-long-island",
});

export default function Page() {
  return <BlogHurricaneSeasonPage />;
}
