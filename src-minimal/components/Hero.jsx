import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";
import { MagneticButton } from "./MagneticButton";
import { useLanguage } from "../i18n/LanguageContext";

const NAME = "SAMMY";

function SlidingChars({ text }) {
  return (
    <span className="inline-flex">
      {text.split("").map((ch, i) => (
        <span key={i} className="char-mask">
          <span
            className="char-inner"
            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
          >
            {ch === " " ? " " : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-5 md:px-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-10 md:top-20 h-[360px] md:h-[520px] gradient-blob pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[10px] md:text-xs text-[var(--ink-muted)] mb-4 md:mb-6"
          >
            {t("hero.eyebrow")}
          </motion.p>
        </div>

        <h1 className="font-display font-semibold tracking-tightest text-[26vw] md:text-[14rem] leading-[0.9] mb-2">
          <SlidingChars text={NAME} />
        </h1>

        <div style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base md:text-2xl text-[var(--ink-muted)] leading-relaxed mt-6 md:mt-10"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#work"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--bg)] rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("hero.viewWork")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-2 border hairline-strong rounded-full px-6 py-3 text-sm font-medium hover:bg-[var(--bg-soft)] transition-colors"
          >
            {t("hero.getInTouch")}
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 md:mt-12 flex items-center gap-2 text-xs md:text-sm text-[var(--ink-muted)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          {t("hero.available")}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-16 md:mt-24 border-y hairline"
      >
        <Marquee
          items={[
            "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
            "Tailwind", "Solidity", "Solana", "Prisma", "MongoDB",
          ]}
        />
      </motion.div>
    </section>
  );
}
