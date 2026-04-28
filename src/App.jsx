import React from "react";
import { motion, useScroll } from "framer-motion";

import { AnimatedGrid } from "./components/AnimatedGrid";
import { CursorFollower } from "./components/CursorFollower";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { Contact } from "./components/Contact";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { dir } = useLanguage();
  const { scrollYProgress } = useScroll();

  const navigateToSection = (section) => {
    const id = section === "home" ? "home" : section;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div dir={dir} className="bg-ink-800 text-ink-100 min-h-screen relative">
      <AnimatedGrid />
      <CursorFollower />
      <LanguageSwitcher />

      {/* Top scroll progress bar — bound directly to native scroll, no spring */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-lime origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <Navigation onNavigate={navigateToSection} />

        <main>
          <Hero onNavigate={navigateToSection} />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <Contact />
        </main>
      </motion.div>
    </div>
  );
}

export default App;
