"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-on-scroll opacity-0">
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                  About <span className="gradient-text">me</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Passionate full-stack developer with over 01+ years of
                  experience in building modern and high-performance web
                  applications.
                </p>
              </div>

              <div
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  Always on the lookout for the latest innovations, I love
                  taking on new challenges and collaborating with dynamic teams
                  on ambitious projects.
                </p>
                {/* <p className="text-gray-700 leading-relaxed">
                  Always on the lookout for the latest innovations, I thrive on
                  tackling new challenges and collaborating with dynamic teams
                  on ambitious projects
                </p> */}
              </div>
            </div>

            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 animate-float"></div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Portrait professionnel"
                  width={400}
                  height={500}
                  className="relative z-10 rounded-3xl shadow-2xl magnetic-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Mon <span className="gradient-text">Parcours</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2024 - 2025",
                title: "Développeur Mobile",
                company: "Startup Plastikoo",
                description:
                  "Lead technique sur des projets d'envergure, mentorat d'équipe junior.",
              },
              {
                year: "2024",
                title: "Développeur Front End",
                company: "Orange Madagascar",
                description:
                  "Développement d'applications web complexes avec NEXTjs et Node.js.",
              },
              {
                year: "2023",
                title: "Développeur fullstack",
                company: "Ny Havana 67Ha",
                description:
                  "Création d'application dédié aux emploiés. Développement de fonctionnalités back-end et front-end.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 flex gap-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg magnetic-hover">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {item.company}
                  </p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Mes <span className="gradient-text">Valeurs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Toujours à la recherche de nouvelles solutions créatives et efficaces.",
              },
              {
                title: "Qualité",
                description:
                  "Code propre, performances optimales et attention aux détails.",
              },
              {
                title: "Collaboration",
                description:
                  "Travail d'équipe et communication transparente pour le succès.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 text-center p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 gradient-bg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
