export type Project = {
  slug: string;
  title: string;
  category: ("Web" | "Mobile" | "Expérimentation")[];
  label: string;
  summary: string;
  image?: string;
  color: string;
  stack: string[];
  context: string;
  approach: string;
  features: string[];
  live?: string;
  github?: string;
};
export const projects: Project[] = [
  {
    slug: "robia",
    title: "RobIA",
    category: ["Web", "Mobile"],
    label: "SEO LOCAL · INTELLIGENCE ARTIFICIELLE",
    summary:
      "Un écosystème web et mobile pour rendre le SEO local plus accessible et passer de l’audit à l’action.",
    color: "violet",
    stack: ["React", "TypeScript", "Vite", "React Native", "Expo", "Turborepo"],
    context:
      "RobIA est un projet d’équipe : une plateforme d’audit SEO local assistée par intelligence artificielle. L’enjeu est de présenter des informations complexes dans des interfaces lisibles, du premier contact sur la vitrine au suivi quotidien sur mobile.",
    approach:
      "Trois interfaces complémentaires, organisées dans un monorepo : une vitrine pour découvrir le produit, un dashboard pour piloter son activité et une application Expo pour retrouver les parcours sur mobile. Elles consomment une API commune, dont le backend NestJS et le moteur IA Python sont maintenus dans un dépôt séparé.",
    features: [
      "Site vitrine en React et Vite",
      "Dashboard client : audits, suivi et visualisation des données",
      "Application mobile React Native avec Expo Router",
      "Parcours d’audit, rapports, établissements et opportunités",
      "Organisation du frontend avec pnpm et Turborepo",
    ],
  },
  {
    slug: "plastikoo",
    title: "Plastikôo",
    category: ["Web"],
    label: "ÉCONOMIE CIRCULAIRE · PLATEFORME WEB",
    summary:
      "Connecter collecte, recyclage et communauté autour de la valorisation des déchets plastiques.",
    image: "/assets/plastikoofront.png",
    color: "mint",
    stack: ["Next.js", "Node.js", "Tailwind CSS"],
    context:
      "Plastikôo transforme les déchets plastiques en matériaux de construction. La plateforme web accompagne cette démarche en donnant une présence numérique au projet et en reliant ses activités.",
    approach:
      "Une expérience web pour présenter la démarche, accompagner la collecte et soutenir l’engagement de la communauté, en complément de l’application mobile.",
    features: [
      "Présentation du projet et de sa mission",
      "Parcours liés à la collecte et au recyclage",
      "Interface responsive",
      "Écosystème web et mobile",
    ],
    live: "https://plastikoo.mg/",
  },
  {
    slug: "plastikoo-mobile",
    title: "Plastikôo Mobile",
    category: ["Mobile"],
    label: "APPLICATION MOBILE · IMPACT ENVIRONNEMENTAL",
    summary:
      "Mettre la collecte de plastique et l’engagement communautaire à portée de main.",
    image: "/assets/mobileapk.png",
    color: "peach",
    stack: ["React Native", "TypeScript", "MySQL"],
    context:
      "Une application mobile complémentaire à la plateforme Plastikôo pour accompagner les utilisateurs dans la collecte des déchets plastiques.",
    approach:
      "Des parcours pensés pour un usage mobile et un système de récompenses pour encourager la participation à la démarche de recyclage.",
    features: [
      "Collecte de déchets plastiques",
      "Système de récompenses",
      "Engagement de la communauté",
      "Application multiplateforme",
    ],
  },
  {
    slug: "tech-paradise",
    title: "Tech Paradise",
    category: ["Web"],
    label: "E-COMMERCE · EXPÉRIENCE D’ACHAT",
    summary:
      "Une boutique en ligne, de la découverte des produits au paiement.",
    image: "/assets/e-commerce.png",
    color: "blue",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Stripe"],
    context:
      "Un projet e-commerce qui réunit catalogue, filtres et gestion dans une interface moderne.",
    approach:
      "Structurer le parcours d’achat pour faciliter la recherche des produits, avec une intégration de paiement et un espace d’administration.",
    features: [
      "Catalogue et filtres avancés",
      "Intégration du paiement",
      "Dashboard d’administration",
      "Interface adaptée au mobile",
    ],
    live: "https://ln-techparadise.vercel.app/",
    github: "https://github.com/rakotoarisonlandry/Tech-Paradise",
  },
  {
    slug: "e-tatasiaka",
    title: "E-Tatasiaka",
    category: ["Web", "Mobile"],
    label: "MESSAGERIE · TEMPS RÉEL",
    summary:
      "Une expérience de conversation autour des échanges et du partage multimédia.",
    image: "/assets/e-tatasiaka.png",
    color: "violet",
    stack: ["Next.js", "React Native", "TypeScript"],
    context:
      "Un projet de messagerie pour explorer les interactions en temps réel et les échanges entre utilisateurs.",
    approach:
      "Réunir conversations de groupe et partage multimédia dans un parcours de messagerie accessible sur plusieurs supports.",
    features: [
      "Messagerie en temps réel",
      "Conversations de groupe",
      "Partage multimédia",
      "Expérience multiplateforme",
    ],
    github: "https://github.com/rakotoarisonlandry/tatasiaka/",
  },
  {
    slug: "maze",
    title: "Maze Explorer",
    category: ["Web", "Expérimentation"],
    label: "ALGORITHMES · VISUALISATION",
    summary:
      "Comprendre la recherche de chemins grâce à une exploration visuelle de labyrinthes.",
    image: "/assets/mage.png",
    color: "mint",
    stack: ["Next.js"],
    context:
      "Une expérimentation autour de la visualisation de labyrinthes et des algorithmes de recherche de chemins.",
    approach:
      "Rendre le comportement des algorithmes plus concret grâce à une visualisation en 3D et à la comparaison des parcours.",
    features: [
      "Visualisation de labyrinthes en 3D",
      "Recherche de chemins",
      "Comparaison multi-objectifs",
    ],
    live: "https://labyrinthe-wvfp.onrender.com/",
  },
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    category: ["Web"],
    label: "IDENTITÉ · DESIGN & DÉVELOPPEMENT",
    summary:
      "Une nouvelle façon de présenter mon parcours et mes projets numériques.",
    image: "/assets/portfolioV2.png",
    color: "peach",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    context:
      "La deuxième version de mon portfolio personnel, centrée sur la présentation des projets et des compétences.",
    approach:
      "Faire évoluer l’identité visuelle et la navigation avec une interface responsive et une hiérarchie de contenu plus claire.",
    features: [
      "Présentation des réalisations",
      "Parcours et compétences",
      "Design responsive",
    ],
    live: "https://landrybrigea.vercel.app/",
    github: "https://github.com/rakotoarisonlandry/Portfolio.v2",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    category: ["Web"],
    label: "ARCHIVES · PREMIER PORTFOLIO",
    summary: "Les premières bases de mon identité de développeur sur le web.",
    image: "/assets/portfoliov1.png",
    color: "blue",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    context:
      "La première version de mon portfolio, réunissant projets, compétences et informations de contact.",
    approach:
      "Construire une présence personnelle sur le web avec une structure simple et une première sélection de réalisations.",
    features: [
      "Présentation personnelle",
      "Galerie de projets",
      "Informations de contact",
    ],
    live: "https://landryportfolio.onrender.com/",
  },
];
