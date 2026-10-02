"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
export function Navigation() {
  const { t } = useLanguage();
  const links = [
    { href: "/", label: t("home") },
    { href: "/work", label: t("work") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
  ];
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
    <header className="sticky top-0 z-40 border-b border-[var(--portfolio-line)] bg-[#faf9f6ed] backdrop-blur-[16px] dark:bg-[#17141ced]">
      <nav className="relative mx-auto flex min-h-[92px] w-[min(1200px,calc(100%-96px))] items-center justify-between gap-6 max-[1050px]:w-[calc(100%-64px)] max-[799px]:min-h-[76px] max-[799px]:w-[calc(100%-40px)]" aria-label="Navigation principale">
        <Link href="/" className="text-[30px] font-bold tracking-[-1.8px] text-[#24232a] dark:text-[#f0edf5]" onClick={() => setOpen(false)}>
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
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-md bg-[#27252e] px-5 text-xs font-medium text-white dark:bg-[#eeedf3] dark:text-[#202027] max-[799px]:hidden">
            {t("contact")} <ArrowUpRight size={16} />
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
            {[...links, { href: "/contact", label: t("contactShort") }].map(
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
