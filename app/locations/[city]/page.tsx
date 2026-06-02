import TownWindowFilmLayout from "@/components/TownWindowFilmLayout";
import LocationPageLayout from "@/components/LocationPageLayout";
import { SERVICE_AREA_CITIES } from "@/lib/data/locations";
import { buildPageMetadata } from "@/lib/seo/metadata-builders";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const LONG_ISLAND_TOWNS = new Set([
  "Garden City","Great Neck","Manhasset","Rockville Centre","Massapequa",
  "Levittown","Commack","East Meadow","Plainview","Syosset",
  "Hempstead","Huntington","Oyster Bay","Babylon","Smithtown","Islip",
]);

export async function generateStaticParams() {
  return SERVICE_AREA_CITIES.map((city) => ({ city: city.slug }));
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

  if (LONG_ISLAND_TOWNS.has(cityName)) {
    return buildPageMetadata({
      title: `Window Film ${cityName}, NY | Solar, Privacy & Safety Film | CoolVu`,
      description: `CoolVu of Long Island installs solar, privacy, decorative, and safety window film in ${cityName}, NY. Serving all of Nassau and Suffolk County. Free estimates. Lifetime residential warranty. Call 516-535-9555.`,
      path: `/locations/${city}`,
    });
  }

  return buildPageMetadata({
    title: `Window Tinting & Surface Solutions in ${cityName}, NY | CoolVu`,
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

  if (LONG_ISLAND_TOWNS.has(cityName)) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar isTransparent={false} />
        <TownWindowFilmLayout city={cityName} />
        <Footer />
      </div>
    );
  }

  return <LocationPageLayout city={cityName} />;
}
