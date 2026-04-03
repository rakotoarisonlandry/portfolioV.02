"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5700);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}