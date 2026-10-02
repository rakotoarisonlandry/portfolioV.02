"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Smartphone,
  Layers,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { useLanguage } from "@/components/layout/language-provider";
export default function HomePage() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> {en ? "FULLSTACK DEVELOPER · WEB & MOBILE" : "DÉVELOPPEUR FULLSTACK · WEB & MOBILE"}
          </p>
          <h1>
            {en ? "Ideas." : "Des idées."}
            <br />
            {en ? "Code." : "Du code."}
            <br />
            <span>{en ? "Impact." : "De l’impact."}</span>
          </h1>
          <p className="hero-intro">
            {en ? <>I’m <strong>Landry.</strong> I turn ideas into useful, intuitive and carefully crafted digital experiences.</> : <>Moi, c’est <strong>Landry.</strong> Je transforme des idées en expériences numériques utiles, intuitives et soignées.</>}
          </p>
          <div className="hero-actions">
            <Link href="/work" className="button button-primary">
              {en ? "Explore my projects" : "Explorer mes projets"} <ArrowUpRight size={18} />
            </Link>
            <Link href="/about" className="text-link">
              {en ? "Get to know me" : "Faire connaissance"} <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> {en ? "Based in Madagascar" : "Basé à Madagascar"} <span>·</span> {en ? "Open to remote collaborations" : "Ouvert aux collaborations à distance"}
          </div>
        </div>
          
          <div className="profile-stage">
            <Image
              src="/assets/profil.png"
              alt="Portrait de Landry Rakotoarison"
              fill
              priority
              sizes="(max-width: 799px) 90vw, 42vw"
              className="profile-photo"
            />
          </div>
      </section>
      <div className="tech-strip">
        <div className="shell">
          <span>{en ? "TOOLS I USE DAILY" : "MES OUTILS AU QUOTIDIEN"}</span>
          {["React", "Next.js", "TypeScript", "React Native", "Node.js"].map(
            (item) => (
              <strong key={item}>{item}</strong>
            ),
          )}
        </div>
      </div>
      <section className="shell section-space" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / {en ? "SELECTED PROJECTS" : "PROJETS SÉLECTIONNÉS"}</p>
            <h2>
              {en ? <>Code comes <em>to life.</em></> : <>Le code prend <em>vie.</em></>}
            </h2>
          </div>
          <Link href="/work" className="text-link">
            {en ? "All projects" : "Tous les projets"} <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="projects-grid">
          {[projects[0], projects[1], projects[3], projects[4]].map(
            (project) => (
              <PortfolioCard key={project.slug} project={project} />
            ),
          )}
        </div>
      </section>
      <section className="expertise-section">
        <div className="shell section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / {en ? "WHAT I CAN BRING" : "CE QUE JE PEUX APPORTER"}</p>
              <h2>
                {en ? "Think about the experience." : "Penser l’expérience."}
                <br />
                <em>{en ? "Build the solution." : "Construire la solution."}</em>
              </h2>
            </div>
            <p className="section-description">
              {en ? "From interface to data, I connect technical details to users’ needs." : "De l’interface aux données, je relie les détails techniques aux besoins des utilisateurs."}
            </p>
          </div>
          <div className="expertise-grid">
            {[
              {
                icon: Code2,
                title: en ? "Web development" : "Développement web",
                text: en ? "Clear, responsive interfaces designed for every screen." : "Des interfaces claires, réactives et adaptées à chaque écran.",
                tags: "React / Next.js / TypeScript",
              },
              {
                icon: Smartphone,
                title: en ? "Mobile applications" : "Applications mobiles",
                text: en ? "Fluid journeys designed for everyday use." : "Des parcours fluides, pensés pour les usages du quotidien.",
                tags: "React Native / Expo",
              },
              {
                icon: Layers,
                title: en ? "Fullstack solutions" : "Solutions fullstack",
                text: en ? "Connect a polished experience to a solid technical foundation." : "Connecter une expérience soignée à une base technique solide.",
                tags: "Node.js / API REST / Bases de données",
              },
            ].map(({ icon: Icon, title, text, tags }, i) => (
              <Link href="/services" className="expertise-card" key={title}>
                <div>
                  <Icon size={25} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{tags}</small>
                <ArrowUpRight className="expertise-arrow" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="shell about-teaser section-space">
        <div>
          <p className="eyebrow">03 / {en ? "BEHIND THE CODE" : "DERRIÈRE LE CODE"}</p>
          <h2>
            {en ? "Curious by nature." : "Curieux par nature."}
            <br />
            <em>{en ? "Developer by passion." : "Développeur par passion."}</em>
          </h2>
        </div>
        <div>
          <p>
            {en ? "I’m Landry Rakotoarison, a fullstack developer based in Madagascar. I create products where technology serves a concrete purpose, from recycling with Plastikôo to local SEO with our RobIA project." : "Je suis Landry Rakotoarison, développeur fullstack basé à Madagascar. J’aime créer des produits où la technique sert un usage concret, du recyclage avec Plastikôo au SEO local avec notre projet RobIA."}
          </p>
          <Link href="/about" className="text-link">
            {en ? "Discover my journey" : "Découvrir mon parcours"} <ArrowUpRight size={17} />
          </Link>
          <a
            className="text-link cv-link"
            href="/assets/files/RAKOTOARISON_LANDRY.pdf"
            download
          >
            {en ? "Download my resume" : "Télécharger mon CV"} <ArrowDown size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
