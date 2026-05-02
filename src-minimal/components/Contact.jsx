import React from "react";
import { MagneticButton } from "./MagneticButton";
import { useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section className="px-6 md:px-16 pt-8 pb-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-20 inset-x-0 h-[300px] gradient-blob pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto">
        <p className="text-lg text-[var(--ink-muted)] max-w-xl mb-10">
          {t("contact.intro")}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <MagneticButton
            href="mailto:abdulsami699@gmail.com"
            strength={0.4}
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--bg)] rounded-full px-7 py-3.5 font-medium hover:opacity-90 transition-opacity"
          >
            abdulsami699@gmail.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </MagneticButton>
        </div>

        <div className="mt-16 pt-8 border-t hairline">
          <p className="font-mono text-xs text-[var(--ink-muted)] mb-4">
            {t("contact.elsewhere")}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="https://github.com/hafabdulsami" target="_blank" rel="noreferrer" className="link-arrow">
              GitHub
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/abdulsami966" target="_blank" rel="noreferrer" className="link-arrow">
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="link-arrow">
              {t("nav.resume")}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        <footer className="mt-20 flex flex-wrap justify-between gap-4 text-xs font-mono text-[var(--ink-faint)]">
          <span>{t("contact.footer")}</span>
          <span>{t("contact.location")}</span>
        </footer>
      </div>
    </section>
  );
}
