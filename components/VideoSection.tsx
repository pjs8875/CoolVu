"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder data for videos
const videoItems = [
  {
    id: "1",
    title: "Project Showcase 1",
    category: "Installation",
    thumbnail: "/commercial-graphics/1.png",
    videoUrl: "/videos/IMG_7112.webm",
  },
  {
    id: "2",
    title: "Project Showcase 2",
    category: "Installation",
    thumbnail: "/commercial-graphics/2.png",
    videoUrl: "/videos/IMG_7116.webm",
  },
  {
    id: "3",
    title: "Project Showcase 3",
    category: "Installation",
    thumbnail: "/commercial-graphics/3.png",
    videoUrl: "/videos/IMG_7159.webm",
  },
  {
    id: "4",
    title: "Project Showcase 4",
    category: "Installation",
    thumbnail: "/commercial-graphics/4.png",
    videoUrl: "/videos/IMG_7160.webm",
  },
  {
    id: "5",
    title: "Project Showcase 5",
    category: "Installation",
    thumbnail: "/commercial-graphics/5.png",
    videoUrl: "/videos/IMG_7253.webm",
  },
  {
    id: "6",
    title: "Project Showcase 6",
    category: "Installation",
    thumbnail: "/commercial-graphics/6.png",
    videoUrl: "/videos/IMG_7256.webm",
  },
  {
    id: "7",
    title: "Project Showcase 7",
    category: "Installation",
    thumbnail: "/commercial-graphics/7.png",
    videoUrl: "/videos/IMG_7264.webm",
  },
  {
    id: "8",
    title: "Project Showcase 8",
    category: "Installation",
    thumbnail: "/commercial-graphics/8.png",
    videoUrl: "/videos/IMG_7348.webm",
  },
  {
    id: "9",
    title: "Project Showcase 9",
    category: "Installation",
    thumbnail: "/commercial-graphics/9.png",
    videoUrl: "/videos/IMG_8449.MOV",
  },
  {
    id: "10",
    title: "Stopping the heat!",
    category: "Solar & Heat",
    thumbnail: "/solar-heat/1.png",
    videoUrl: "/videos/Stopping the heat!.webm",
  },
  {
    id: "11",
    title: "Demo 1",
    category: "Demo",
    thumbnail: "/security-film/8.png",
    videoUrl: "/videos/19700121_0745_69bc06c0a090819193bec37240ee3124.webm",
  },
  {
    id: "12",
    title: "Demo 2",
    category: "Demo",
    thumbnail: "/security-film/9.png",
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
    <section className="py-20 md:py-32 bg-coolvu-dark-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-coolvu-light-blue rounded-full"></div>
              <span className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] text-coolvu-light-blue uppercase">
                See Our Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
              Watch the Difference
            </h2>
          </div>
          
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all",
                canScrollLeft ? "text-white hover:bg-coolvu-medium-blue hover:border-coolvu-medium-blue" : "text-gray-600 cursor-not-allowed"
              )}
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all",
                canScrollRight ? "text-white hover:bg-coolvu-medium-blue hover:border-coolvu-medium-blue" : "text-gray-600 cursor-not-allowed"
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videoItems.map((video) => (
            <div 
              key={video.id} 
              className="relative flex-none w-[75vw] sm:w-[300px] md:w-[340px] snap-center group cursor-pointer"
            >
              {/* Thumbnail / Video Container */}
              <div 
                className="relative aspect-[9/16] rounded-2xl overflow-hidden mb-4 bg-gray-900 shadow-lg"
                onClick={() => {
                  if (video.videoUrl) setActiveVideoId(video.id);
                  else alert("Video coming soon!");
                }}
              >
                {activeVideoId === video.id && video.videoUrl ? (
                  <video 
                    src={video.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain z-20 bg-black"
                    onEnded={() => setActiveVideoId(null)}
                  />
                ) : (
                  <>
                    {/* Fallback image until video is played */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    ></div>
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-coolvu-medium-blue group-hover:border-coolvu-medium-blue transition-all duration-300 transform group-hover:scale-110">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-white text-xs font-sans font-medium px-3 py-1.5 rounded-full border border-white/10">
                        {video.category}
                      </span>
                    </div>
                  </>
                )}
              </div>
              
              {/* Video Info */}
              <h3 className="text-white font-heading font-bold text-lg md:text-xl group-hover:text-coolvu-light-blue transition-colors line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Indicators */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-2">
            {videoItems.map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-white/20"
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}