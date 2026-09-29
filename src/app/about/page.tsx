import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "À propos" };
export default function AboutPage() {
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">À PROPOS / LANDRY RAKOTOARISON</p>
        <h1>
          Un esprit curieux.
          <br />
          Des solutions <em>concrètes.</em>
        </h1>
      </header>
      <section className="about-profile">
        <div className="about-photo">
          <Image
            src="/assets/profil1.png"
            alt="Portrait de Landry"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="eyebrow">DÉVELOPPEUR FULLSTACK · MADAGASCAR</p>
          <h2>Bonjour, moi c’est Landry.</h2>
          <p>
            Je développe des applications web et mobiles en reliant conception
            d’interface, logique métier et données. Ce qui m’intéresse :
            comprendre un besoin, simplifier les parcours et construire une
            solution qui a du sens.
          </p>
          <p>
            Avec Plastikôo, j’ai travaillé sur un écosystème dédié à la collecte
            et à la valorisation des déchets plastiques. Avec notre projet
            RobIA, cette approche se prolonge autour du SEO local, de
            l’intelligence artificielle et d’interfaces web et mobiles
            complémentaires.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              Faisons connaissance <ArrowUpRight size={16} />
            </Link>
            <a
              href="/assets/files/RAKOTOARISON_LANDRY.pdf"
              className="text-link"
              download
            >
              Mon CV <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MON SOCLE TECHNIQUE</p>
            <h2>
              Une vision <em>transversale.</em>
            </h2>
          </div>
        </div>
        <div className="skills-grid">
          {[
            {
              title: "Frontend",
              items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            { title: "Mobile", items: ["React Native", "Expo", "Flutter"] },
            {
              title: "Backend & données",
              items: [
                "Node.js",
                "Express",
                "Spring Boot",
                "MySQL",
                "PostgreSQL",
              ],
            },
            {
              title: "Outils & méthode",
              items: ["Git", "Docker", "Figma", "Postman", "CI/CD"],
            },
          ].map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="journey">
        <p className="eyebrow">QUELQUES ÉTAPES DU PARCOURS</p>
        <h2>
          Apprendre. Construire. <em>Évoluer.</em>
        </h2>
        {[
          {
            date: "2024 – 2026",
            title: "Développement fullstack · Plastikôo",
            text: "Un écosystème web et mobile au service de l’économie circulaire : Next.js, React Native et API Express.",
          },
          {
            date: "2024",
            title: "Orange Digital Center",
            text: "Stage et participation à l’Orange Summer Challenge avec le projet Plastikôo.",
          },
          {
            date: "2024",
            title: "Licence en informatique · ENI",
            text: "Mémoire consacré à une plateforme web et mobile de collecte et de transformation des déchets plastiques.",
          },
          {
            date: "2023",
            title: "Stage de développement · NY HAVANA",
            text: "Applications de gestion avec React, Express et MySQL.",
          },
        ].map((item) => (
          <div className="journey-item" key={item.title}>
            <span>{item.date}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
