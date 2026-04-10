import LocationPageLayout from "@/components/LocationPageLayout";
import { SERVICE_AREA_CITIES } from "@/lib/data/locations";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICE_AREA_CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }> | { city: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams?.city || "";
  const cityData = SERVICE_AREA_CITIES.find((c) => c.slug === city);
  const cityName = cityData
    ? cityData.name
    : city.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return buildPageMetadata({
    title: `Window Tinting & Surface Solutions in ${cityName}, NY`,
    description: `CoolVu installs residential and commercial window tinting, security film, and surface finishes in ${cityName}, NY. Free estimates. Serving Long Island, NYC, NJ & CT.`,
    path: `/locations/${city}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }> | { city: string };
}) {
  const resolvedParams = await params;
  const city = resolvedParams?.city || "";
  const cityData = SERVICE_AREA_CITIES.find((c) => c.slug === city);
  const cityName = cityData
    ? cityData.name
    : city.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return <LocationPageLayout city={cityName} />;
}
