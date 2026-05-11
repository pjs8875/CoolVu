import BlogSafetyFilmPage from "@/components/blog/BlogSafetyFilmPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Safety Window Film for Long Island Storms & Hurricane Season | CoolVu",
  description: "Long Island is hit by nor-easters and hurricanes every year. Safety window film holds shattered glass together so it does not explode into your home. CoolVu of Long Island explains how it works and why it beats storm shutters for everyday living.",
  path: "/blog/safety-window-film-storms-long-island",
});

export default function Page() {
  return <BlogSafetyFilmPage />;
}