"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Dict } from "./types";
import { th } from "./th";
import { en } from "./en";

type Locale = "th" | "en";

interface I18nContextValue {
  locale: Locale;
  t: Dict;
  toggle: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "th",
  t: th,
  toggle: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("th");

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "th" ? "en" : "th"));
  }, []);

  const t = locale === "th" ? th : en;

  return (
    <I18nContext.Provider value={{ locale, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
