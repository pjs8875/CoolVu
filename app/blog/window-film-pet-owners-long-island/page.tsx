import BlogPetOwnersPage from "@/components/blog/BlogPetOwnersPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Pet Owners: Cooler Rooms and UV Protection | CoolVu",
  description: "Solar window film blocks up to 60% of heat and 99% of UV rays — keeping your pets cooler and safer all summer. Privacy film also reduces reactive barking. CoolVu of Long Island serves all of Nassau and Suffolk Counties.",
  path: "/blog/window-film-pet-owners-long-island",
});

export default function Page() {
  return <BlogPetOwnersPage />;
}
