import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import components
import { AnimatedGrid } from "./components/AnimatedGrid";
import { CursorFollower } from "./components/CursorFollower";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProjectSlide } from "./components/ProjectSlide";
import { SkillSlide } from "./components/SkillSlide";
import { Contact } from "./components/Contact";

// Import data
import { projectsData } from "./data/projectsData";
import { skillsData } from "./data/skillsData";

gsap.registerPlugin(ScrollTrigger);

// Main App Component
function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const sections = gsap.utils.toArray(".horizontal-section");

      if (sections.length > 0) {
        ScrollTrigger.create({
          trigger: ".horizontal-wrapper",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + (containerRef.current.scrollWidth - window.innerWidth),
          onUpdate: (self) => {
            gsap.to(containerRef.current, {
              x:
                -self.progress *
                (containerRef.current.scrollWidth - window.innerWidth),
              duration: 0,
            });
          },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#2a2520] text-vintage-cream">
      <AnimatedGrid />
      <CursorFollower />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />

        {/* Horizontal scrolling wrapper */}
        <div className="horizontal-wrapper overflow-hidden">
          <div ref={containerRef} className="flex will-change-transform ">
            <div className="horizontal-section flex-shrink-0 w-screen h-screen overflow-y-auto no-scrollbar">
              <Hero />
            </div>

            {/* Individual Project Slides */}
            {projectsData.map((project, index) => (
              <div
                key={index}
                id={index === 0 ? "projects" : undefined}
                className="horizontal-section flex-shrink-0 w-screen h-screen overflow-y-auto no-scrollbar"
              >
                <ProjectSlide project={project} index={index} />
              </div>
            ))}

            {/* Individual Skill Category Slides */}
            {skillsData.map((skill, index) => (
              <div
                key={index}
                id={index === 0 ? "skills" : undefined}
                className="horizontal-section flex-shrink-0 w-screen h-screen overflow-y-auto no-scrollbar"
              >
                <SkillSlide skill={skill} index={index} />
              </div>
            ))}

            <div className="horizontal-section flex-shrink-0 w-screen min-h-screen">
              <Contact />
            </div>
          </div>
        </div>

        <footer className="relative py-6 md:py-8 px-4 md:px-6 border-t-2 border-primary/30 z-20">
          <div className="max-w-7xl mx-auto text-center text-vintage-beige font-display text-sm md:text-base">
            <p>© 2024 - Scroll Down for Vintage Vibes →</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
