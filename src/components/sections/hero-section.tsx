"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileBadge } from "@/components/ui/profile-badge";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-slide-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="flex justify-center mb-12">
          <div className="animate-on-scroll opacity-0">
            <div className="accent-bg text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Sparkles size={16} />
              <span>01+ Yrs Professional Experience</span>
              <Sparkles size={16} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-on-scroll opacity-0">
                <ProfileBadge text="hello people" />
                <p className="text-gray-600 mt-4 mb-2">I am</p>
              </div>

              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">a Fullstack</span>
                  <span className="block">
                    <span className="text-gray-900">Develo</span>
                    <span className="text-orange-500">p</span>
                    <span className="text-gray-900">per</span>
                  </span>
                </h1>
              </div>

              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  A Fullstack Developer. I strive to build immersive and
                  beautiful web applications through carefully crafted
                  user-friendly design.
                </p>
              </div>
            </div>

            <div
              className="animate-on-scroll opacity-0 flex items-center space-x-6"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-sm text-gray-500">50+ Service Provided</div>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/rakotoarisonlandry"
                  target="_blank"
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs">Git</span>
                </Link>
                <Link
                  href="https://web.facebook.com/rakotoarison.landry.2025"
                  target="_blank"
                  className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs">f</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tsaraefadahy-landry-rakotoarison-224578265/"
                  target="_blank"
                  className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs">in</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="relative">
                {/* Profile Badge */}
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-white border border-gray-200 rounded-full p-3 shadow-lg">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">L</span>
                    </div>
                  </div>
                </div>

                {/* Main Profile Container */}
                <div className="bg-gray-900 rounded-[3rem] pb-8 relative overflow-hidden">
                  <div className="absolute top-6 left-6 right-6">
                    <div className="text-white/80 font-script leading-tight text-lg">
                      <span className="">Rakotoarison</span>
                      <span> Tsaraefadahy Landry Brigea</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Sparkles className="text-white/20" size={24} />
                  </div>

                  <Image
                    src=""
                    alt="Landry - Creative Developer"
                    width={300}
                    height={400}
                    className="rounded-2xl"
                  />

                  {/* Signature */}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 mt-8">
                  <Button className="accent-bg text-white hover:shadow-lg transition-all duration-300">
                    Let&apos;s Talk →
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:border-gray-400 bg-transparent"
                  >
                    My Work →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
