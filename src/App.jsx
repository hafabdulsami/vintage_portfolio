import React, { useEffect, useRef, useState } from "react";
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
  const [isSafariMobile, setIsSafariMobile] = useState(false);

  useEffect(() => {
    // Detect Safari mobile specifically
    const detectSafariMobile = () => {
      const ua = navigator.userAgent;
      const isSafari =
        /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edge/.test(ua);
      const isMobile =
        /iPhone|iPad|iPod/.test(ua) ||
        (navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform));
      setIsSafariMobile(isSafari && isMobile);
    };
    detectSafariMobile();
  }, []);

  useEffect(() => {
    // Skip GSAP on Safari mobile
    if (isSafariMobile) return;
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
  }, [isSafariMobile]);

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
        {isSafariMobile ? (
          // Safari Mobile: Native horizontal scroll
          <div
            className="horizontal-wrapper overflow-x-scroll overflow-y-hidden h-screen snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex h-full" style={{ width: "max-content" }}>
              <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto">
                <Hero />
              </div>

              {projectsData.map((project, index) => (
                <div
                  key={index}
                  id={index === 0 ? "projects" : undefined}
                  className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto"
                >
                  <ProjectSlide project={project} index={index} />
                </div>
              ))}

              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  id={index === 0 ? "skills" : undefined}
                  className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto"
                >
                  <SkillSlide skill={skill} index={index} />
                </div>
              ))}

              <div className="flex-shrink-0 w-screen min-h-screen snap-start overflow-y-auto">
                <Contact />
              </div>
            </div>
          </div>
        ) : (
          // Desktop & other browsers: GSAP horizontal scroll
          <div className="horizontal-wrapper overflow-hidden">
            <div ref={containerRef} className="flex will-change-transform">
              <div className="horizontal-section flex-shrink-0 w-screen h-screen overflow-y-auto no-scrollbar">
                <Hero />
              </div>

              {projectsData.map((project, index) => (
                <div
                  key={index}
                  id={index === 0 ? "projects" : undefined}
                  className="horizontal-section flex-shrink-0 w-screen h-screen overflow-y-auto no-scrollbar"
                >
                  <ProjectSlide project={project} index={index} />
                </div>
              ))}

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
        )}

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
