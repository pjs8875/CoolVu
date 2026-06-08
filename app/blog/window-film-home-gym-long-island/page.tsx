import BlogHomeGymPage from "@/components/blog/BlogHomeGymPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Your Long Island Home Gym | CoolVu Long Island",
  description: "Heat, glare, and lack of privacy make home gyms uncomfortable. Window film fixes all three — blocks 60% of heat, kills glare, adds daytime privacy, and protects equipment from UV damage. CoolVu of Long Island explains.",
  path: "/blog/window-film-home-gym-long-island",
});

export default function Page() {
  return <BlogHomeGymPage />;
}