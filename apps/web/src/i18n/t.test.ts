import { afterEach, describe, expect, it } from "vite-plus/test";

import { es } from "./es";
import { resolveLocale, setLocalePreference } from "./locale";
import { t, tAround } from "./t";

afterEach(() => {
  setLocalePreference("en");
});

describe("resolveLocale", () => {
  it("prefers an explicit choice over system languages", () => {
    expect(resolveLocale("es", ["en-US"])).toBe("es");
    expect(resolveLocale("en", ["es-ES"])).toBe("en");
  });

  it("maps system languages to a supported locale and falls back to English", () => {
    expect(resolveLocale("system", ["es-ES", "en"])).toBe("es");
    expect(resolveLocale("system", ["fr-FR", "es"])).toBe("es");
    expect(resolveLocale("system", ["fr-FR", "de"])).toBe("en");
    expect(resolveLocale("system", [])).toBe("en");
  });
});

describe("t", () => {
  it("returns the English text untouched in English", () => {
    setLocalePreference("en");
    expect(t("Settings")).toBe("Settings");
  });

  it("translates catalog entries and falls back to English for unknown text", () => {
    setLocalePreference("es");
    expect(t("Settings")).toBe(es.Settings);
    expect(t("Not in the catalog")).toBe("Not in the catalog");
  });

  it("interpolates placeholders", () => {
    setLocalePreference("es");
    expect(t("{project} to start", { project: "Foo" })).toBe("Foo para empezar");
  });

  it("splits a sentence around a node", () => {
    setLocalePreference("es");
    const node = 42;
    expect(tAround("What should we build in {project}?", "project", node)).toEqual([
      "¿Qué construimos en ",
      node,
      "?",
    ]);
  });
});
