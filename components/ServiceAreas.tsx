"use client";

import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const locationsData = [
  { state: "Alabama", cities: ["North Birmingham"] },
  { state: "Arizona", cities: ["Chandler", "Scottsdale", "Tucson"] },
  { state: "Arkansas", cities: ["Fort Smith", "Northwest Arkansas"] },
  { state: "California", cities: ["Central San Diego", "East Bay", "Inland Empire", "Irvine", "North Orange County", "Orange County Coastal", "Sacramento Northeast", "San Francisco", "San Joaquin", "Silicon Valley", "The East Bay", "West Contra Costa", "West Los Angeles"] },
  { state: "Colorado", cities: ["Denver Metro", "Denver Tech Center", "Greater Boulder"] },
  { state: "Connecticut", cities: ["Lower Fairfield County"] },
  { state: "Delaware", cities: ["New Castle County"] },
  { state: "Florida", cities: ["Boca Delray", "Central Florida", "East Jacksonville", "East Tampa Bay", "North Miami", "Orlando East", "Palm Beach", "South Broward", "South Miami", "Space Coast", "St Augustine", "SW Florida", "The Villages", "Wesley Chapel"] },
  { state: "Georgia", cities: ["Forsyth", "Greater Augusta", "Marietta", "North Atlanta", "North Fulton", "North Gwinnett Buford", "Savannah Hilton Head", "West Metro Atlanta"] },
  { state: "Idaho", cities: ["Southeast Idaho"] },
  { state: "Illinois", cities: ["Barrington", "Chicago North Shore"] },
  { state: "Indiana", cities: ["North Indianapolis"] },
  { state: "Iowa", cities: ["Des Moines"] },
  { state: "Kansas", cities: ["Topeka", "Wichita"] },
  { state: "Kentucky", cities: ["North Louisville"] },
  { state: "Louisiana", cities: ["New Orleans North Shore", "New Orleans South Shore"] },
  { state: "Massachusetts", cities: ["Northern Massachusetts"] },
  { state: "Michigan", cities: ["Kalamazoo Battle Creek"] },
  { state: "Minnesota", cities: ["Minneapolis Northwest", "Minneapolis West Metro", "South St. Paul"] },
  { state: "Nebraska", cities: ["Omaha"] },
  { state: "Nevada", cities: ["Henderson Las Vegas"] },
  { state: "New Hampshire", cities: ["Southern New Hampshire"] },
  { state: "New Jersey", cities: ["Burlington County", "Princeton", "The Jersey Shore"] },
  { state: "New York", cities: ["Manhattan", "North Nassau County"] },
  { state: "North Carolina", cities: ["Charlotte Central", "Charlotte Southeast", "Jacksonville", "Nags Head", "Raleigh Southwest", "Southeast Raleigh", "Western North Carolina"] },
  { state: "Ohio", cities: ["Akron", "Dayton", "Lorain Erie County", "Medina Cuyahoga", "Northeast Columbus", "West Columbus"] },
  { state: "Oklahoma", cities: ["North Oklahoma City", "South Oklahoma City"] },
  { state: "Oregon", cities: ["Portland South", "Salem Eugene", "Southern Oregon"] },
  { state: "Pennsylvania", cities: ["Central Pennsylvania"] },
  { state: "South Carolina", cities: ["Charleston North", "Charleston South", "Fort Mill", "Greater Augusta", "Greenville Spartanburg"] },
  { state: "Tennessee", cities: ["Cool Springs", "Greater Memphis", "Knoxville", "Middle Tennessee", "Mt Juliet - Lebanon", "Nashville Hendersonville"] },
  { state: "Texas", cities: ["Atascocita Kingwood", "College Station", "Conroe", "Dallas Central", "Dallas East", "Frisco", "McKinney", "North Austin", "Addison", "North DFW", "Northeast Dallas", "Northern San Antonio", "Northwest Houston", "Pearland", "Richardson Garland Rockwall", "San Antonio Hill Country", "Sugar Land", "West Fort Worth", "West Houston"] },
  { state: "Utah", cities: ["Lehi", "Ogden-Farmington", "Salt Lake", "Salt Lake West"] },
  { state: "Virginia", cities: ["Arlington DC", "Northern Virginia"] },
  { state: "Washington", cities: ["Tacoma", "South King County"] },
  { state: "Wisconsin", cities: ["Madison", "Milwaukee South", "North Milwaukee"] }
];

function StateDropdown({ state, cities }: { state: string, cities: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm h-fit">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 md:p-4 text-left hover:bg-white/10 transition-colors"
      >
        <span className="font-heading font-bold text-sm md:text-lg text-white">{state}</span>
        <ChevronDown className={cn("w-4 h-4 md:w-5 md:h-5 shrink-0 text-coolvu-medium-blue transition-transform", isOpen && "rotate-180")} />
      </button>
      
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-3 md:p-4 pt-0 border-t border-white/10 bg-black/20">
            <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
              {cities.map((city, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-300 text-xs md:text-sm font-sans hover:text-white transition-colors cursor-default">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-coolvu-medium-blue mt-1.5 md:mt-1.5 shrink-0"></div>
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  return (
    <section id="locations" className="py-20 md:py-32 bg-coolvu-dark-blue text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(#60A5FA 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Find a CoolVu Near You
          </h2>
          <p className="text-base md:text-lg text-coolvu-light-blue font-sans leading-relaxed">
            With franchise locations across the country, CoolVu provides premium window film and surface solutions wherever you are. Select your state below to find your local experts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 items-start pb-8">
          {locationsData.map((data, index) => (
            <StateDropdown key={index} state={data.state} cities={data.cities} />
          ))}
        </div>

      </div>
    </section>
  );
}