"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { FilterTabs } from "@/components/ui/filter-tabs";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: "/assets/e-commerce.png",
    tags: ["Nextjs", "TypeScript", "Supabase", "tailwindcss", "Stripe"],
    category: ["Web Development", "Design"],
    liveUrl: "https://ln-techparadise.vercel.app/",
    githubUrl: "https://github.com/rakotoarisonlandry/Tech-Paradise",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio.v1",
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    image: "/assets/portfoliov1.png",
    tags: ["Nextjs", "TypeScript", "tailwindcss"],
    category: ["Web Development", "Design"],
    liveUrl: "https://landryportfolio.onrender.com/",
    githubUrl: "https://github.com/rakotoarisonlandry/Plastikoo_Front",
  },
  {
    id: 3,
    title: "Mobile Plastikoo App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/assets/mobileapk.png",
    tags: ["React Native", "Mysql", "TypeScript"],
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Plastikoo plateform",
    description:
      "Web platform for managing plastic waste collection, recycling processes, and user engagement.",
    image: "/assets/plastikoofront.png",
    liveUrl: "https://plastikoo.mg/",
    tags: ["Figma", "Illustrator", "Branding"],
    category: "Web Development",
  },
  {
    id: 5,
    title: "Portfolio.v2",
    description:
      "Redesigned personal portfolio with enhanced UI/UX and responsive design.",
    image: "/assets/portfolioV2.png",
    tags: ["NextJs", "", "TypeScript", "tailwindcss"],
    liveUrl: "https://landrybrigea.vercel.app/",
    githubUrl: "https://github.com/rakotoarisonlandry/Portfolio.v2",
    category: ["Web Development", "Design"],
  },
  {
    id: 6,
    title: "E-tatasiaka Apk & Web",
    description:
      "Chat application with real-time messaging, multimedia sharing, and group chats.",
    image: "/assets/e-tatasiaka.png",
    tags: [
      "Nextjs",
      "React Native",
      "TypeScript",
      "tailwindcss",
      "supabase",
      "Prisma",
    ],
    category: ["Design"],
    githubUrl: "https://github.com/rakotoarisonlandry/tatasiaka/",
  },
  {
    id: 7,
    title: "Automated Metropolitan Traffic Management",
    liveUrl: "https://petri-network-simulation.vercel.app/",
    description:
      "Using Petri nets to model, simulate and optimize urban transport flows with 5 interconnected stations and 3 automated trains.",
    image: "/assets/petri.png",
    tags: ["Nextjs"],
    category: ["Web Development", "Design"],
    githubUrl: "https://github.com/rakotoarisonlandry/petri-network-simulation",
  },
];

const categories = ["All", "Web Development", "Mobile App", "Design"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory,
        );
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              My <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills in web
              development, mobile apps, and design. Each project represents a
              unique challenge and creative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
