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
export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> DÉVELOPPEUR FULLSTACK · WEB & MOBILE
          </p>
          <h1>
            Des idées.
            <br />
            Du code.
            <br />
            <span>De l’impact.</span>
            <span className="hero-spark" aria-hidden="true">
              ✳
            </span>
          </h1>
          <p className="hero-intro">
            Moi, c’est <strong>Landry.</strong> Je transforme des idées en
            expériences numériques utiles, intuitives et soignées.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="button button-primary">
              Explorer mes projets <ArrowUpRight size={18} />
            </Link>
            <Link href="/about" className="text-link">
              Faire connaissance <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> Basé à Madagascar <span>·</span> Ouvert aux
            collaborations à distance
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-backdrop">
            <span className="portrait-outline" />
            <span className="portrait-star" aria-hidden="true">
              ✳
            </span>
            <Image
              src="/assets/profil1.png"
              alt="Landry Rakotoarison, développeur fullstack"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 45vw"
              className="hero-portrait"
            />
            <span className="portrait-name" aria-hidden="true">
              LANDRY
            </span>
          </div>
          <div className="floating-note note-top">
            <span className="note-icon">
              <Code2 size={20} />
            </span>
            <div>
              <strong>Du concept au produit.</strong>
              <small>Design · Développement · Expérience</small>
            </div>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon">
              <Smartphone size={20} />
            </span>
            <div>
              <strong>Web & mobile</strong>
              <small>Une expérience, plusieurs écrans.</small>
            </div>
            <ArrowUpRight size={19} />
          </div>
        </div>
      </section>
      <div className="tech-strip">
        <div className="shell">
          <span>MES OUTILS AU QUOTIDIEN</span>
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
            <p className="eyebrow">01 / PROJETS SÉLECTIONNÉS</p>
            <h2>
              Le code prend <em>vie.</em>
            </h2>
          </div>
          <Link href="/work" className="text-link">
            Tous les projets <ArrowUpRight size={17} />
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
              <p className="eyebrow">02 / CE QUE JE PEUX APPORTER</p>
              <h2>
                Penser l’expérience.
                <br />
                <em>Construire la solution.</em>
              </h2>
            </div>
            <p className="section-description">
              De l’interface aux données, je relie les détails techniques aux
              besoins des utilisateurs.
            </p>
          </div>
          <div className="expertise-grid">
            {[
              {
                icon: Code2,
                title: "Développement web",
                text: "Des interfaces claires, réactives et adaptées à chaque écran.",
                tags: "React / Next.js / TypeScript",
              },
              {
                icon: Smartphone,
                title: "Applications mobiles",
                text: "Des parcours fluides, pensés pour les usages du quotidien.",
                tags: "React Native / Expo",
              },
              {
                icon: Layers,
                title: "Solutions fullstack",
                text: "Connecter une expérience soignée à une base technique solide.",
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
          <p className="eyebrow">03 / DERRIÈRE LE CODE</p>
          <h2>
            Curieux par nature.
            <br />
            <em>Développeur par passion.</em>
          </h2>
        </div>
        <div>
          <p>
            Je suis Landry Rakotoarison, développeur fullstack basé à
            Madagascar. J’aime créer des produits où la technique sert un usage
            concret, du recyclage avec Plastikôo au SEO local avec notre projet
            RobIA.
          </p>
          <Link href="/about" className="text-link">
            Découvrir mon parcours <ArrowUpRight size={17} />
          </Link>
          <a
            className="text-link cv-link"
            href="/assets/files/RAKOTOARISON_LANDRY.pdf"
            download
          >
            Télécharger mon CV <ArrowDown size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
