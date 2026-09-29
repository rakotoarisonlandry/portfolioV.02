"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/portfolio-card";
const filters = ["Tous", "Web", "Mobile", "Expérimentation"] as const;
export function ProjectGallery() {
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
          aria-label="Filtrer les projets"
        >
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
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
        <p aria-live="polite">{visible.length} projets à découvrir</p>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
