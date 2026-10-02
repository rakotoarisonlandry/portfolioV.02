"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "fr" | "en";

const storageKey = "portfolio-language";

const translations = {
  fr: {
    home: "Accueil",
    work: "Projets",
    about: "À propos",
    services: "Expertises",
    contact: "Parlons de votre projet",
    contactShort: "Me contacter ↗",
    discover: "Découvrir le projet",
    allProjects: "Tous les projets",
    all: "Tous",
    projectsToDiscover: (count: number) => `${count} projets à découvrir`,
    sendMessage: "Envoyer mon message",
    sending: "Envoi en cours…",
    languageLabel: "Langue",
  },
  en: {
    home: "Home",
    work: "Projects",
    about: "About",
    services: "Expertise",
    contact: "Let's discuss your project",
    contactShort: "Contact me ↗",
    discover: "Discover the project",
    allProjects: "All projects",
    all: "All",
    projectsToDiscover: (count: number) =>
      `${count} ${count === 1 ? "project" : "projects"} to discover`,
    sendMessage: "Send my message",
    sending: "Sending…",
    languageLabel: "Language",
  },
} as const;

type TranslationKey = Exclude<keyof (typeof translations)["fr"], "projectsToDiscover">;
type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  projectsToDiscover: (count: number) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "fr" || saved === "en") {
      window.setTimeout(() => setLanguageState(saved), 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // The switch still works when storage is unavailable.
    }
    document.documentElement.lang = next;
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key],
      projectsToDiscover: (count) => translations[language].projectsToDiscover(count),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
