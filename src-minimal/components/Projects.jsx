import React from "react";
import { motion } from "framer-motion";
import { getProjects } from "../data/projects";
import { Marquee } from "./Marquee";
import { useLanguage } from "../i18n/LanguageContext";

function ProjectRow({ project, t }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <a href={project.link} target="_blank" rel="noreferrer" className="block">
        <div className="relative overflow-hidden bg-[var(--bg-soft)] aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute top-5 right-5 bg-[var(--bg)]/90 backdrop-blur text-xs font-mono px-3 py-1 rounded-full border hairline">
            {project.year}
          </div>
        </div>
      </a>

      <div className="border-y border-white/30 bg-[var(--bg)] flex items-stretch">
        <div className="hidden md:flex shrink-0 px-4 md:px-6 items-center border-r border-white/30">
          <span className="font-mono text-xs md:text-sm font-bold tracking-wider uppercase whitespace-nowrap text-[var(--ink)]">
            {t("projects.builtWith")}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <Marquee
            items={[
              ...project.tech,
              project.tagline,
              ...project.tech,
              t("projects.live"),
            ]}
          />
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={t("projects.viewProject")}
          className="shrink-0 px-3 md:px-6 flex items-center gap-2 border-l border-white/30 whitespace-nowrap font-mono text-xs md:text-sm font-bold bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--bg)] hover:text-[var(--ink)] transition-colors"
        >
          <span className="hidden md:inline">{t("projects.viewProject")}</span>
          <svg className="md:hidden" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>

      <div className="mt-8 md:mt-12 max-w-3xl mx-auto text-center space-y-4 md:space-y-6 px-5 md:px-8">
        {project.description.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] md:text-xl text-[var(--ink)] leading-[1.6] md:leading-[1.55]"
          >
            {para}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-16 text-center px-5 md:px-8"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="block group/title"
        >
          <h3 className="font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-5xl md:text-8xl group-hover/title:text-[var(--accent)] transition-colors break-words">
            {project.title}
            <span className="inline-block ml-2 md:ml-4 align-middle text-[0.4em] text-[var(--ink-muted)] group-hover/title:text-[var(--accent)] transition-all group-hover/title:translate-x-2 group-hover/title:-translate-y-2">
              ↗
            </span>
          </h3>
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 md:mt-8 text-sm md:text-base text-[var(--ink)] font-medium border-b border-[var(--ink)] pb-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          {t("projects.viewProject")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </motion.div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const projects = getProjects(t);

  return (
    <section className="pt-6 md:pt-8 pb-20 md:pb-32">
      <div>
        <div className="mb-12 md:mb-20 max-w-md px-5 md:px-16">
          <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed">
            {t("projects.intro")}
          </p>
        </div>

        <div className="space-y-24 md:space-y-48">
          {projects.map((p) => (
            <ProjectRow key={p.key} project={p} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
