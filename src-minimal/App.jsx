import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { SectionTitle } from "./components/SectionTitle";
import { CursorFollower } from "./components/CursorFollower";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { LoadingScreen } from "./components/LoadingScreen";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t, dir } = useLanguage();
  const [loading, setLoading] = useState(true);

  return (
    <div dir={dir} className="bg-[var(--bg)] text-[var(--ink)] min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CursorFollower />
      <LanguageSwitcher />
      <Nav />
      <main>
        <Hero />

        <SectionTitle
          id="work"
          eyebrow={t("chapters.projectsEyebrow")}
          title={t("chapters.projectsTitle")}
        />
        <Projects />

        <SectionTitle
          id="about"
          eyebrow={t("chapters.aboutEyebrow")}
          title={t("chapters.aboutTitle")}
        />
        <About />

        <SectionTitle
          id="skills"
          eyebrow={t("chapters.skillsEyebrow")}
          title={t("chapters.skillsTitle")}
        />
        <Skills />

        <SectionTitle
          id="contact"
          eyebrow={t("chapters.contactEyebrow")}
          title={t("chapters.contactTitle")}
        />
        <Contact />
      </main>
    </div>
  );
}
