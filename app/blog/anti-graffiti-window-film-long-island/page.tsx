import BlogAntiGraffitiPage from "@/components/blog/BlogAntiGraffitiPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Anti-Graffiti Window Film for Long Island Storefronts & Businesses | CoolVu",
  description: "Vandals tagging or scratching your storefront glass? Anti-graffiti window film takes the damage so your glass does not — replace the film for a fraction of the cost of new glass. CoolVu of Long Island serves Nassau & Suffolk Counties.",
  path: "/blog/anti-graffiti-window-film-long-island",
});

export default function Page() {
  return <BlogAntiGraffitiPage />;
}
