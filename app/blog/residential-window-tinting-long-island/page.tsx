import BlogResidentialTintingGuidePage from "@/components/blog/BlogResidentialTintingGuidePage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Residential Window Tinting Long Island | CoolVu Long Island",
  description: "Thinking about window tinting for your home? Long Island homeowners use \"window tinting\" and \"window film\" to mean the same thing. See costs, types, and what to ask before you hire an installer. CoolVu of Long Island explains.",
  path: "/blog/residential-window-tinting-long-island",
});

export default function Page() {
  return <BlogResidentialTintingGuidePage />;
}
