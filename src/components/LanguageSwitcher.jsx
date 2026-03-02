import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Fran\u00e7ais", short: "FR" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", short: "AR" },
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
      className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-[9997]"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 left-0 bg-[#3B2F22] border-2 border-primary/50 rounded-md overflow-hidden shadow-xl shadow-primary/20"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left font-display text-sm flex items-center gap-3 transition-colors whitespace-nowrap ${
                  language === lang.code
                    ? "bg-primary text-[#2C2219] font-bold"
                    : "text-vintage-cream hover:bg-primary/20"
                }`}
              >
                <span className="font-bold w-6">{lang.short}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full bg-[#3B2F22] border-2 border-primary/50 text-primary font-bold font-display text-xs flex items-center justify-center shadow-lg shadow-primary/20 hover:border-primary transition-colors"
        aria-label="Change language"
      >
        {current?.short}
      </motion.button>
    </div>
  );
};
