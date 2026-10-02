"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "./language-provider";
export function Footer() {
  const { language } = useLanguage();
  const english = language === "en";
  return (
    <footer className="bg-[#27252e] py-4 text-white dark:bg-[#111116]">
      <div className="mx-auto w-[min(1200px,calc(100%-96px))] max-[799px]:w-[calc(100%-40px)]">
        <div className="flex items-end justify-between gap-8 py-16 max-[799px]:flex-col max-[799px]:items-start">
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">{english ? "AN IDEA, A CHALLENGE, A PROJECT?" : "UNE IDÉE, UN DÉFI, UN PROJET ?"}</p>
            <h2>
              {english ? "Let's create something" : "Créons quelque chose"}
              <br />
              {english ? "that makes a " : "qui fait la "}<em>{english ? "difference." : "différence."}</em>
            </h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-md border border-white/30 px-5 text-xs font-medium text-white">
            {english ? "Let's talk" : "Discutons ensemble"} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-6 border-t border-white/20 py-6 text-xs max-[799px]:flex-wrap">
          <Link href="/" className="wordmark">
            landry<span>.</span>
          </Link>
          <p>© {new Date().getFullYear()} Landry Rakotoarison</p>
          <div>
            <a href="mailto:landrybrigea@gmail.com">
              {english ? "Email" : "Email"} <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/rakotoarisonlandry"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
