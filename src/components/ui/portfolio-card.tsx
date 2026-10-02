"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { RobiaVisual } from "./robia-visual";
import { useLanguage } from "@/components/layout/language-provider";
export function PortfolioCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const { language, t } = useLanguage();
  const english = language === "en";
  return (
    <article className={`portfolio-card ${featured ? "featured-card" : ""}`}>
      <Link
        href={`/work/${project.slug}`}
        className={`project-visual ${project.color}`}
        aria-label={`${t("discover")} ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="project-image"
          />
        ) : (
          <RobiaVisual />
        )}
        <span className="project-open">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="project-copy">
        <p className="eyebrow">{project.label}</p>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
          <span>{project.category.map((category) => english && category === "Expérimentation" ? "Experiment" : category).join(" + ")}</span>
        </h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
