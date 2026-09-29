"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { themeStorageKey } from "@/lib/theme";

const themeEvent = "portfolio-theme-change";
function subscribe(onChange: () => void) {
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const syncPreference = () => {
    let preference: string | null = null;
    try {
      preference = localStorage.getItem(themeStorageKey);
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
    const dark =
      preference === "dark" || (preference !== "light" && system.matches);
    document.documentElement.classList.toggle("dark", dark);
    onChange();
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === themeStorageKey || event.key === null) syncPreference();
  };
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", onStorage);
  system.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", onStorage);
    system.removeEventListener("change", syncPreference);
  };
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  function toggleTheme() {
    const next = !getSnapshot();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(themeStorageKey, next ? "dark" : "light");
    } catch {
      /* The toggle still works without persistence. */
    }
    window.dispatchEvent(new Event(themeEvent));
  }
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Mode sombre"
      aria-pressed={dark}
      title={dark ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      <Moon size={19} className="theme-moon" aria-hidden="true" />
      <Sun size={19} className="theme-sun" aria-hidden="true" />
    </button>
  );
}
