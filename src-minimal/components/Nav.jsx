import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function Nav() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(10,10,11,0.7)] border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold tracking-tight text-lg">
          Sammy<span className="text-[var(--accent)]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--ink-muted)]">
          <a href="#work" className="hover:text-[var(--ink)] transition-colors">{t("nav.work")}</a>
          <a href="#about" className="hover:text-[var(--ink)] transition-colors">{t("nav.about")}</a>
          <a href="#skills" className="hover:text-[var(--ink)] transition-colors">{t("nav.skills")}</a>
          <a href="#contact" className="hover:text-[var(--ink)] transition-colors">{t("nav.contact")}</a>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-sm border hairline-strong rounded-full px-4 py-1.5 hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
        >
          {t("nav.resume")}
        </a>
      </div>
    </nav>
  );
}
