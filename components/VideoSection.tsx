"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurText } from "@/components/ui/blur-text";

// Placeholder data for videos
const videoItems = [
  {
    id: "1",
    title: "IMG_7112",
    category: "Installation",
    videoUrl: "/videos/IMG_7112.webm",
  },
  {
    id: "2",
    title: "IMG_7116",
    category: "Installation",
    videoUrl: "/videos/IMG_7116.webm",
  },
  {
    id: "3",
    title: "IMG_7159",
    category: "Installation",
    videoUrl: "/videos/IMG_7159.webm",
  },
  {
    id: "4",
    title: "IMG_7160",
    category: "Installation",
    videoUrl: "/videos/IMG_7160.webm",
  },
  {
    id: "5",
    title: "IMG_7253",
    category: "Installation",
    videoUrl: "/videos/IMG_7253.webm",
  },
  {
    id: "6",
    title: "IMG_7256",
    category: "Installation",
    videoUrl: "/videos/IMG_7256.webm",
  },
  {
    id: "7",
    title: "IMG_7264",
    category: "Installation",
    videoUrl: "/videos/IMG_7264.webm",
  },
  {
    id: "8",
    title: "IMG_7348",
    category: "Installation",
    videoUrl: "/videos/IMG_7348.webm",
  },
  {
    id: "10",
    title: "Stopping the heat!",
    category: "Solar & Heat",
    videoUrl: "/videos/Stopping the heat!.webm",
  },
  {
    id: "11",
    title: "19700121_0745_69bc06c0a090819193bec37240ee3124",
    category: "Demo",
    videoUrl: "/videos/19700121_0745_69bc06c0a090819193bec37240ee3124.webm",
  },
  {
    id: "12",
    title: "download",
    category: "Demo",
    videoUrl: "/videos/download.webm",
  },
];

export default function VideoSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Check scroll position to enable/disable buttons
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="videos" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative flex flex-col items-center text-center mb-12">
          <BlurText 
            text="See Our Work Across Long Island"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-coolvu-dark-blue justify-center max-w-4xl mx-auto leading-tight"
          />
          
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all",
                canScrollLeft ? "text-coolvu-dark-blue hover:bg-coolvu-medium-blue hover:border-coolvu-medium-blue hover:text-white" : "text-gray-300 cursor-not-allowed"
              )}
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all",
                canScrollRight ? "text-coolvu-dark-blue hover:bg-coolvu-medium-blue hover:border-coolvu-medium-blue hover:text-white" : "text-gray-300 cursor-not-allowed"
              )}
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Video Carousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videoItems.map((video) => (
            <div 
              key={video.id} 
              className="relative flex-none w-[80vw] sm:w-[300px] md:w-[340px] snap-center group cursor-pointer"
            >
              {/* Video Container */}
              <div 
                className="relative aspect-[9/16] rounded-2xl overflow-hidden mb-4 bg-gray-900 shadow-lg"
              >
                {activeVideoId !== video.id ? (
                  <div 
                    className="absolute inset-0 w-full h-full z-20 bg-black flex flex-col items-center justify-center cursor-pointer group"
                    onClick={() => setActiveVideoId(video.id)}
                  >
                    {/* Logo as Thumbnail */}
                    <div className="relative w-48 h-24 mb-6 transition-transform duration-300 group-hover:scale-105">
                      <Image 
                        src="/logo.png" 
                        alt="CoolVu Logo" 
                        fill 
                        sizes="(max-width: 768px) 200px, 300px"
                        className="object-contain opacity-80"
                      />
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="w-16 h-16 bg-coolvu-medium-blue/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,123,255,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 w-full h-full z-20 bg-black overflow-hidden">
                    <video 
                      src={video.videoUrl}
                      controls
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ 
                        // Increased scale to 1.25 to aggressively crop out the Sora watermark
                        // which is usually in the bottom right corner.
                        transform: "scale(1.25)",
                        transformOrigin: "center center"
                      }}
                    />
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-30 pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-sans font-medium px-3 py-1.5 rounded-full border border-white/10">
                    {video.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Indicators */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-2">
            {videoItems.map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-gray-200"
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
