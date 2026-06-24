import BlogHomeTheaterPage from "@/components/blog/BlogHomeTheaterPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Home Theaters & Media Rooms | CoolVu",
  description: "Sun glare washing out your TV or projector screen? Window film cuts glare and heat at the glass, blocks 99% of UV, and protects your gear. CoolVu of Long Island serves Nassau & Suffolk. Free estimates.",
  path: "/blog/window-film-home-theaters-media-rooms-long-island",
});

export default function Page() {
  return <BlogHomeTheaterPage />;
}
