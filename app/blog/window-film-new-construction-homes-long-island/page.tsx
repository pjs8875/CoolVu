import BlogNewConstructionPage from "@/components/blog/BlogNewConstructionPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for New-Construction Homes on Long Island | CoolVu",
  description: "Brand-new windows still let heat, glare, and UV rays pour in. Solar window film is the smart first upgrade for new Long Island homes — blocking up to 60% of heat and 99% of UV. CoolVu explains why and where to start.",
  path: "/blog/window-film-new-construction-homes-long-island",
});

export default function Page() {
  return <BlogNewConstructionPage />;
}
