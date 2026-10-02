"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "./language-provider";
export function Footer() {
  const { language } = useLanguage();
  const english = language === "en";
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow">{english ? "AN IDEA, A CHALLENGE, A PROJECT?" : "UNE IDÉE, UN DÉFI, UN PROJET ?"}</p>
            <h2>
              {english ? "Let's create something" : "Créons quelque chose"}
              <br />
              {english ? "that makes a " : "qui fait la "}<em>{english ? "difference." : "différence."}</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-light">
            {english ? "Let's talk" : "Discutons ensemble"} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="footer-bottom">
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
