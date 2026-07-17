import BlogThermalStressPage from "@/components/blog/BlogThermalStressPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Can Window Film Crack Your Windows? Thermal Stress Explained | CoolVu Long Island",
  description: "Worried window film might crack your glass? Thermal stress cracks come from the wrong DIY film on the wrong glass — not professional installs. CoolVu of Long Island explains the risk and how pros prevent it.",
  path: "/blog/can-window-film-crack-windows-long-island",
});

export default function Page() {
  return <BlogThermalStressPage />;
}
