import BlogSummerHeatPage from "@/components/blog/BlogSummerHeatPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "How Solar Window Film Cuts Your AC Bill This Summer | CoolVu Long Island",
  description: "Long Island summers drive electric bills sky-high. Solar window film blocks up to 60% of heat at the glass before it enters your home. CoolVu of Long Island explains how it works and how much you can save.",
  path: "/blog/summer-heat-solar-window-film-long-island",
});

export default function Page() {
  return <BlogSummerHeatPage />;
}