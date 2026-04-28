import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { MagneticButton } from "./MagneticButton";

const HeroCanvas = lazy(() =>
  import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas }))
);

const techStack = [
  "REACT",
  "NEXT.JS",
  "NODE",
  "POSTGRES",
  "TYPESCRIPT",
  "AWS",
  "SVELTE",
  "DOCKER",
  "GRAPHQL",
  "TAILWIND",
  "PRISMA",
  "VITE",
];

const useLahoreTime = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      try {
        const now = new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setTime(now);
      } catch {
        setTime("");
      }
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

// Word with mask-up reveal
const RevealWord = ({ children, delay = 0, className = "" }) => (
  <span className={`inline-block overflow-hidden align-bottom ${className}`}>
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  </span>
);

const RevealLine = ({ children, delay = 0 }) => {
  const words = String(children).split(" ");
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {words.map((w, i) => (
        <RevealWord key={i} delay={delay + i * 0.04}>
          {w}
        </RevealWord>
      ))}
    </span>
  );
};

export const Hero = ({ onNavigate }) => {
  const { t } = useLanguage();
  const time = useLahoreTime();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-32 overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left — main headline */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-ink-200 mb-8 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-lime" />
              {t("hero.eyebrow")}
            </motion.p>

            <h1 className="font-display font-bold tracking-tighter text-white leading-[0.95] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[112px]">
              <span className="block">
                <RevealLine delay={0.1}>{t("hero.line1")}</RevealLine>
              </span>
              <span className="block mt-1">
                <span className="inline-block overflow-hidden align-bottom relative">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-lime relative"
                  >
                    {t("hero.line2")}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 right-0 -bottom-1 h-[0.06em] bg-lime origin-left"
                    />
                  </motion.span>
                </span>
                <RevealWord delay={0.55}>{t("hero.line2Tail")}</RevealWord>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 max-w-xl text-base md:text-lg text-ink-100/85 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton
                onClick={() => onNavigate?.("projects")}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-lime text-ink-800 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
              >
                {t("hero.seeWork")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </MagneticButton>
              <MagneticButton
                onClick={() => onNavigate?.("contact")}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/[0.12] text-white font-mono text-xs uppercase tracking-widest hover:border-lime hover:text-lime transition-colors"
              >
                {t("hero.letsTalk")}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — currently panel */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pl-8 lg:border-s lg:border-white/[0.06]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-200 mb-4">
              {t("hero.currently")}
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                t("hero.currently1"),
                t("hero.currently2"),
                t("hero.currently3"),
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-ink-100/85"
                >
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="text-lime mt-0.5"
                  >
                    →
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-32 md:bottom-36 left-0 right-0 px-4 md:px-8"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink-200">
            <span className="flex items-center gap-3">
              <span>{t("hero.scroll")}</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="text-lime"
              >
                ↓
              </motion.span>
              <span className="text-ink-300">01 / 04</span>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-lime" />
              <span>Lahore · {time || "--:--"}</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-0 left-0 right-0 border-t border-b border-white/[0.06] bg-ink-800/40 backdrop-blur-sm"
      >
        <div className="overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-ink-100/60 inline-flex items-center gap-12"
              >
                {tech}
                <span className="text-lime">◇</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
