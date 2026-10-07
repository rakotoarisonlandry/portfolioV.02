"use client";

import { useEffect, useState, type ReactNode } from "react";
import Loader from "@/components/ui/Loader";

const LOADER_MINIMUM_DURATION = 2000;

export default function AppWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: number | undefined;

    const finishLoading = () => {
      timeoutId = window.setTimeout(
        () => setIsLoading(false),
        LOADER_MINIMUM_DURATION,
      );
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {children}
      {isLoading && <Loader />}
    </>
  );
}
