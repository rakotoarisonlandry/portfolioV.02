"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
const links = [
  { href: "/", label: "Accueil" },
  { href: "/work", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Expertises" },
];
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 800) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <header className="site-header">
      <nav className="shell nav-bar" aria-label="Navigation principale">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          landry<span>.</span>
          <span className="wordmark-caption">DEV & CREATIVE</span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                (
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)
                )
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="button button-dark nav-contact">
            Parlons de votre projet <ArrowUpRight size={16} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="mobile-nav">
            {[...links, { href: "/contact", label: "Me contacter ↗" }].map(
              (link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
