"use client";

import { useLanguage, type Language } from "./language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t("languageLabel")}>
      {(["fr", "en"] as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? "active" : ""}
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
