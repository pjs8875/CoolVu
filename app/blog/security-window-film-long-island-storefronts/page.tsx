import BlogStorefrontSecurityPage from "@/components/blog/BlogStorefrontSecurityPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Security Window Film for Long Island Storefronts | CoolVu",
  description: "Security window film holds shattered glass together, slowing smash-and-grab break-ins by critical minutes. CoolVu installs security film on storefronts throughout Nassau and Suffolk Counties, Long Island.",
  path: "/blog/security-window-film-long-island-storefronts",
});

export default function Page() {
  return <BlogStorefrontSecurityPage />;
}