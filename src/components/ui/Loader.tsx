"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/assets/lottie/logo.json";
export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      role="status"
      aria-label="Chargement"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 270, height: 270 }}
      />
    </div>
  );
}
