import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { MagneticButton } from "./MagneticButton";
import { RotatingBadge } from "./RotatingBadge";

const elsewhereLinks = [
  { label: "GitHub", href: "https://github.com/hafabdulsami" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulsami966/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mian._.sami?igsh=ODU0cjB1OXowaXY4&utm_source=qr",
  },
  { label: "X / Twitter", href: "https://twitter.com/" },
];

// Hour-aware greeting based on visitor's local time
const greetingFor = (h) => {
  if (h >= 5 && h < 12) return "Good morning";
  if (h >= 12 && h < 17) return "Good afternoon";
  if (h >= 17 && h < 22) return "Good evening";
  return "Up late";
};

const useLocalGreeting = () => {
  const [state, setState] = useState({ greeting: "Hey there", time: "" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setState({ greeting: greetingFor(h), time });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return state;
};

export const Contact = () => {
  const { t } = useLanguage();
  const { greeting, time } = useLocalGreeting();

  return (
    <section
      id="contact"
      className="relative pt-28 md:pt-40 px-4 md:px-8 scroll-mt-24 overflow-hidden"
    >
      {/* Aurora wash — subtle drifting blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full opacity-[0.18] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #C6F542, transparent)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -right-32 w-[36rem] h-[36rem] rounded-full opacity-[0.14] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #7C5CFF, transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-ink-200 mb-8 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          {t("contact.eyebrow")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Big closer */}
          <div className="lg:col-span-8 relative">
            {/* Oversized translucent "?" flourish */}
            <span
              aria-hidden
              className="hidden md:block absolute -top-10 -left-4 lg:-left-10 font-display font-bold text-lime/[0.06] leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(280px, 32vw, 480px)" }}
            >
              ?
            </span>

            <h2 className="relative font-display font-bold tracking-tighter text-white leading-[0.95] text-[14vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[8vw] xl:text-[128px]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {t("contact.heading1")}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {t("contact.heading2")}{" "}
                  <span className="relative inline-block">
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: [-2, 2, -1, 0] }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                      className="text-lime italic font-display inline-block"
                    >
                      {t("contact.heading2Accent")}
                    </motion.span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 right-0 -bottom-1 h-[0.06em] bg-lime origin-left"
                    />
                  </span>
                  {t("contact.heading2Tail")}
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-8 max-w-xl text-base md:text-lg text-ink-100/85 leading-relaxed"
            >
              {t("contact.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <MagneticButton
                as="a"
                href={`mailto:${t("contact.emailMe")}`}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-lime text-ink-800 font-mono text-xs md:text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors"
              >
                {t("contact.emailMe")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full border border-white/[0.12] text-white font-mono text-xs md:text-sm uppercase tracking-widest hover:border-lime hover:text-lime transition-colors"
              >
                {t("contact.schedule")}
              </MagneticButton>
            </motion.div>

            {/* Slot indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative mt-8 max-w-md"
            >
              <div className="flex items-center justify-between mb-2 font-mono text-[11px] uppercase tracking-widest">
                <span className="text-ink-200">Q2 2024 — slots</span>
                <span className="text-lime">2 / 3 open</span>
              </div>
              <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 2 / 3 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-lime origin-left rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Right column — badge + greeting + elsewhere */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 lg:pl-8 lg:border-s lg:border-white/[0.06] flex flex-col gap-10"
          >
            {/* Rotating badge */}
            <div className="flex justify-center lg:justify-start">
              <RotatingBadge
                href={`mailto:${t("contact.emailMe")}`}
                ariaLabel={`Email ${t("contact.emailMe")}`}
                text="EMAIL SAMMY · AVAILABLE NOW · "
                size={220}
              />
            </div>

            {/* Live greeting card */}
            <div className="rounded-xl border border-white/[0.08] bg-ink-700/60 backdrop-blur-sm p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-200 mb-3">
                // your timezone
              </p>
              <p className="font-display text-2xl font-bold tracking-tight text-white leading-tight">
                {greeting}.
              </p>
              <p className="mt-1 text-sm text-ink-100/75">
                It's <span className="text-lime tabular-nums">{time || "--:--"}</span> where you are. Reply within 24 hrs, usually faster.
              </p>
            </div>

            {/* Elsewhere */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-200 mb-4">
                {t("contact.elsewhere")}
              </p>
              <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {elsewhereLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 font-mono text-xs uppercase tracking-widest text-white hover:text-lime transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-ink-300 group-hover:text-lime transition-colors">
                          0{i + 1}
                        </span>
                        <span>{link.label}</span>
                      </span>
                      <span className="text-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 md:mt-32 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 relative"
        >
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-ink-300">
            {t("footer.built")}
          </p>
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-widest text-ink-300">
            {t("footer.location")}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime/30 bg-lime/[0.04]">
            <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-lime" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
              {t("status.available")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
