import BlogWindowFilmVsCurtainsPage from "@/components/blog/BlogWindowFilmVsCurtainsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film vs. Curtains and Blinds | CoolVu Long Island",
  description: "Curtains and blinds block your view and trap heat. Window film blocks up to 60% of solar heat, 99% of UV rays, and gives you daytime privacy — without covering your windows. CoolVu of Long Island explains the difference.",
  path: "/blog/window-film-vs-curtains-blinds-long-island",
});

export default function Page() {
  return <BlogWindowFilmVsCurtainsPage />;
}
