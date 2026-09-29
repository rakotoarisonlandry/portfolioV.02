import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import { projects } from "@/data/projects";
import { RobiaVisual } from "@/components/ui/robia-visual";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title ?? "Projet introuvable",
    description: project?.summary,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="shell section-space case-study">
      <Link href="/work" className="text-link">
        <ArrowLeft size={16} /> Tous les projets
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{project.label}</p>
        <h1>
          {project.title}
          <span className="purple-text">.</span>
        </h1>
        <p>{project.summary}</p>
        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className={`case-visual ${project.color}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Interface du projet ${project.title}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="case-image"
          />
        ) : (
          <RobiaVisual />
        )}
      </div>
      <div className="case-content">
        <aside>
          <p className="eyebrow">LE PROJET EN BREF</p>
          <h3>{project.category.join(" & ")}</h3>
          <p>
            {project.slug === "robia"
              ? "Projet d’équipe · Écosystème SEO & IA"
              : project.label.toLowerCase()}
          </p>
          <div className="case-links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="button button-dark"
              >
                Voir le site <ArrowUpRight size={16} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Explorer le code <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </aside>
        <div>
          <section>
            <p className="eyebrow">01 / LE CONTEXTE</p>
            <h2>Un besoin concret.</h2>
            <p>{project.context}</p>
          </section>
          <section>
            <p className="eyebrow">02 / L’APPROCHE</p>
            <h2>De l’idée à l’expérience.</h2>
            <p>{project.approach}</p>
          </section>
          <section>
            <p className="eyebrow">03 / LES FONCTIONNALITÉS</p>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      {project.slug === "robia" && (
        <section className="robia-platforms">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ZOOM SUR ROBIA</p>
              <h2>
                Trois interfaces.
                <br />
                <em>Un même écosystème.</em>
              </h2>
            </div>
          </div>
          <div className="expertise-grid">
            {[
              {
                icon: Globe,
                title: "La vitrine",
                text: "Présenter le produit, expliquer sa valeur et guider la découverte de la plateforme.",
                stack: "React · Vite · Tailwind CSS",
              },
              {
                icon: Monitor,
                title: "Le dashboard",
                text: "Centraliser les audits, les rapports et le suivi SEO dans un espace de travail web.",
                stack: "React · TypeScript · Recharts",
              },
              {
                icon: Smartphone,
                title: "L’application mobile",
                text: "Retrouver les audits, les établissements et les opportunités dans des parcours adaptés au téléphone.",
                stack: "React Native · Expo · Expo Router",
              },
            ].map(({ icon: Icon, title, text, stack }) => (
              <div className="expertise-card" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{stack}</small>
              </div>
            ))}
          </div>
          <div className="architecture-note">
            <strong>Une architecture partagée</strong>
            <p>
              Vitrine, dashboard et mobile → API NestJS → données PostgreSQL et
              moteur IA Python / FastAPI. Les frontends sont regroupés avec pnpm
              et Turborepo ; le backend et le moteur IA sont maintenus
              séparément.
            </p>
          </div>
        </section>
      )}
      <Link href={`/work/${next.slug}`} className="next-project">
        <div>
          <p className="eyebrow">PROJET SUIVANT</p>
          <h2>{next.title}</h2>
        </div>
        <ArrowUpRight size={40} />
      </Link>
    </article>
  );
}
