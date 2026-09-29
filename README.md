# Portfolio de Landry

Portfolio Next.js / TypeScript, en français, avec présentations détaillées des projets web et mobile.

## Développement

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Vérifications

```sh
npm run lint
npm run typecheck
npm run build
```

## Modifier les projets

Les contenus sont centralisés dans `src/data/projects.ts`. Chaque projet possède une fiche `/work/[slug]` générée statiquement. Les catégories alimentent les filtres de la galerie. Les visuels existants se trouvent dans `public/assets`.

La présentation RobIA s’appuie sur la documentation et les manifests du monorepo local : vitrine React/Vite, dashboard React/Vite et application React Native/Expo. Le backend NestJS et le moteur IA Python/FastAPI sont maintenus dans un dépôt séparé. Le visuel RobIA est une illustration conceptuelle en HTML/CSS, explicitement signalée comme telle. Aucun code privé RobIA n’est copié dans ce portfolio.

## Formulaire de contact

Configurer `SMTP_EMAIL` et `SMTP_PASS` dans `.env.local` (ou les variables d’environnement de l’hébergement). Le transport existant utilise Gmail ; `SMTP_PASS` doit être un mot de passe d’application adapté au compte.

Sans configuration SMTP, l’API renvoie 503 et le formulaire propose l’adresse email directe. Les messages sont validés côté serveur. L’adresse de l’utilisateur sert de `replyTo`, l’expéditeur reste le compte SMTP. Aucun envoi réel n’est nécessaire pour les contrôles d’interface.

## Interface

- Accueil, galerie filtrable et huit fiches projets, dont RobIA.
- Pages parcours, expertises et contact.
- Navigation mobile avec fermeture via Échap, lien d’évitement et focus visible.
- Mise en page responsive et prise en compte de la réduction des animations.
- Aucun délai artificiel de chargement.
- Les routes historiques `/blog` et `/testimonial` restent disponibles.

Les tests visuels temporaires et leurs captures sont conservés dans `.qa/`, exclu de Git.

## Hébergement

Le portfolio utilise le runtime serveur de Next.js pour `/contact/api` : déployer sur un hébergement compatible Next.js/Node.js. L’ancien `output: "export"` a été retiré, car un export HTML seul ne peut pas exécuter cette API.

Après compilation, `npm start` lance le serveur de production.
