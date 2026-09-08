import type { ReactNode } from "react";

import { es } from "./es";
import { getCurrentLocale, type AppLocale } from "./locale";

type Catalog = Readonly<Record<string, string>>;

const CATALOGS: Readonly<Record<Exclude<AppLocale, "en">, Catalog>> = { es };

export type TranslationValues = Readonly<Record<string, string | number>>;

/**
 * Translates an English UI string into the current locale.
 *
 * The English text is the key. Anything missing from the catalog renders in
 * English, so upstream copy changes degrade to untranslated text instead of
 * breaking, and the catalog stays the only file this fork owns.
 * `{name}` placeholders are filled from `values`.
 */
export function t(text: string, values?: TranslationValues): string {
  const locale = getCurrentLocale();
  const translated = locale === "en" ? text : (CATALOGS[locale][text] ?? text);
  return values ? interpolate(translated, values) : translated;
}

function interpolate(template: string, values: TranslationValues): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}

/** `t` for optional React text: leaves non-string content untouched. */
export function tNode<T>(content: T): T | string {
  return typeof content === "string" ? t(content) : content;
}

/**
 * Translates a sentence that wraps a React node, e.g.
 * `tAround("What should we build in {project}?", "project", <ProjectMenu />)`.
 * Returns the text before, the node, and the text after, so word order can
 * differ per language.
 */
export function tAround(text: string, name: string, node: ReactNode): ReactNode[] {
  const marker = `{${name}}`;
  const translated = t(text);
  const index = translated.indexOf(marker);
  if (index === -1) return [translated, node];
  return [translated.slice(0, index), node, translated.slice(index + marker.length)];
}
