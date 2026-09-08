import { useSyncExternalStore } from "react";

/**
 * App language preference. Stored client-side like the theme preference, so
 * it works the same in the browser, the desktop shell, and remote sessions
 * without touching the server or the wire contracts.
 */
export const APP_LOCALES = ["en", "es"] as const;
export type AppLocale = (typeof APP_LOCALES)[number];
export type LocalePreference = "system" | AppLocale;

export const LOCALE_STORAGE_KEY = "t3code:locale";
const DEFAULT_LOCALE: AppLocale = "en";

const listeners = new Set<() => void>();

function isAppLocale(value: string): value is AppLocale {
  return (APP_LOCALES as ReadonlyArray<string>).includes(value);
}

export function isLocalePreference(value: string): value is LocalePreference {
  return value === "system" || isAppLocale(value);
}

export function readLocalePreference(): LocalePreference {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored && isLocalePreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

/** Maps a list of BCP 47 tags (most preferred first) to a supported locale. */
export function resolveLocale(
  preference: LocalePreference,
  languages: ReadonlyArray<string>,
): AppLocale {
  if (preference !== "system") return preference;
  for (const tag of languages) {
    const language = tag.trim().toLowerCase().split(/[-_]/)[0];
    if (language && isAppLocale(language)) return language;
  }
  return DEFAULT_LOCALE;
}

/**
 * The packaged desktop app ships only the en-US locale pak, so the renderer's
 * `navigator.language` is pinned to English regardless of the OS. The desktop
 * bridge reports the real OS locale; browsers report it directly.
 */
function readSystemLanguages(): ReadonlyArray<string> {
  if (typeof window === "undefined") return [];
  const desktopLocale = window.desktopBridge?.getSystemLocale?.() ?? null;
  const browserLanguages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return desktopLocale ? [desktopLocale, ...browserLanguages] : browserLanguages;
}

let currentLocale: AppLocale = resolveLocale(readLocalePreference(), readSystemLanguages());

/** Synchronous read used by `t()` during render. */
export function getCurrentLocale(): AppLocale {
  return currentLocale;
}

export function setLocalePreference(preference: LocalePreference): void {
  if (typeof window !== "undefined") {
    try {
      if (preference === "system") {
        window.localStorage.removeItem(LOCALE_STORAGE_KEY);
      } else {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, preference);
      }
    } catch {
      // Storage may be unavailable (private mode, quota); keep the in-memory value.
    }
  }
  currentLocale = resolveLocale(preference, readSystemLanguages());
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  if (typeof window !== "undefined") {
    const onLanguageChange = () => setLocalePreference(readLocalePreference());
    window.addEventListener("languagechange", onLanguageChange);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("languagechange", onLanguageChange);
    };
  }
  return () => listeners.delete(listener);
}

export function useLocalePreference(): LocalePreference {
  return useSyncExternalStore(subscribe, readLocalePreference, () => "system" as const);
}

export function useLocale(): AppLocale {
  return useSyncExternalStore(subscribe, getCurrentLocale, () => DEFAULT_LOCALE);
}
