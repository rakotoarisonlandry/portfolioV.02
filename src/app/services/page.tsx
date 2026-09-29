import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Database,
  Compass,
  ArrowUpRight,
  Check,
} from "lucide-react";
export const metadata: Metadata = { title: "Expertises & services" };
const services = [
  {
    icon: Code2,
    title: "Interfaces & applications web",
    text: "Faire de votre produit une expérience claire et agréable, du premier écran aux usages quotidiens.",
    items: [
      "Sites vitrines et applications React / Next.js",
      "Interfaces responsive et accessibles",
      "Dashboards et parcours métier",
    ],
  },
  {
    icon: Smartphone,
    title: "Applications mobiles",
    text: "Prolonger votre service sur mobile avec des parcours conçus pour les petits écrans et les interactions tactiles.",
    items: [
      "React Native et Expo",
      "Navigation et interactions mobiles",
      "Connexion aux API et gestion des états",
    ],
  },
  {
    icon: Database,
    title: "Développement fullstack",
    text: "Relier vos interfaces à une logique métier structurée et à des données bien organisées.",
    items: [
      "API REST et intégrations",
      "Modélisation des données",
      "Applications web et mobile connectées",
    ],
  },
  {
    icon: Compass,
    title: "Évolution de produits",
    text: "Partir de votre existant pour identifier les points de friction et faire progresser l’expérience.",
    items: [
      "Revue d’interface et de parcours",
      "Refonte de composants",
      "Amélioration de la maintenabilité",
    ],
  },
];
export default function ServicesPage() {
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">EXPERTISES / DU BESOIN AU PRODUIT</p>
        <h1>
          Votre vision.
          <br />
          Mon savoir-<em>faire.</em>
        </h1>
        <p>
          Un accompagnement technique attentif à l’essentiel : vos utilisateurs,
          vos objectifs et la qualité du produit.
        </p>
      </header>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, items }) => (
          <article className="service-card" key={title}>
            <Icon size={28} />
            <h2>{title}</h2>
            <p>{text}</p>
            <ul className="feature-list">
              {items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="section-space">
        <p className="eyebrow">UNE COLLABORATION LISIBLE</p>
        <h2>
          Avancer, <em>étape par étape.</em>
        </h2>
        <div className="process-grid">
          {[
            {
              title: "Comprendre",
              text: "Clarifier le besoin, le public et les priorités.",
            },
            {
              title: "Concevoir",
              text: "Définir les parcours et une direction visuelle.",
            },
            {
              title: "Développer",
              text: "Construire, partager les avancées et ajuster.",
            },
            {
              title: "Livrer",
              text: "Vérifier, déployer et préparer la suite.",
            },
          ].map((item, i) => (
            <div key={item.title}>
              <span>0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="button button-primary">
          Parlons de votre besoin <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
