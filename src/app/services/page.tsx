"use client";

import Link from "next/link";
import { Code, Smartphone, Globe, Users, ArrowRight, CheckCircle2 } from "lucide-react";


const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern Frameworks"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"],
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
    features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Admin Panel"],
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    description:
      "Technical consulting and strategic planning for your digital transformation projects.",
    features: ["Technical Audit", "Strategy Planning", "Team Training", "Best Practices"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your goals, requirements, and target audience." },
  { step: "02", title: "Planning", description: "Creating a detailed project roadmap and timeline." },
  { step: "03", title: "Design & Build", description: "Bringing your vision to life with clean code and beautiful design." },
  { step: "04", title: "Launch & Support", description: "Deploying your project and providing ongoing support." },
];


export default function ServicesPage() {
  return (
    <div className="pt-24 pb-0 bg-white">

      <section className="px-5 sm:px-8 lg:px-10 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            What I offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Services</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-sky-100 -z-0 rounded" />
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            A comprehensive range of digital services to bring your ideas to life
            and grow your business online.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-10 mb-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Icon */}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-900 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Icon size={20} className="text-white" />
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  What's included
                </p>
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-10 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              My{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Process</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-sky-100 -z-0 rounded" />
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              A structured approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, description }, i) => (
              <div key={step} className="relative">
                {/* connector line */}
                {i < process.length - 1 && (
                  <span className="hidden lg:block absolute top-5 left-[calc(100%-1rem)] w-8 h-px bg-gray-200 z-0" />
                )}
                <div className="flex flex-col items-center text-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold mb-4 z-10">
                    {step}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-10 py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Let's build together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Let's discuss your ideas and create something remarkable together.
            I'm here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 hover:-translate-y-px transition-all duration-200"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-white text-sm font-semibold hover:border-gray-500 hover:-translate-y-px transition-all duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}