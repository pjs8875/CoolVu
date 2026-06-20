import BlogDaytimePrivacyPage from "@/components/blog/BlogDaytimePrivacyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Daytime Privacy Window Film for Long Island | See Out, Not In | CoolVu",
  description: "Daytime privacy window film keeps your view and natural light while blocking neighbors from seeing in. CoolVu of Long Island explains one-way vs. frosted film, the best rooms to film, and the nighttime limitation. Free estimates in Nassau & Suffolk.",
  path: "/blog/daytime-privacy-window-film-long-island",
});

export default function Page() {
  return <BlogDaytimePrivacyPage />;
}
