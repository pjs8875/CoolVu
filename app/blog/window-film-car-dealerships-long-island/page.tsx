import BlogCarDealershipsPage from "@/components/blog/BlogCarDealershipsPage";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";

export const metadata = buildPageMetadata({
  title: "Window Film for Long Island Car Dealerships | CoolVu Long Island",
  description: "Car dealerships on Long Island lose money to heat, glare, UV damage, and sky-high cooling bills. Commercial window film from CoolVu solves all four problems in one installation. Serving Nassau & Suffolk Counties.",
  path: "/blog/window-film-car-dealerships-long-island",
});

export default function Page() {
  return <BlogCarDealershipsPage />;
}
