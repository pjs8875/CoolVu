import BlogGaragePage from "@/components/blog/BlogGaragePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Garages: Beat the Heat | CoolVu",
  description: "Long Island garages can hit 110°F in summer. Solar window film drops garage temperatures by 10–20°F — making your workshop, gym, or man cave usable year-round. Free estimates from CoolVu.",
  path: "/blog/window-film-garage-long-island",
});

export default function Page() {
  return <BlogGaragePage />;
}
