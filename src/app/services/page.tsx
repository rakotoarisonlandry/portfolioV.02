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
    <div className="mx-auto w-[min(1200px,calc(100%-96px))] py-[88px] max-[1050px]:w-[calc(100%-64px)] max-[799px]:w-[calc(100%-40px)] max-[799px]:py-[58px]">
      <header className="mb-[55px] max-w-[850px]">
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "EXPERTISE / FROM NEED TO PRODUCT" : "EXPERTISES / DU BESOIN AU PRODUIT"}</p>
        <h1 className="mb-6 text-[clamp(42px,5.4vw,70px)] font-medium leading-[1.15] tracking-[-3px]">
          {en ? "Your vision." : "Votre vision."}
          <br />
          {en ? <>My know-<em>how.</em></> : <>Mon savoir-<em>faire.</em></>}
        </h1>
        <p className="max-w-[660px] text-[15px] leading-[1.9] text-[var(--portfolio-muted)] max-[799px]:text-[13px]">
          {en ? "Technical support focused on what matters: your users, your goals and product quality." : "Un accompagnement technique attentif à l’essentiel : vos utilisateurs, vos objectifs et la qualité du produit."}
        </p>
      </header>
      <div className="grid grid-cols-2 gap-6 max-[799px]:grid-cols-1">
        {localizedServices.map(({ icon: Icon, title, text, items }) => (
          <article className="rounded-[12px] border border-[var(--portfolio-line)] bg-[#f1eeef] p-[34px] max-[799px]:p-[25px]" key={title}>
            <Icon size={28} className="mb-6 text-[var(--portfolio-purple)]" />
            <h2 className="text-[26px] tracking-[-1px]">{title}</h2>
            <p className="my-5 text-[13px] leading-[1.9] text-[var(--portfolio-muted)]">{text}</p>
            <ul className="grid list-none gap-[17px] p-0">
              {items.map((item) => (
                <li className="flex items-start gap-3 text-[13px] leading-[1.7]" key={item}>
                  <Check className="mt-[3px] shrink-0 text-[var(--portfolio-purple)]" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="py-[88px] max-[799px]:py-[58px]">
        <p className="mb-5 text-[10px] font-semibold leading-[1.6] tracking-[1.9px] text-[var(--portfolio-muted)]">{en ? "A CLEAR COLLABORATION" : "UNE COLLABORATION LISIBLE"}</p>
        <h2 className="text-[clamp(28px,3.2vw,43px)] font-medium tracking-[-1.8px]">
          {en ? <>Move forward, <em>step by step.</em></> : <>Avancer, <em>étape par étape.</em></>}
        </h2>
        <div className="my-10 grid grid-cols-4 gap-[25px] max-[799px]:grid-cols-2">
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
              <span className="text-[12px] text-[var(--portfolio-purple)]">0{i + 1}</span>
              <h3 className="mt-[18px] font-medium">{item.title}</h3>
              <p className="text-[12px] leading-[1.9] text-[var(--portfolio-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3.5 rounded-md bg-[var(--portfolio-purple)] px-6 py-3.5 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5933b5]">
          {en ? "Let’s discuss your needs" : "Parlons de votre besoin"} <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
