"use client";

import { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

export default function AboutPage() {
  const [setShowDownloadOptions] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const pageRef = useRef<HTMLDivElement>(null);

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "Express.js", "Java Spring Boot"],
    mobile: ["React Native"],
    database: ["MySQL", "Convex (real-time)"],
    other: ["UI/UX Design", "API Development", "Deployment"],
  };

  const languages = [
    { name: "Malagasy", level: "Native", percentage: 100 },
    { name: "French", level: "Fluent (written & spoken)", percentage: 97 },
    { name: "English", level: "Conversational (Business)", percentage: 70 },
  ];

  const projects = [
    {
      name: "PLASTIKÔO",
      type: "Award-winning International Startup",
      tech: ["Next.js", "React Native", "Node.js", "Tailwind CSS", "MySQL"],
      description:
        "Cross-platform reward system and community engagement with E-Commerce. Efficient plastic waste collection to transform into construction materials.",
      award: "Grand Prize International Orange Summer Challenge 2024",
      status: "In Progress",
    },
    {
      name: "E-TATASIKA",
      type: "Advanced Messaging Application",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Convex (real time)"],
      description:
        "Chat application with advanced instant messaging features, real-time conversations, file sharing, video and audio calls.",
      status: "Personal Project",
    },
    {
      name: "E-COMMERCE APP",
      type: "Auction Platform",
      tech: ["React.js", "Java Spring Boot", "Tailwind CSS", "MySQL"],
      description:
        "Web application for clothing sales with quick search feature and secure payment system.",
      status: "Personal Project",
    },
    {
      name: "BLOG APP",
      type: "Internship Project",
      tech: ["React.js", "Express.js", "Tailwind CSS", "MySQL"],
      description:
        "Internship project completed at NY HAVANA 67Ha company.",
      status: "Internship",
    },
  ];

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
      {/* Skills & Info Tabs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My technical capabilities and professional background
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {[
              { id: "skills", label: "Technical Skills", icon: Code },
              { id: "languages", label: "Languages", icon: Globe },
              { id: "education", label: "Education", icon: Award },
              { id: "interests", label: "Interests", icon: Trophy },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "skills" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div
                    key={category}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {category === "frontend" && (
                        <Code className="text-blue-600" size={20} />
                      )}
                      {category === "backend" && (
                        <Database className="text-green-600" size={20} />
                      )}
                      {category === "mobile" && (
                        <Smartphone className="text-purple-600" size={20} />
                      )}
                      {category === "database" && (
                        <Database className="text-amber-600" size={20} />
                      )}
                      {category === "other" && (
                        <Globe className="text-gray-600" size={20} />
                      )}
                      <h3 className="font-bold text-lg capitalize">
                        {category}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {items.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "languages" && (
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
                  >
                    <h3 className="font-bold text-lg md:text-xl mb-2">{lang.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{lang.level}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{lang.percentage}% proficiency</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <Award className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-500">
                          2024 - 2025
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Master&apos;s Degree in Computer Science (In Progress)
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        National Computer Science School (ENI)
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        Specialization: Software Engineering, Databases, Systems and Network Administration
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <Award className="text-green-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-500">
                          December 10, 2024
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Bachelor&apos;s Degree in Computer Science
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        National Computer Science School (ENI)
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        Thesis: Design and implementation of a web and mobile platform for collecting and transforming plastic waste into construction materials
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <h4 className="font-bold mb-1">Scientific Baccalaureate</h4>
                    <p className="text-xs text-gray-600">
                      2019-2020 • Antananarivo-67Ha
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <h4 className="font-bold mb-1">Literary Baccalaureate</h4>
                    <p className="text-xs text-gray-600">
                      2020-2021 • Antananarivo-Ampefiloha
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "interests" && (
              <div className="text-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {["Singing", "Guitar", "Football", "Development"].map(
                    (interest, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                          <span className="text-white text-xl md:text-2xl">
                            {interest === "Singing" && "🎤"}
                            {interest === "Guitar" && "🎸"}
                            {interest === "Football" && "⚽"}
                            {interest === "Development" && "💻"}
                          </span>
                        </div>
                        <h3 className="font-bold text-base md:text-lg">{interest}</h3>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 md:mt-12 bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Personal Qualities
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {[
                      "Highly serious",
                      "Competitive spirit",
                      "Team player",
                      "Rigorous",
                      "Dynamic",
                      "Adaptable",
                    ].map((quality, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-full text-gray-800 font-medium text-sm"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in my career development
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {[
              {
                period: "July 2024 - 2025",
                title: "Fullstack Developer",
                company: "PLASTIKÔO Madagascar",
                type: "Startup",
                description:
                  "Technical lead on the development of a revolutionary cross-platform platform. Technologies: React Native (Mobile), Express.js (Backend), Next.js (Web).",
                achievements: [
                  "🏆 1st place Orange Summer Challenge 2024",
                  "🌍 International Grand Prize against 13 countries",
                  "💡 Innovation in circular economy",
                ],
                status: "current",
              },
              {
                period: "July - October 2024",
                title: "Developer Intern",
                company: "Orange Digital Center",
                type: "Internship",
                location: "GARE SOARANO",
                description:
                  "Internship at Orange Digital Center with participation in the Orange Summer Challenge. Development of innovative applications.",
                achievements: [
                  "🥇 First place Orange Summer Challenge 2024",
                ],
                status: "completed",
              },
              {
                period: "2023",
                title: "Fullstack Developer",
                company: "NY HAVANA 67Ha",
                type: "Internship",
                description:
                  "Development of applications dedicated to employees. Creation of back-end and front-end features with React.js, Express.js and MySQL.",
                achievements: [
                  "Complete application for employee management",
                  "Intuitive user interface",
                ],
                status: "completed",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs ${
                        item.status === "current"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                          : "bg-gray-400 shadow-sm"
                      }`}
                    >
                      {item.period.split(" ")[0]}
                    </div>
                    {index < 2 && (
                      <div className="w-0.5 h-12 md:h-16 bg-gray-200 mt-2"></div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            item.status === "current"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.type}
                        </span>
                        {item.location && (
                          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            📍 {item.location}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 ml-auto">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 mb-3 text-sm md:text-base">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-800 mb-1 text-sm md:text-base">
                            Achievements:
                          </h4>
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs md:text-sm">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My most significant work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      project.status === "In Progress"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Personal Project"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-blue-600 font-medium mb-2 text-sm md:text-base">
                  {project.type}
                </p>

                {project.award && (
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-lg mb-3 border border-amber-200">
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-amber-600" />
                      <span className="text-amber-800 font-medium text-xs md:text-sm">
                        {project.award}
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              My Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide my development approach and team collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "Always seeking creative and efficient new solutions to solve complex technical challenges.",
                icon: "💡",
              },
              {
                title: "Quality",
                description:
                  "Clean code, optimal performance and attention to detail to deliver robust and maintainable solutions.",
                icon: "⚡",
              },
              {
                title: "Collaboration",
                description:
                  "Teamwork and transparent communication for project success and everyone's fulfillment.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl text-white group-hover:scale-105 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to collaborate?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              I'm available for freelance missions and innovative projects. Contact me to discuss your next technical challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 text-base font-medium shadow-md">
                <Mail className="mr-2" size={18} />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base font-medium shadow-md"
              >
                <ExternalLink className="mr-2" size={18} />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}