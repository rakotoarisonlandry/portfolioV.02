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
    <article className={`overflow-hidden rounded-xl border border-[var(--portfolio-line)] bg-white dark:bg-[#1c1d23] ${featured ? "col-span-2" : ""}`}>
      <Link
        href={`/work/${project.slug}`}
        className={`relative block h-[285px] overflow-hidden bg-gradient-to-br from-[#f0eafa] to-[#faf9f6] dark:from-[#2d2939] dark:to-[#24222c] max-[600px]:h-[240px]`}
        aria-label={`${t("discover")} ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <RobiaVisual />
        )}
        <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[var(--portfolio-purple)]">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="p-6">
        <p className="mb-3 text-[10px] font-semibold tracking-[1.9px] text-[var(--portfolio-muted)]">{project.label}</p>
        <h3 className="flex items-center justify-between gap-3 text-xl font-medium">
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
          <span className="text-[10px] font-normal text-[var(--portfolio-muted)]">{project.category.map((category) => english && category === "Expérimentation" ? "Experiment" : category).join(" + ")}</span>
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--portfolio-muted)]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span className="rounded bg-[#efedf0] px-2 py-1 text-[10px] text-[#625b6c] dark:bg-[#25252e] dark:text-[#c3bacf]" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
