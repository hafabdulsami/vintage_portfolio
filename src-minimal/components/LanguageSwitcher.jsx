import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "it", label: "Italiano", short: "IT" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === language);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="fixed bottom-5 left-5 md:bottom-6 md:left-6 z-[9997]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full mb-2 left-0 bg-[var(--bg-card)] border hairline-strong rounded-xl overflow-hidden shadow-2xl shadow-black/50 min-w-[170px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2.5 text-left font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-colors whitespace-nowrap ${
                  language === lang.code
                    ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "text-[var(--ink-muted)] hover:bg-white/[0.04] hover:text-[var(--ink)]"
                }`}
              >
                <span className="font-semibold w-6">{lang.short}</span>
                <span className="normal-case tracking-normal text-[11px]">
                  {lang.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full bg-[var(--bg-card)] border hairline-strong text-[var(--ink)] font-mono text-[10px] uppercase tracking-widest flex items-center justify-center hover:border-[var(--accent)]/60 hover:text-[var(--accent)] transition-colors"
        aria-label={t("aria.changeLanguage")}
      >
        {current?.short}
      </motion.button>
    </div>
  );
};
