import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjectsData } from "../data/projectsData";
import { Counter } from "./Counter";

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = useMemo(() => getProjectsData(t), [t]);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-40 px-4 md:px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-8 flex-wrap">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-ink-200 mb-4 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-lime" />
              {t("projects.eyebrow")}
            </motion.p>

            <h2 className="font-display font-bold tracking-tighter text-white leading-[0.95] text-[12vw] sm:text-6xl md:text-7xl lg:text-[80px]">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {t("projects.heading1")}
                </motion.span>
              </span>{" "}
              <span className="inline-block overflow-hidden align-bottom relative">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-lime relative"
                >
                  {t("projects.heading2")}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 right-0 -bottom-1 h-[0.06em] bg-lime origin-left"
                  />
                </motion.span>
              </span>
              {t("projects.heading2Tail")}
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-xs uppercase tracking-widest text-ink-300"
          >
            {t("projects.counter", { n: String(projects.length).padStart(2, "0") })}
          </motion.p>
        </div>

        {/* Project rows */}
        <ul className="border-t border-white/[0.06]">
          {projects.map((project, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isActive = hovered === index;
            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-white/[0.06] relative"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Lime line draw on hover */}
                <motion.div
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 right-0 top-0 h-px bg-lime origin-left z-10"
                />

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid grid-cols-12 gap-3 md:gap-6 items-center py-6 md:py-8"
                >
                  {/* Number */}
                  <motion.div
                    animate={{
                      color: isActive ? "#C6F542" : "#6B6B78",
                    }}
                    transition={{ duration: 0.3 }}
                    className="col-span-2 md:col-span-1 font-mono text-sm md:text-base"
                  >
                    {num}
                  </motion.div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-3 lg:col-span-3">
                    <motion.h3
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="font-display font-bold tracking-tight text-white text-2xl md:text-3xl lg:text-4xl"
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <p className="hidden md:block md:col-span-4 lg:col-span-4 text-sm md:text-base text-ink-100/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="hidden lg:flex col-span-2 flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-white/[0.08] rounded-md text-ink-100/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Year + arrow */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-2 flex items-center justify-end gap-4 md:gap-6">
                    <span className="font-mono text-xs md:text-sm text-ink-300 tabular-nums">
                      {project.year}
                    </span>
                    <motion.span
                      animate={{
                        x: isActive ? 6 : 0,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      className="text-lime text-xl md:text-2xl"
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Mobile description */}
                  <p className="md:hidden col-span-12 text-sm text-ink-100/70 leading-relaxed -mt-2">
                    {project.description}
                  </p>
                  <div className="md:hidden col-span-12 flex flex-wrap gap-1.5 -mt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-white/[0.08] rounded-md text-ink-100/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover preview */}
                  <AnimatePresence>
                    {isActive && project.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: -12, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: -12, rotate: -2 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 w-[280px] h-[180px] pointer-events-none z-10"
                      >
                        <div className="w-full h-full overflow-hidden rounded-lg border border-lime/40 shadow-[0_0_40px_rgba(198,245,66,0.18)]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* Stats strip with animated counters */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-lg overflow-hidden">
          {[
            { v: 12, suffix: "+", l: "products shipped" },
            { v: 4, suffix: "+", l: "yrs in production" },
            { v: 5, suffix: "", l: "stacks mastered" },
            { v: 100, suffix: "%", l: "remote ready" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink-800 px-5 py-5 md:px-6 md:py-6"
            >
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-white">
                <Counter value={s.v} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-200 mt-1.5">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
