import { Fragment, useEffect, type ReactNode } from "react";

import { useLocale } from "./locale";

/**
 * Remounts its subtree when the language changes so every `t()` call
 * re-evaluates. Language changes are rare, so a full remount is simpler than
 * threading the locale through every component.
 */
export function I18nRoot({ children }: { readonly children: ReactNode }) {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return <Fragment key={locale}>{children}</Fragment>;
}
