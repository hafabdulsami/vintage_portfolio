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
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === language);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 left-4 md:bottom-6 md:left-6 z-[9997]"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full mb-2 left-0 bg-ink-700 border border-white/[0.08] rounded-lg overflow-hidden shadow-xl shadow-black/40 min-w-[160px]"
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
                    ? "bg-lime/[0.08] text-lime"
                    : "text-ink-100/85 hover:bg-white/[0.04] hover:text-white"
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
        className="w-10 h-10 rounded-full bg-ink-700 border border-white/[0.08] text-ink-100 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center hover:border-lime/40 hover:text-lime transition-colors"
        aria-label="Change language"
      >
        {current?.short}
      </motion.button>
    </div>
  );
};
