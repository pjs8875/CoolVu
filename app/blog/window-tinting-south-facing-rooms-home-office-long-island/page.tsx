import BlogSouthFacingOfficeTintingPage from "@/components/blog/BlogSouthFacingOfficeTintingPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Tinting for South-Facing Rooms & Home Offices | CoolVu Long Island",
  description: "South-facing home offices get the most sun of any room in the house. Window tinting blocks up to 60% of heat and cuts glare 70-90%, keeping monitors readable and rooms comfortable. CoolVu of Long Island explains.",
  path: "/blog/window-tinting-south-facing-rooms-home-office-long-island",
});

export default function Page() {
  return <BlogSouthFacingOfficeTintingPage />;
}
