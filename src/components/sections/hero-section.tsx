"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileBadge } from "@/components/ui/profile-badge";
import Link from "next/link";
import { redirect } from "next/navigation";

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
    } else if (!sectionRef.current) {
      console.log("section reference  is null");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-16 lg:px-28">
      <div className="max-w-7xl mx-10">
        <div className="flex justify-center mb-12">
          <div className="animate-on-scroll opacity-0">
            <div className="text-gradient  text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Sparkles size={16} />
              <span>02+ Yrs Experience</span>
              <Sparkles size={16} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="animate-on-scroll opacity-0">
                <ProfileBadge text="hello world" />
                <p className="text-gray-600 mt-4 text-lg mb-2">I am</p>
              </div>

              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">a Fullstack</span>
                  <span className="block">
                    <span className="text-gray-900">Develo</span>
                    <span className="text-yellow-400">p</span>
                    <span className="text-gray-900">er</span>
                  </span>
                </h1>
              </div>

              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  As a fullstack developer. I strive to build immersive and
                  beautiful web applications through carefully crafted
                  user-friendly design.
                </p>
              </div>
            </div>

            <div
              className="animate-on-scroll opacity-0 lg:flex hidden lg:relative  items-center space-x-1"
              style={{ animationDelay: "0.6s" }}
            >
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
              <div
              className="animate-on-scroll lg:hidden opacity-0 flex justify-center items-center space-x-1"
              style={{ animationDelay: "0.6s" }}
            >
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
              <div className="relative">
                <Image
                  src="/assets/profil.jpg"
                  alt="Landry - Creative Developer"
                  width={400}
                  height={400}
                  className="rounded-4xl "
                />
                <div className="flex justify-center space-x-4 mt-8">
                  <Button
                    onClick={() => redirect("/contact")}
                    className="accent-bg text-white hover:shadow-lg transition-all duration-300"
                  >
                    Let&apos;s Talk 
                    <ArrowRight size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => redirect("/work")}
                    className="border-gray-300 hover:border-gray-400 bg-transparent"
                  >
                    My Work 
                    <ArrowRight size={18} />
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
