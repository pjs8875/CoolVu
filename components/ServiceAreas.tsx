"use client";

import { useRouter } from "next/navigation";
import { BlurText } from "@/components/ui/blur-text";
import { GoogleMap, Marker, useJsApiLoader, type Libraries } from "@react-google-maps/api";

const MAP_LIBRARIES: Libraries = ["maps", "marker"];

const localAreas = [
  { name: "Brooklyn", slug: "brooklyn", lat: 40.6782, lng: -73.9442 },
  { name: "Queens", slug: "queens", lat: 40.7282, lng: -73.7949 },
  { name: "Hempstead", slug: "hempstead", lat: 40.7062, lng: -73.6187 },
  { name: "Oyster Bay", slug: "oyster-bay", lat: 40.8657, lng: -73.5321 },
  { name: "Huntington", slug: "huntington", lat: 40.8680, lng: -73.4215 },
  { name: "Babylon", slug: "babylon", lat: 40.6957, lng: -73.3257 },
  { name: "Islip", slug: "islip", lat: 40.7298, lng: -73.2104 },
  { name: "Smithtown", slug: "smithtown", lat: 40.8559, lng: -73.2007 },
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
};

// Center the map roughly in the middle of Long Island
const center = {
  lat: 40.78,
  lng: -73.55,
};

// Custom dark map style to match the CoolVu theme
const mapOptions = {
  disableDefaultUI: false,
  scrollwheel: false,
  mapId: "DEMO_MAP_ID",
};

import { useEffect, useRef } from "react";
import { useGoogleMap } from "@react-google-maps/api";

const AdvancedMarker = ({ position, title, onClick }: { position: google.maps.LatLngLiteral, title: string, onClick: () => void }) => {
  const map = useGoogleMap();
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (!map) return;
    
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        title,
      });
      // AdvancedMarkerElement uses addEventListener('gmp-click') rather than addListener('click')
      markerRef.current.addEventListener('gmp-click', onClick);
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.removeEventListener('gmp-click', onClick);
        markerRef.current.map = null;
      }
    };
  }, [map, position, title, onClick]);

  return null;
};

export default function ServiceAreas() {
  const router = useRouter();
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBGPxxnCI5S5fnH7bKszqpnLmyz09Ho4vg",
    libraries: MAP_LIBRARIES,
  });

  return (
    <section id="locations" className="py-20 md:py-32 bg-coolvu-dark-blue relative overflow-hidden">
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <BlurText 
            text="Local Service Areas"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 md:mb-6 justify-center"
          />
          <BlurText 
            text="CoolVu of Long Island proudly serves the greater NY Metro area."
            as="p"
            className="text-sm md:text-lg text-coolvu-light-blue font-sans leading-relaxed justify-center"
            delay={80}
          />
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] mt-4 md:mt-10 flex justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
          {!isLoaded ? (
            <div className="w-full h-full flex items-center justify-center text-coolvu-light-blue animate-pulse font-sans font-medium">
              Loading Map...
            </div>
          ) : (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={9.5}
              options={mapOptions}
            >
              {localAreas.map((area) => (
                <AdvancedMarker
                  key={area.slug}
                  position={{ lat: area.lat, lng: area.lng }}
                  title={area.name}
                  onClick={() => router.push(`/locations/${area.slug}`)}
                />
              ))}
            </GoogleMap>
          )}
        </div>

      </div>
    </section>
  );
}
