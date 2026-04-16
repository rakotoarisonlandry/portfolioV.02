"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/testimonial", label: "Testimonial" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-gray-900 shrink-0 hover:opacity-70 transition-opacity duration-200"
            >
              r.Landry
            </Link>

            {/* Nav links — desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    pathname === item.href
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 shrink-0">
              {/* CTA button — desktop */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 hover:shadow-lg hover:-translate-y-px active:translate-y-0 transition-all duration-200"
              >
                Contact
                <ArrowRight size={14} />
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      {/* Mobile drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <span className="text-lg font-semibold text-gray-900">r.Landry</span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-150 ${
                pathname === item.href
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Contact
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}