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
    liveUrl: "https://lnluxeshop.vercel.app",
    githubUrl: "https://github.com/rakotoarisonlandry/Plastikoo_Front",
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
    // githubUrl: "https://github.com/rakotoarisonlandry/Plastikoo_Mobile",
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
    image: "/assets/portfoliov2.png",
    tags: ["NextJs", "", "TypeScript", "tailwindcss"],
    liveUrl: "https://landrybrigea.vercel.app/",
    githubUrl: "https://github.com/rakotoarisonlandry/Portfolio.v2",
    category: ["Web Development", "Design"],
  },
  {
    id: 6,
    title: "E-tatasiaka App",
    description:
      "Chat application with real-time messaging, multimedia sharing, and group chats.",
    image: "/assets/e-tatasiaka.png",
    tags: ["Nextjs", "supabase", "Prisma"],
    category: ["Design"],
    githubUrl: "https://github.com/rakotoarisonlandry/tatasiaka/",
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
            : project.category === activeCategory
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate and bring your ideas to life. I&apos;m
              always excited to work on new challenges.
            </p>
            <button className="accent-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
