import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export const Navigation = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), section: "home" },
    { label: t("nav.projects"), section: "projects" },
    { label: t("nav.skills"), section: "skills" },
    { label: t("nav.contact"), section: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const ids = ["home", "projects", "skills", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-800/80 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Wordmark with lime dot */}
        <button
          onClick={() => onNavigate?.("home")}
          className="group flex items-center gap-2 cursor-pointer overflow-hidden"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-2 h-2 rounded-full bg-lime pulse-lime"
          />
          <span className="font-display text-base md:text-lg font-bold tracking-tighter text-white inline-flex">
            {"SAMMY".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + i * 0.025,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = active === item.section;
            return (
              <button
                key={item.section}
                onClick={() => onNavigate?.(item.section)}
                className="group relative font-mono text-xs uppercase tracking-widest cursor-pointer py-1"
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-lime" : "text-ink-200 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-lime"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime/30 bg-lime/[0.04]">
            <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-lime" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
              {t("status.available")}
            </span>
          </div>
          <motion.a
            href="/resume.pdf"
            download="Abdul Sami Resume - Full Stack Engineer.pdf"
            whileHover={{ y: -1 }}
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-md border border-white/[0.12] text-white hover:border-lime hover:text-lime transition-colors"
          >
            {t("nav.hireMe")}
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 z-50"
          aria-label={t("aria.toggleMenu")}
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            className="w-5 h-4 flex flex-col justify-between"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              className="w-full h-[1.5px] bg-white block origin-left"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-full h-[1.5px] bg-white block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              className="w-full h-[1.5px] bg-white block origin-left"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-ink-800/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="flex flex-col py-4 px-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onNavigate?.(item.section);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-start font-mono text-xs uppercase tracking-widest transition-colors py-3 border-b border-white/[0.06] ${
                    active === item.section ? "text-lime" : "text-ink-100 hover:text-lime"
                  }`}
                >
                  <span className={active === item.section ? "text-lime mr-3" : "text-ink-300 mr-3"}>
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf"
                download="Abdul Sami Resume - Full Stack Engineer.pdf"
                className="mt-4 font-mono text-xs uppercase tracking-widest px-4 py-3 rounded-md border border-lime/40 text-lime text-center"
              >
                {t("nav.hireMe")} ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
