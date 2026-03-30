import LocationPageLayout from "@/components/LocationPageLayout";
import { Metadata } from "next";

// List of targeted local cities for SEO
const cities = [
  { slug: "hempstead", name: "Hempstead" },
  { slug: "huntington", name: "Huntington" },
  { slug: "oyster-bay", name: "Oyster Bay" },
  { slug: "babylon", name: "Babylon" },
  { slug: "smithtown", name: "Smithtown" },
  { slug: "islip", name: "Islip" },
  { slug: "brookhaven", name: "Brookhaven" },
  { slug: "riverhead", name: "Riverhead" },
  { slug: "long-beach", name: "Long Beach" },
  { slug: "glen-cove", name: "Glen Cove" },
  { slug: "massapequa", name: "Massapequa" },
  { slug: "levittown", name: "Levittown" },
  { slug: "southampton", name: "Southampton" },
  { slug: "queens", name: "Queens" },
  { slug: "brooklyn", name: "Brooklyn" },
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = cities.find((c) => c.slug === params.city);
  const cityName = cityData ? cityData.name : params.city.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `Window Tinting & Surface Solutions in ${cityName}, NY | CoolVu`,
    description: `CoolVu provides top-rated residential and commercial window tinting, security film, and surface finishes in ${cityName}, NY. Enhance your property's comfort and security today.`,
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityData = cities.find((c) => c.slug === params.city);
  const cityName = cityData ? cityData.name : params.city.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return <LocationPageLayout city={cityName} />;
}