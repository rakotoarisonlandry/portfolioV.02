"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Award,
  Globe,
  Code,
  Smartphone,
  Database,
  Trophy,
  Mail,
  ExternalLink,
  Calendar,
  Music,
  Handshake,
  Zap,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const skills = {
  Frontend: {
    icon: Code,
    color: "text-sky-600",
    bg: "bg-sky-50",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "java",
      "Tailwind CSS",
    ],
  },
  Backend: {
    icon: Database,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: ["Node.js", "Express.js", "Spring Boot (Java)", "REST APIs"],
  },
  Mobile: {
    icon: Smartphone,
    color: "text-violet-600",
    bg: "bg-violet-50",
    items: ["React Native(Expo)", "Flutter"],
  },
  Database: {
    icon: Database,
    color: "text-amber-600",
    bg: "bg-amber-50",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Convex"],
  },
  DevOps: {
    icon: Globe,
    color: "text-rose-600",
    bg: "bg-rose-50",
    items: ["Docker", "Jenkins", "CI/CD Pipelines"],
  },
  "Tools & Design": {
    icon: Award,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    items: ["Figma", "Git", "Swagger / Postman"],
  },
};

const languages = [
  { name: "Malagasy", level: "Native", pct: 100 },
  { name: "French", level: "Fluent — written & spoken", pct: 97 },
  { name: "English", level: "Conversational (Business)", pct: 70 },
];

const education = [
  {
    date: "2024 – 2025",
    degree: "Master's in Computer Science (In Progress)",
    school: "National Computer Science School (ENI)",
    detail:
      "Software Engineering · Databases · Systems & Network Administration",
    color: "bg-sky-100 text-sky-700",
  },
  {
    date: "Dec 10, 2024",
    degree: "Bachelor's in Computer Science",
    school: "National Computer Science School (ENI)",
    detail:
      "Thesis: Web & mobile platform for collecting and transforming plastic waste into construction materials",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    date: "2019 – 2020",
    degree: "Scientific Baccalaureate",
    school: "Antananarivo-67Ha",
    detail: "",
    color: "bg-gray-100 text-gray-600",
  },
  {
    date: "2020 – 2021",
    degree: "Literary Baccalaureate",
    school: "Antananarivo-Ampefiloha",
    detail: "",
    color: "bg-gray-100 text-gray-600",
  },
];

const interests = [
  { label: "Singing", icon: Music },
  { label: "Guitar", icon: Music },
  { label: "Football", icon: Globe },
  { label: "Development", icon: Code },
];

const qualities = [
  "Highly serious",
  "Competitive spirit",
  "Team player",
  "Rigorous",
  "Dynamic",
  "Adaptable",
];

const timeline = [
  {
    period: "July 2024 – 2026",
    title: "Fullstack Developer",
    company: "PLASTIKÔO Madagascar",
    type: "Startup",
    description:
      "Technical lead on a cross-platform ecosystem: React Native (mobile), Express.js (API), Next.js (web).",
    achievements: [
      "1st place Orange Summer Challenge 2024",
      "International Grand Prize against 13 countries",
      "Innovation in circular economy",
    ],
    current: true,
  },
  {
    period: "July – Oct 2024",
    title: "Developer Intern",
    company: "Orange Digital Center",
    type: "Internship",
    location: "Gare Soarano",
    description:
      "Internship at Orange Digital Center with participation in the Orange Summer Challenge.",
    achievements: ["First place Orange Summer Challenge 2024"],
    current: false,
  },
  {
    period: "2023",
    title: "Fullstack Developer",
    company: "NY HAVANA 67Ha",
    type: "Internship",
    description:
      "Development of employee-facing applications with React.js, Express.js, and MySQL.",
    achievements: [
      "Complete employee management app",
      "Intuitive user interface",
    ],
    current: false,
  },
];

const projects = [
  {
    name: "PLASTIKÔO",
    type: "Award-winning International Startup",
    tech: ["Next.js", "React Native", "Node.js", "Tailwind CSS", "MySQL"],
    description:
      "Cross-platform reward system and community engagement with e-commerce. Collects plastic waste to transform into construction materials.",
    award: "Grand Prize — Orange Summer Challenge 2024",
    status: "In Progress",
  },
  {
    name: "E-TATASIKA",
    type: "Advanced Messaging Application",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Convex"],
    description: "Real-time chat with file sharing, video and audio calls.",
    status: "Personal Project",
  },
  {
    name: "E-COMMERCE APP",
    type: "Auction Platform",
    tech: ["React.js", "Java Spring Boot", "Tailwind CSS", "MySQL"],
    description:
      "Clothing sales platform with quick search and secure payment.",
    status: "Personal Project",
  },
  {
    name: "BLOG APP",
    type: "Internship Project",
    tech: ["React.js", "Express.js", "Tailwind CSS", "MySQL"],
    description: "Blog application built during internship at NY HAVANA 67Ha.",
    status: "Internship",
  },
];

const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "Always seeking creative and efficient new solutions to solve complex technical challenges.",
  },
  {
    title: "Quality",
    icon: Zap,
    desc: "Clean code, optimal performance, and meticulous attention to detail for robust, maintainable solutions.",
  },
  {
    title: "Collaboration",
    icon: Handshake,
    desc: "Teamwork and transparent communication for project success and collective fulfillment.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  accent: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        {title}{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-gray-900">{accent}</span>
          <span className="absolute inset-x-0 bottom-1 h-3 bg-sky-100 -z-0 rounded" />
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("skills");
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 },
    );
    pageRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "languages", label: "Languages", icon: Globe },
    { id: "education", label: "Education", icon: Award },
    { id: "interests", label: "Interests", icon: Trophy },
  ];

  const statusStyle = (s: string) =>
    s === "In Progress"
      ? "bg-emerald-100 text-emerald-700"
      : s === "Personal Project"
        ? "bg-sky-100 text-sky-700"
        : "bg-gray-100 text-gray-600";

  return (
    <div
      ref={pageRef}
      className="pt-24 pb-0 bg-white"
      style={
        {
          "--reveal-duration": "0.55s",
        } as React.CSSProperties
      }
    >
      <section className="py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="What I bring"
            title="Skills &"
            accent="Expertise"
            subtitle="Technical capabilities and professional background built over years of hands-on work."
          />

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white shadow"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="min-h-[360px]">
            {/* Skills */}
            {activeTab === "skills" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(skills).map(
                  ([cat, { icon: Icon, color, bg, items }]) => (
                    <div
                      key={cat}
                      className="reveal group rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                      style={{
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${bg}`}
                        >
                          <Icon size={17} className={color} />
                        </span>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {cat}
                        </h3>
                      </div>
                      <ul className="space-y-1.5">
                        {items.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            )}

            {/* Languages */}
            {activeTab === "languages" && (
              <div className="grid sm:grid-cols-3 gap-6">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300"
                  >
                    <p className="font-semibold text-gray-900 text-lg mb-1">
                      {lang.name}
                    </p>
                    <p className="text-gray-400 text-sm mb-5">{lang.level}</p>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gray-900 rounded-full"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400">
                      {lang.pct}% proficiency
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium h-fit mt-0.5 ${edu.color}`}
                    >
                      {edu.date}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        {edu.degree}
                      </p>
                      <p className="text-sky-600 text-sm font-medium mt-0.5">
                        {edu.school}
                      </p>
                      {edu.detail && (
                        <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                          {edu.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interests */}
            {activeTab === "interests" && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {interests.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 py-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-900">
                        <Icon size={18} className="text-white" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-gray-100 p-6">
                  <p className="text-sm font-semibold text-gray-900 mb-4 text-center">
                    Personal Qualities
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {qualities.map((q) => (
                      <span
                        key={q}
                        className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Career path"
            title="Professional"
            accent="Journey"
            subtitle="Key milestones and experiences that shaped my craft."
          />

          <div className="relative">
            {/* vertical line */}
            <span className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="reveal flex gap-5"
                  style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  {/* dot */}
                  <div className="hidden sm:flex shrink-0 flex-col items-center">
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 ${
                        item.current ? "bg-gray-900" : "bg-gray-300"
                      }`}
                    >
                      {item.period.split(" ")[0].slice(0, 4)}
                    </span>
                  </div>

                  {/* card */}
                  <div
                    className={`flex-1 rounded-2xl border p-5 sm:p-6 transition-shadow duration-300 hover:shadow-md ${
                      item.current
                        ? "border-gray-900 bg-white"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.current
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.type}
                      </span>
                      {item.location && (
                        <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-500 rounded-full text-xs">
                          📍 {item.location}
                        </span>
                      )}
                      <span className="ml-auto text-xs text-gray-400">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sky-600 text-sm font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-1.5">
                      {item.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured"
            accent="Projects"
            subtitle="My most significant work and technical contributions."
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                className="reveal rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                    {p.name}
                  </h3>
                  <span
                    className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${statusStyle(p.status)}`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="text-sky-600 text-sm font-medium mb-3">
                  {p.type}
                </p>

                {p.award && (
                  <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3">
                    <Trophy size={14} className="text-amber-600 shrink-0" />
                    <span className="text-amber-800 text-xs font-medium leading-snug">
                      {p.award}
                    </span>
                  </div>
                )}

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="What drives me"
            title="Core"
            accent="Values"
            subtitle="Principles that guide my development approach and team collaboration."
          />

          <div className="grid sm:grid-cols-3 gap-5">
            {values.map(({ title, icon: Icon, desc }, i) => (
              <div
                key={title}
                className="reveal rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 mb-4">
                  <Icon size={20} className="text-white" />
                </span>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Let's work together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Available for freelance missions and innovative projects. Let's
            discuss your next technical challenge.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 hover:-translate-y-px transition-all duration-200"
            >
              <Mail size={15} />
              Contact Me
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-white text-sm font-semibold hover:border-gray-500 hover:-translate-y-px transition-all duration-200"
            >
              <ExternalLink size={15} />
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
