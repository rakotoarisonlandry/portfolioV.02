"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/projects";
import { RobiaVisual } from "@/components/ui/robia-visual";
import { useLanguage } from "@/components/layout/language-provider";

export function ProjectPageContent({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const en = language === "en";
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="shell section-space case-study">
      <Link href="/work" className="text-link"><ArrowLeft size={16} /> {en ? "All projects" : "Tous les projets"}</Link>
      <header className="page-heading">
        <p className="eyebrow">{project.label}</p>
        <h1>{project.title}<span className="purple-text">.</span></h1>
        <p>{project.summary}</p>
        <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </header>
      <div className={`case-visual ${project.color}`}>
        {project.image ? <Image src={project.image} alt={`${en ? "Project interface" : "Interface du projet"} ${project.title}`} fill priority sizes="(max-width: 1200px) 100vw, 1200px" className="case-image" /> : <RobiaVisual />}
      </div>
      <div className="case-content">
        <aside>
          <p className="eyebrow">{en ? "THE PROJECT IN BRIEF" : "LE PROJET EN BREF"}</p>
          <h3>{project.category.join(" & ")}</h3>
          <p>{project.slug === "robia" ? (en ? "Team project · SEO & AI ecosystem" : "Projet d’équipe · Écosystème SEO & IA") : project.label.toLowerCase()}</p>
          <div className="case-links">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="button button-dark">{en ? "View website" : "Voir le site"} <ArrowUpRight size={16} /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link">{en ? "Explore the code" : "Explorer le code"} <ArrowUpRight size={16} /></a>}
          </div>
        </aside>
        <div>
          <section><p className="eyebrow">01 / {en ? "THE CONTEXT" : "LE CONTEXTE"}</p><h2>{en ? "A concrete need." : "Un besoin concret."}</h2><p>{project.context}</p></section>
          <section><p className="eyebrow">02 / {en ? "THE APPROACH" : "L’APPROCHE"}</p><h2>{en ? "From idea to experience." : "De l’idée à l’expérience."}</h2><p>{project.approach}</p></section>
          <section><p className="eyebrow">03 / {en ? "FEATURES" : "LES FONCTIONNALITÉS"}</p><ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={18} />{feature}</li>)}</ul></section>
        </div>
      </div>
      <Link href={`/work/${next.slug}`} className="next-project">
        <div><p className="eyebrow">{en ? "NEXT PROJECT" : "PROJET SUIVANT"}</p><h2>{next.title}</h2></div><ArrowUpRight size={40} />
      </Link>
    </article>
  );
}
