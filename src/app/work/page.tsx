"use client";

import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: "/assets/e-commerce.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Stripe"],
    category: ["Web Development", "Design"],
    liveUrl: "https://ln-techparadise.vercel.app/",
    githubUrl: "https://github.com/rakotoarisonlandry/Tech-Paradise",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio v1",
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    image: "/assets/portfoliov1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: ["Web Development", "Design"],
    liveUrl: "https://landryportfolio.onrender.com/",
    githubUrl: "https://github.com/rakotoarisonlandry/Plastikoo_Front",
  },
  {
    id: 3,
    title: "Mobile Plastikôo App",
    description:
      "Cross-platform mobile app for plastic waste collection with reward system and community engagement.",
    image: "/assets/mobileapk.png",
    tags: ["React Native", "MySQL", "TypeScript"],
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Plastikôo Platform",
    description:
      "Web platform for managing plastic waste collection, recycling processes, and user engagement.",
    image: "/assets/plastikoofront.png",
    liveUrl: "https://plastikoo.mg/",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
    category: "Web Development",
  },
  {
    id: 5,
    title: "Portfolio v2",
    description:
      "Redesigned personal portfolio with enhanced UI/UX and fully responsive design.",
    image: "/assets/portfolioV2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://landrybrigea.vercel.app/",
    githubUrl: "https://github.com/rakotoarisonlandry/Portfolio.v2",
    category: ["Web Development", "Design"],
  },
  {
    id: 6,
    title: "E-Tatasiaka — Chat App",
    description:
      "Real-time messaging app with multimedia sharing, group chats, and cross-platform support.",
    image: "/assets/e-tatasiaka.png",
    tags: ["Next.js", "React Native", "TypeScript", "Supabase", "Prisma"],
    category: ["Design"],
    githubUrl: "https://github.com/rakotoarisonlandry/tatasiaka/",
  },
  {
    id: 7,
    title: "Metropolitan Traffic Management",
    liveUrl: "https://petri-network-simulation.vercel.app/",
    description:
      "Petri net simulation to model and optimize urban transport flows with 5 stations and 3 automated trains.",
    image: "/assets/petri.png",
    tags: ["Next.js"],
    category: ["Web Development", "Design"],
    githubUrl: "https://github.com/rakotoarisonlandry/petri-network-simulation",
  },
];

const categories = ["All", "Web Development", "Mobile App", "Design"];

// ─── ProjectCard ─────────────────────────────────────────────────────────────

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 sm:h-60 bg-gray-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
            <Star size={10} fill="white" />
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-gray-900 text-base mb-1.5">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.filter(Boolean).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(liveUrl || githubUrl) && (
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-700 transition-colors"
              >
                <ExternalLink size={12} />
                Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors"
              >
                <Github size={12} />
                Source
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="px-5 sm:px-8 lg:px-10 mb-14">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Work</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-sky-100 -z-0 rounded" />
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            A curated selection of projects in web development, mobile apps, and design —
            each one a unique challenge with a creative solution.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-5 sm:px-8 lg:px-10 mb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white shadow"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No projects in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  tags={p.tags}
                  liveUrl={p.liveUrl}
                  githubUrl={p.githubUrl}
                  featured={p.featured}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}