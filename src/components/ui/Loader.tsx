"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/assets/lottie/logo.json";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#17141c]"
      role="status"
      aria-live="polite"
      aria-label="Chargement du portfolio"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="h-auto w-[min(82vw,460px)]"
        aria-hidden="true"
      />
    </div>
  );
}
