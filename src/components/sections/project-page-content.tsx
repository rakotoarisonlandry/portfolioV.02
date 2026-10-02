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
    <article className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:w-[calc(100%-40px)] max-[799px]:py-[58px]">
      <Link href="/work" className="inline-flex items-center gap-2 text-xs text-[var(--portfolio-muted)] hover:text-[var(--portfolio-purple)]"><ArrowLeft size={16} /> {en ? "All projects" : "Tous les projets"}</Link>
      <header className="mb-[55px] mt-8 max-w-[850px]">
        <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">{project.label}</p>
        <h1 className="mb-6 text-[clamp(42px,5.4vw,70px)] font-medium leading-[1.15] tracking-[-3px]">{project.title}<span className="text-[var(--portfolio-purple)]">.</span></h1>
        <p className="max-w-[620px] text-sm leading-8 text-[var(--portfolio-muted)]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span className="rounded bg-[#efedf0] px-2 py-1 text-[10px] text-[#625b6c]" key={tag}>{tag}</span>)}</div>
      </header>
      <div className="relative h-[min(60vw,620px)] overflow-hidden rounded-xl bg-[#f2eff8] max-[799px]:h-[360px]">
        {project.image ? <Image src={project.image} alt={`${en ? "Project interface" : "Interface du projet"} ${project.title}`} fill priority sizes="(max-width: 1200px) 100vw, 1200px"         className="object-cover" /> : <RobiaVisual />}
      </div>
      <div className="mt-16 grid grid-cols-[0.8fr_1.2fr] gap-16 max-[799px]:grid-cols-1">
        <aside>
          <p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "THE PROJECT IN BRIEF" : "LE PROJET EN BREF"}</p>
          <h3>{project.category.join(" & ")}</h3>
          <p>{project.slug === "robia" ? (en ? "Team project · SEO & AI ecosystem" : "Projet d’équipe · Écosystème SEO & IA") : project.label.toLowerCase()}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-md bg-[#27252e] px-5 py-3 text-xs font-medium text-white">{en ? "View website" : "Voir le site"} <ArrowUpRight size={16} /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[var(--portfolio-muted)] hover:text-[var(--portfolio-purple)]">{en ? "Explore the code" : "Explorer le code"} <ArrowUpRight size={16} /></a>}
          </div>
        </aside>
        <div>
          <section className="mb-12"><p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">01 / {en ? "THE CONTEXT" : "LE CONTEXTE"}</p><h2 className="text-3xl font-medium">{en ? "A concrete need." : "Un besoin concret."}</h2><p className="mt-4 text-sm leading-8 text-[var(--portfolio-muted)]">{project.context}</p></section>
          <section className="mb-12"><p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">02 / {en ? "THE APPROACH" : "L’APPROCHE"}</p><h2 className="text-3xl font-medium">{en ? "From idea to experience." : "De l’idée à l’expérience."}</h2><p className="mt-4 text-sm leading-8 text-[var(--portfolio-muted)]">{project.approach}</p></section>
          <section><p className="mb-5 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">03 / {en ? "FEATURES" : "LES FONCTIONNALITÉS"}</p><ul className="space-y-3 text-sm text-[var(--portfolio-muted)]">{project.features.map((feature) => <li className="flex items-center gap-2" key={feature}><Check size={18} />{feature}</li>)}</ul></section>
        </div>
      </div>
      <Link href={`/work/${next.slug}`} className="mt-20 flex items-center justify-between border-t border-[var(--portfolio-line)] pt-8">
        <div><p className="mb-4 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "NEXT PROJECT" : "PROJET SUIVANT"}</p><h2 className="text-3xl font-medium">{next.title}</h2></div><ArrowUpRight size={40} />
      </Link>
    </article>
  );
}
