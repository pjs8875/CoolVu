import BlogWinterInsulatingFilmPage from "@/components/blog/BlogWinterInsulatingFilmPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Help in Winter? Insulating Film for Long Island | CoolVu",
  description: "Window film is not just for summer. Insulating Low-E film slows heat loss through your glass so Long Island homes stay warmer in winter and cooler in summer. CoolVu explains how it works and how to save.",
  path: "/blog/winter-insulating-window-film-long-island",
});

export default function Page() {
  return <BlogWinterInsulatingFilmPage />;
}
