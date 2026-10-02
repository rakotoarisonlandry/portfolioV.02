"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
export default function AboutPage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">{en ? "ABOUT / LANDRY RAKOTOARISON" : "À PROPOS / LANDRY RAKOTOARISON"}</p>
        <h1>
          {en ? "A curious mind." : "Un esprit curieux."}
          <br />
          {en ? <>Concrete <em>solutions.</em></> : <>Des solutions <em>concrètes.</em></>}
        </h1>
      </header>
      <section className="about-profile">
        <div className="about-photo">
          <Image
            src="/assets/profil.png"
            alt="Portrait de Landry"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="eyebrow">{en ? "FULLSTACK DEVELOPER · MADAGASCAR" : "DÉVELOPPEUR FULLSTACK · MADAGASCAR"}</p>
          <h2>{en ? "Hello, I’m Landry." : "Bonjour, moi c’est Landry."}</h2>
          <p>
            {en ? "I build web and mobile applications by connecting interface design, business logic and data. What drives me: understanding a need, simplifying journeys and building a meaningful solution." : <>Je développe des applications web et mobiles en reliant conception
            d’interface, logique métier et données. Ce qui m’intéresse :
            comprendre un besoin, simplifier les parcours et construire une
            solution qui a du sens.</>}
          </p>
          <p>
            {en ? "With Plastikôo, I worked on an ecosystem dedicated to collecting and recovering plastic waste. With our RobIA project, this approach extends to local SEO, artificial intelligence and complementary web and mobile interfaces." : <>Avec Plastikôo, j’ai travaillé sur un écosystème dédié à la collecte
            et à la valorisation des déchets plastiques. Avec notre projet
            RobIA, cette approche se prolonge autour du SEO local, de
            l’intelligence artificielle et d’interfaces web et mobiles
            complémentaires.</>}
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              {en ? "Let’s connect" : "Faisons connaissance"} <ArrowUpRight size={16} />
            </Link>
            <a
              href="/assets/files/RAKOTOARISON_LANDRY.pdf"
              className="text-link"
              download
            >
              {en ? "My resume" : "Mon CV"} <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{en ? "MY TECHNICAL FOUNDATION" : "MON SOCLE TECHNIQUE"}</p>
            <h2>
              {en ? <>A <em>cross-functional</em> vision.</> : <>Une vision <em>transversale.</em></>}
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
              title: en ? "Backend & data" : "Backend & données",
              items: [
                "Node.js",
                "Express",
                "Spring Boot",
                "MySQL",
                "PostgreSQL",
              ],
            },
            {
              title: en ? "Tools & methods" : "Outils & méthode",
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
        <p className="eyebrow">{en ? "A FEW STEPS ALONG THE WAY" : "QUELQUES ÉTAPES DU PARCOURS"}</p>
        <h2>
          {en ? <>Learn. Build. <em>Grow.</em></> : <>Apprendre. Construire. <em>Évoluer.</em></>}
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
