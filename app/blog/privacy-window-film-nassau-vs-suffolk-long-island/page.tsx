import BlogNassauVsSuffolkPrivacyPage from "@/components/blog/BlogNassauVsSuffolkPrivacyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Privacy Window Film: Nassau vs. Suffolk County | CoolVu Long Island",
  description: "Same film, different houses. CoolVu explains how privacy window film needs differ between Nassau's tighter lots and Suffolk's bigger windows — plus the permit question. Free estimate: 516-535-9555.",
  path: "/blog/privacy-window-film-nassau-vs-suffolk-long-island",
});

export default function Page() {
  return <BlogNassauVsSuffolkPrivacyPage />;
}
