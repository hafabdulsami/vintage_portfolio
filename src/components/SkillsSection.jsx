import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { Counter } from "./Counter";

const stackBlocks = (t) => [
  {
    glyph: "◇",
    label: t("skills.frontend"),
    items: ["React", "Next.js", "Svelte", "SvelteKit", "Vue 3", "Nuxt 3", "TypeScript"],
  },
  {
    glyph: "⚙",
    label: t("skills.backend"),
    items: ["Node.js", "Express", "Feathers.js", "tRPC", "GraphQL", "REST"],
  },
  {
    glyph: "▤",
    label: t("skills.database"),
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "MySQL"],
  },
  {
    glyph: "⚒",
    label: t("skills.toolsDevops"),
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Playwright"],
  },
];

export const SkillsSection = () => {
  const { t } = useLanguage();
  const blocks = useMemo(() => stackBlocks(t), [t]);

  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 px-4 md:px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — About */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-ink-200 mb-6 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-lime" />
              {t("about.eyebrow")}
            </motion.p>

            <h2 className="font-display font-bold tracking-tighter text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {t("about.heading1")}
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-bottom relative">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-lime relative"
                >
                  {t("about.heading2")}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 right-0 -bottom-1 h-[0.06em] bg-lime origin-left"
                  />
                </motion.span>
              </span>
              {t("about.heading2Tail")}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-2xl text-base md:text-lg text-ink-100/85 leading-relaxed"
            >
              {t("about.paragraph")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-white"
            >
              {[
                { v: 4, suffix: "+", l: t("about.stats.years") },
                { v: 12, suffix: "+", l: t("about.stats.products") },
                { v: 5, suffix: "", l: t("about.stats.languages") },
              ].map((s, i, arr) => (
                <div key={s.l} className="flex items-center gap-8">
                  <div>
                    <div className="font-display text-3xl font-bold tracking-tighter">
                      <Counter value={s.v} suffix={s.suffix} />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-200 mt-1">
                      {s.l}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="hidden sm:block w-px h-10 bg-lime/40" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stack panel */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-ink-700 border border-white/[0.06] rounded-xl p-6 md:p-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-200 mb-6">
              {t("about.stack")}
            </p>
            <div className="space-y-6 divide-y divide-white/[0.06]">
              {blocks.map((block, i) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={i === 0 ? "" : "pt-6"}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      animate={{ rotate: [0, 8, 0, -8, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                      className="text-lime text-lg inline-block"
                    >
                      {block.glyph}
                    </motion.span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                      {block.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {block.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: i * 0.1 + j * 0.04 }}
                        whileHover={{ y: -2 }}
                        className="font-mono text-[11px] px-2.5 py-1 border border-white/[0.1] rounded-md text-ink-100/85 hover:border-lime/50 hover:text-lime transition-colors cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
