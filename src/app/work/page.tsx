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
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Plastikoo App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/assets/profile.png",
    tags: ["React Native", "Mysql", "TypeScript"],
    category: "Mobile App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, color palette, and brand guidelines.",
    image: "/assets/profile.png",
    tags: ["Figma", "Illustrator", "Branding"],
    category: "Design",
  },
  {
    id: 4,
    title: "Restaurant App UI",
    description:
      "Food delivery app interface with intuitive navigation and seamless ordering experience.",
    image: "/assets/profile.png",
    tags: ["Figma", "Prototyping", "UI/UX"],
    category: "Design",
  },
  {
    id: 5,
    title: "E-tatasiaka App",
    description:
      "Cross-platform fitness app with workout tracking, nutrition logging, and social features.",
    image: "/assets/profile.png",
    tags: ["Flutter", "Firebase", "Health APIs"],
    category: "Mobile App",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Sekolinitsika App",
    description:
      "Cross-platform fitness app with workout tracking, nutrition logging, and social features.",
    image: "/assets/profile.png",
    tags: ["Flutter", "Firebase", "Health APIs"],
    category: "Mobile App",
    githubUrl: "https://github.com",
  },
];

const categories = ["All", "Web Development", "Mobile App", "Design"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
