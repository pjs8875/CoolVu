import BlogWindowWarrantyPage from "@/components/blog/BlogWindowWarrantyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Does Window Film Void a Window Warranty? Andersen, Pella, Marvin",
  description: "Professionally installed interior film almost never voids a window warranty. See the rules for Andersen, Pella, Marvin and Harvey — and the two situations that are a real risk.",
  path: "/blog/does-window-film-void-window-warranty-long-island",
});

export default function Page() {
  return <BlogWindowWarrantyPage />;
}
