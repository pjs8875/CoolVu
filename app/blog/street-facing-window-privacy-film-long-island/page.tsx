import BlogStreetFacingPrivacyPage from "@/components/blog/BlogStreetFacingPrivacyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Street-Facing Window Privacy Film Long Island | Stop the Sidewalk View | CoolVu",
  description: "Stop the sidewalk view through your front windows without closing the blinds. CoolVu explains daytime privacy film for Long Island's street-facing homes. Free estimate: 516-535-9555.",
  path: "/blog/street-facing-window-privacy-film-long-island",
});

export default function Page() {
  return <BlogStreetFacingPrivacyPage />;
}
