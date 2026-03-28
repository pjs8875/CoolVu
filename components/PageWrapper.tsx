"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      <div>
        {children}
      </div>
    </>
  );
}
