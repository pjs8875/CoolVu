import BlogHomeOfficePrivacyPage from "@/components/blog/BlogHomeOfficePrivacyPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Privacy Window Film for Long Island Home Offices | CoolVu",
  description: "Work from home without glare, heat, or neighbors looking in. Privacy window film keeps your Long Island home office comfortable and private all day. Free estimates from CoolVu.",
  path: "/blog/privacy-window-film-home-office-long-island",
});

export default function Page() {
  return <BlogHomeOfficePrivacyPage />;
}
