import React, { useEffect, useRef, useState, useMemo } from "react";
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
import { LanguageSwitcher } from "./components/LanguageSwitcher";

// Import data
import { getProjectsData } from "./data/projectsData";
import { getSkillsData } from "./data/skillsData";

// Import language hook
import { useLanguage } from "./i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Main App Component
function App() {
  const { t, language, dir } = useLanguage();
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const currentXRef = useRef(0);
  const [isSafariMobile, setIsSafariMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const isVerticalScroll = useRef(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const projectsData = useMemo(() => getProjectsData(t), [t]);
  const skillsData = useMemo(() => getSkillsData(t), [t]);

  const totalSlides = 1 + projectsData.length + skillsData.length + 1;

  // Map nav section names to slide indices
  const sectionToSlide = useMemo(() => ({
    home: 0,
    projects: 1,
    skills: 1 + projectsData.length,
    contact: 1 + projectsData.length + skillsData.length,
  }), [projectsData.length, skillsData.length]);

  const navigateToSection = (section) => {
    const slideIndex = sectionToSlide[section];
    if (slideIndex === undefined) return;

    if (isMobile) {
      setCurrentSlide(slideIndex);
    } else {
      const targetX = slideIndex * window.innerWidth;
      currentXRef.current = targetX;
      gsap.to(containerRef.current, {
        x: -targetX,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    // Detect mobile and Safari mobile
    const detectMobile = () => {
      const ua = navigator.userAgent;
      const isSafari =
        /Safari/.test(ua) && !/Chrome/.test(ua) && !/Edge/.test(ua);
      const mobile =
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/.test(
          ua,
        ) ||
        (navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform)) ||
        window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsSafariMobile(isSafari && mobile);
    };
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  // Mobile swipe navigation — only intercepts horizontal swipes,
  // vertical touch movement is left to native scroll inside each slide
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchEndX.current = e.touches[0].clientX;
      isVerticalScroll.current = false;
      setShowSwipeHint(false);
    };

    const handleTouchMove = (e) => {
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;

      // Once we decide it's vertical, let native scroll handle it
      if (!isVerticalScroll.current && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
        isVerticalScroll.current = true;
      }

      if (isVerticalScroll.current) return;

      // Horizontal drag — prevent native scroll and show preview
      e.preventDefault();
      touchEndX.current = e.touches[0].clientX;
      setSwipeOffset(-dx * 0.3);
    };

    const handleTouchEnd = () => {
      if (isVerticalScroll.current) {
        setSwipeOffset(0);
        return;
      }

      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides - 1) {
          setCurrentSlide(currentSlide + 1);
        } else if (diff < 0 && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
      setSwipeOffset(0);
    };

    const container = mobileContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isMobile, currentSlide, totalSlides]);

  // Animate mobile slide transitions
  useEffect(() => {
    if (!isMobile || !mobileContainerRef.current) return;

    gsap.to(mobileContainerRef.current, {
      x: -currentSlide * window.innerWidth + swipeOffset,
      duration: swipeOffset !== 0 ? 0 : 0.5,
      ease: swipeOffset !== 0 ? "none" : "power2.out",
    });
  }, [currentSlide, isMobile, swipeOffset]);

  useEffect(() => {
    // Skip GSAP on mobile
    if (isMobile) return;

    // Desktop: Horizontal wheel scroll
    const handleWheelScroll = (e) => {
      e.preventDefault();

      const container = containerRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - window.innerWidth;

      // Use horizontal wheel or shift+wheel for horizontal scroll
      const deltaX = e.deltaX || (e.shiftKey ? e.deltaY : 0);
      const deltaY = e.shiftKey ? 0 : e.deltaY;

      // Prefer horizontal wheel movement, fallback to vertical with shift
      const scrollDelta = deltaX || deltaY;

      currentXRef.current += scrollDelta;
      currentXRef.current = Math.max(0, Math.min(currentXRef.current, maxScroll));

      gsap.to(container, {
        x: -currentXRef.current,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const wrapper = document.querySelector(".horizontal-wrapper");
    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheelScroll, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheelScroll);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isSafariMobile]);

  return (
    <div dir={dir} className="bg-[#2C2219] text-vintage-cream">
      <AnimatedGrid />
      <CursorFollower />
      <LanguageSwitcher />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation onNavigate={navigateToSection} />

        {/* Horizontal scrolling wrapper */}
        {isMobile ? (
          // Mobile: Horizontal swipe with vertical scroll inside each slide
          <div className="relative overflow-hidden" style={{ height: "100dvh" }}>
            {/* Swipe instruction hint */}
            {showSwipeHint && currentSlide === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
              >
                <div className="bg-[#2C2219]/90 backdrop-blur-md border-2 border-primary/50 rounded-lg px-6 py-4 text-center">
                  <div className="flex items-center gap-3 text-vintage-beige">
                    <motion.div
                      animate={{ x: [-10, 10, -10] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="text-2xl"
                    >
                      &larr; &rarr;
                    </motion.div>
                    <p className="font-display text-sm">{t("swipe.hint")}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div
              ref={mobileContainerRef}
              className="flex will-change-transform"
              style={{
                width: `${totalSlides * 100}vw`,
                height: "calc(100dvh - 4.5rem)",
              }}
            >
              {/* Each slide: fixed width, allows vertical overflow scroll */}
              <div className="flex-shrink-0 w-screen overflow-y-auto">
                <Hero />
              </div>

              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-screen overflow-y-auto"
                >
                  <ProjectSlide project={project} index={index} />
                </div>
              ))}

              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  id={index === 0 ? "skills" : undefined}
                  className="flex-shrink-0 w-screen overflow-y-auto"
                >
                  <SkillSlide skill={skill} index={index} />
                </div>
              ))}

              <div className="flex-shrink-0 w-screen overflow-y-auto">
                <Contact />
              </div>
            </div>

            {/* Page indicators */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#2C2219]/95 backdrop-blur-sm py-3 px-4 border-t-2 border-primary/50 z-30">
              <div className="space-y-1.5">
                <div className="flex justify-center gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-primary w-6"
                          : "bg-vintage-beige/40"
                      }`}
                      aria-label={t("aria.goToSlide", { n: index + 1 })}
                    />
                  ))}
                </div>
                <p className="text-center text-vintage-beige/60 text-xs font-display">
                  {t("swipe.instruction")}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop & other browsers: Horizontal wheel scroll
          <div className="horizontal-wrapper overflow-hidden h-screen">
            <div
              ref={containerRef}
              className="flex will-change-transform h-full"
            >
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

        {!isMobile && (
          <footer className="py-4 md:py-6 px-4 md:px-6 border-t-2 border-primary/50 z-30 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center text-vintage-beige font-display text-sm md:text-base">
                <p>{t("footer.text")} &rarr;</p>
              </div>
            </div>
          </footer>
        )}
      </motion.div>
    </div>
  );
}

export default App;
