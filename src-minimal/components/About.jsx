import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AvatarOrb } from "./AvatarOrb";
import { Counter } from "./Counter";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const middleY = useTransform(scrollYProgress, [0, 1], ["25%", "-75%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  const verticalItems = t("about.verticalItems") || [];
  const loop = [...verticalItems, ...verticalItems, ...verticalItems];

  return (
    <section ref={ref} className="px-6 md:px-16 pt-8 pb-32">
      <div
        className="max-w-[1400px] mx-auto grid gap-6 md:gap-8 items-stretch"
        style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-7 col-span-full md:col-auto"
          style={{ gridColumn: "span 10 / span 10" }}
        >
          <p className="font-mono text-xs text-[var(--ink-muted)]">
            {t("about.eyebrow")}
          </p>

          <p className="text-xl md:text-2xl text-[var(--ink)] leading-[1.5]">
            {t("about.p1")}
          </p>

          <p className="text-base md:text-lg text-[var(--ink-muted)] leading-[1.7]">
            {t("about.p2")}
          </p>

          <p className="text-base md:text-lg text-[var(--ink-muted)] leading-[1.7]">
            {t("about.p3")}
          </p>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t hairline">
            <div className="pt-6">
              <div className="font-display text-3xl md:text-4xl">
                <Counter value={3} suffix="+" />
              </div>
              <div className="text-xs text-[var(--ink-muted)] mt-1 font-mono">{t("about.yrsLabel")}</div>
            </div>
            <div className="pt-6">
              <div className="font-display text-3xl md:text-4xl">
                <Counter value={5} />
              </div>
              <div className="text-xs text-[var(--ink-muted)] mt-1 font-mono">{t("about.productsLabel")}</div>
            </div>
            <div className="pt-6">
              <div className="font-display text-3xl md:text-4xl">∞</div>
              <div className="text-xs text-[var(--ink-muted)] mt-1 font-mono">{t("about.curiosityLabel")}</div>
            </div>
          </div>
        </motion.div>

        <div
          className="hidden md:block relative"
          style={{ gridColumn: "span 4 / span 4" }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[var(--line)]" />

            <motion.div
              style={{ y: middleY }}
              className="[writing-mode:vertical-rl] rotate-180 font-mono text-sm uppercase tracking-[0.4em] text-[var(--ink-muted)] flex will-change-transform"
            >
              {loop.map((item, i) => (
                <span key={i} className="inline-flex items-center px-8">
                  {item}
                  <span className="text-[var(--accent)] ml-8">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div
          className="hidden md:flex items-center justify-center"
          style={{ gridColumn: "span 10 / span 10" }}
        >
          <motion.div style={{ y: rightY }} className="w-full">
            <AvatarOrb />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden col-span-full"
        >
          <AvatarOrb />
        </motion.div>
      </div>
    </section>
  );
}
