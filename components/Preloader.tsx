"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(4);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [isVisible, setIsVisible] = useState(true);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth < 768) {
        // Mobile view: 4 columns x 5 rows = 20 total cells
        setColumns(4);
        setRows(5);
      } else {
        // Desktop/Tablet view: 5 columns x 4 rows = 20 total cells
        setColumns(5);
        setRows(4);
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const totalCells = columns * rows;

  // The 20 images we have
  const gridImages = Array.from({ length: 20 }, (_, i) => `/grid-images/${i + 1}.png`);

  useEffect(() => {
    const indices = Array.from({ length: totalCells }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledIndices(indices);
  }, [totalCells]);

  useEffect(() => {
    if (shuffledIndices.length > 0 && phase === "in") {
      const maxDelay = (totalCells - 1) * 0.04;
      const inDuration = 1.5;
      const holdDuration = 0.8; // Hold the full image a bit longer
      
      const timer = setTimeout(() => {
        setPhase("out");
      }, (maxDelay + inDuration + holdDuration) * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [shuffledIndices, phase, totalCells]);

  useEffect(() => {
    if (phase === "out") {
      const outDuration = 1.2; // slightly faster out animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, outDuration * 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (shuffledIndices.length === 0) return null;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-coolvu-off-white p-2 md:p-3 lg:p-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div
            className="w-full h-full grid gap-2 md:gap-3 lg:gap-4"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {Array.from({ length: totalCells }).map((_, i) => {
              const col = i % columns;
              const row = Math.floor(i / columns);
              const staggerIndex = shuffledIndices.indexOf(i);

              return (
                <motion.div
                  key={`${columns}-${rows}-${i}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: phase === "in" ? 1 : 0 }}
                  transition={{
                    duration: phase === "in" ? 1.5 : 1.2,
                    ease: [0.76, 0, 0.24, 1], // power4.inOut equivalent
                    delay: phase === "in" ? staggerIndex * 0.04 : 0,
                  }}
                  className="w-full h-full origin-center"
                  style={{
                    backgroundImage: `url('${gridImages[i % gridImages.length]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
