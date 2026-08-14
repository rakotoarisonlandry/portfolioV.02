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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    } else if (!sectionRef.current) {
      console.log("section reference  is null");
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-center mb-12">
          <div className="animate-on-scroll opacity-0">
            <div className="text-gradient  text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Sparkles size={16} />
              <span>02+ Yrs Experience</span>
              <Sparkles size={16} />
            </div>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 lg:gap-6  items-center">
          {/* Left Content */}
          <div className="space-y-7 ml-8 sm:space-y-8 order-2 lg:order-1">
            {/* Intro */}
            <div className="space-y-5">
              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.1s" }}
              >
                <ProfileBadge text="hello world" />

                <div className="flex items-center gap-3 mt-5">
                  <span className="h-px w-8 bg-primary" />
                  <p className="text-gray-600 text-sm sm:text-base font-medium tracking-wide">
                    I am
                  </p>
                </div>
              </div>

              {/* Main title */}
              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
                  <span className="block text-gray-900">a Fullstack</span>

                  <span className="block mt-1">
                    <span className="text-gray-900">Develo</span>
                    <span className="text-yellow-400">p</span>
                    <span className="text-gray-900">er</span>
                    <span className="text-yellow-400">.</span>
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl leading-7">
                  As a fullstack developer, I strive to build immersive and beautiful
                  mobile and web applications through carefully crafted,
                  user-friendly design.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest mr-1">
                  Contact me
                </span>

                <Link
                  href="https://github.com/rakotoarisonlandry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-white text-[10px] font-semibold group-hover:scale-105 transition-transform">
                    Git
                  </span>
                </Link>

                <Link
                  href="https://web.facebook.com/rakotoarison.landry.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-white text-sm font-semibold group-hover:scale-110 transition-transform">
                    f
                  </span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/tsaraefadahy-landry-rakotoarison-224578265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-white text-xs font-bold group-hover:scale-110 transition-transform">
                    in
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-center lg:-ml-4 order-1 lg:order-2">
            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.8s" }}
            >

              <div className="relative">
                <Image
                  src="/assets/profil.png"
                  alt="Landry - Creative Developer"
                  width={350}
                  height={350}
                  className="rounded-4xl w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[370px] h-auto"
                />
                <div className="flex justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                  <Button
                    onClick={() => redirect("/contact")}
                    className="accent-bg rounded-full flex items-center gap-2 text-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3"
                  >
                    Let&apos;s Talk
                    <ArrowRight size={14} />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => redirect("/work")}
                    className="border-gray-300 text-black rounded-full flex items-center gap-2 hover:border-gray-400 bg-transparent text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3"
                  >
                    My Work
                    <ArrowRight size={14} />
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
