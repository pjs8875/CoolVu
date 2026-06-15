import BlogNurseryBabyRoomPage from "@/components/blog/BlogNurseryBabyRoomPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Nurseries and Baby Rooms Long Island | CoolVu",
  description: "Protect your baby from UV rays and summer heat with window film for your Long Island nursery. CoolVu blocks 99% of UV, reduces heat up to 60%, and offers free estimates throughout Nassau and Suffolk Counties.",
  path: "/blog/window-film-nursery-baby-room-long-island",
});

export default function Page() {
  return <BlogNurseryBabyRoomPage />;
}
