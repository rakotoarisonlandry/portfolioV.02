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
      <div className="filter-row">
        <div
          className="filter-buttons"
          role="group"
          aria-label={language === "en" ? "Filter projects" : "Filtrer les projets"}
        >
          {filters.map((item, index) => (
            <button
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
        <p aria-live="polite">{projectsToDiscover(visible.length)}</p>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
