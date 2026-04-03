"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loader() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/assets/lottie/logo.json") // chemin relatif à /public
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null; // ou un simple fallback

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}