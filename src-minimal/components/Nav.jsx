import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Nav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#work", label: t("nav.work") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(10,10,11,0.7)] border-b hairline">
        <div className="max-w-[1400px] mx-auto px-5 md:px-16 h-14 md:h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-display font-semibold tracking-tight text-base md:text-lg"
          >
            Sammy<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--ink-muted)]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--ink)] transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex text-xs md:text-sm border hairline-strong rounded-full px-3.5 md:px-4 py-1.5 hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
            >
              {t("nav.resume")}
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border hairline-strong"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block w-4 h-px bg-[var(--ink)]"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                className="block w-4 h-px bg-[var(--ink)]"
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-14 z-40 bg-[var(--bg)] flex flex-col"
          >
            <div className="flex flex-col px-6 pt-12 pb-10 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-5xl tracking-tightest border-b hairline py-5 hover:text-[var(--accent)] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--bg)] rounded-full px-5 py-3.5 text-sm font-medium"
              >
                {t("nav.resume")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </motion.a>
            </div>

            <div className="mt-auto px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-faint)] flex justify-between">
              <span>// SAMMY</span>
              <span>Lahore · GMT+5</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
