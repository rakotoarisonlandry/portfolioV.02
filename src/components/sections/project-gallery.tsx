"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { useLanguage } from "@/components/layout/language-provider";
const filters = ["Tous", "Web", "Mobile", "Expérimentation"] as const;
export function ProjectGallery() {
  const { language, projectsToDiscover } = useLanguage();
  const labels = language === "en" ? ["All", "Web", "Mobile", "Experiment"] : filters;
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous");
  const visible = projects.filter(
    (project) => filter === "Tous" || project.category.includes(filter),
  );
  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4 max-[600px]:items-start max-[600px]:flex-col">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={language === "en" ? "Filter projects" : "Filtrer les projets"}
        >
          {filters.map((item, index) => (
            <button
              className="rounded-full border border-[var(--portfolio-line)] px-4 py-2 text-xs text-[var(--portfolio-muted)] transition hover:border-[var(--portfolio-purple)] hover:text-[var(--portfolio-purple)] aria-pressed:bg-[var(--portfolio-purple)] aria-pressed:text-white"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {labels[index]}
              <span>
                {item === "Tous"
                  ? projects.length
                  : projects.filter((project) =>
                      project.category.includes(item),
                    ).length}
              </span>
            </button>
          ))}
        </div>
        <p className="text-xs text-[var(--portfolio-muted)]" aria-live="polite">{projectsToDiscover(visible.length)}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-[799px]:grid-cols-1">
        {visible.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
