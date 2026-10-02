"use client";

import Link from "next/link";
import {
  Code2,
  Smartphone,
  Database,
  Compass,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
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
  const { language } = useLanguage();
  const en = language === "en";
  const localizedServices = en ? [
    { ...services[0], title: "Web interfaces & applications", text: "Make your product a clear and enjoyable experience, from the first screen to everyday use.", items: ["React / Next.js websites and applications", "Responsive and accessible interfaces", "Dashboards and business journeys"] },
    { ...services[1], title: "Mobile applications", text: "Extend your service to mobile with journeys designed for small screens and touch interactions.", items: ["React Native and Expo", "Mobile navigation and interactions", "API connections and state management"] },
    { ...services[2], title: "Fullstack development", text: "Connect your interfaces to structured business logic and well-organized data.", items: ["REST APIs and integrations", "Data modelling", "Connected web and mobile applications"] },
    { ...services[3], title: "Product evolution", text: "Start from what you have to identify friction points and improve the experience.", items: ["Interface and journey review", "Component redesign", "Improved maintainability"] },
  ] : services;
  return (
    <div className="shell section-space">
      <header className="page-heading">
        <p className="eyebrow">{en ? "EXPERTISE / FROM NEED TO PRODUCT" : "EXPERTISES / DU BESOIN AU PRODUIT"}</p>
        <h1>
          {en ? "Your vision." : "Votre vision."}
          <br />
          {en ? <>My know-<em>how.</em></> : <>Mon savoir-<em>faire.</em></>}
        </h1>
        <p>
          {en ? "Technical support focused on what matters: your users, your goals and product quality." : "Un accompagnement technique attentif à l’essentiel : vos utilisateurs, vos objectifs et la qualité du produit."}
        </p>
      </header>
      <div className="services-grid">
        {localizedServices.map(({ icon: Icon, title, text, items }) => (
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
        <p className="eyebrow">{en ? "A CLEAR COLLABORATION" : "UNE COLLABORATION LISIBLE"}</p>
        <h2>
          {en ? <>Move forward, <em>step by step.</em></> : <>Avancer, <em>étape par étape.</em></>}
        </h2>
        <div className="process-grid">
          {[
            {
              title: en ? "Understand" : "Comprendre",
              text: en ? "Clarify the need, audience and priorities." : "Clarifier le besoin, le public et les priorités.",
            },
            {
              title: en ? "Design" : "Concevoir",
              text: en ? "Define journeys and a visual direction." : "Définir les parcours et une direction visuelle.",
            },
            {
              title: en ? "Develop" : "Développer",
              text: en ? "Build, share progress and adjust." : "Construire, partager les avancées et ajuster.",
            },
            {
              title: en ? "Deliver" : "Livrer",
              text: en ? "Check, deploy and prepare what comes next." : "Vérifier, déployer et préparer la suite.",
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
          {en ? "Let’s discuss your needs" : "Parlons de votre besoin"} <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
