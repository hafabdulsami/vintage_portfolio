import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem("portfolio-lang") || "en";
    } catch {
      return "en";
    }
  });

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-lang", language);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language, dir]);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
    }
  }, []);

  const t = useCallback(
    (key, params) => {
      const keys = key.split(".");
      let value = keys.reduce((obj, k) => obj?.[k], translations[language]);
      if (value === undefined || value === null) {
        // Fallback to English
        value = keys.reduce((obj, k) => obj?.[k], translations.en);
      }
      if (typeof value !== "string") return key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, v);
        });
      }
      return value;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
