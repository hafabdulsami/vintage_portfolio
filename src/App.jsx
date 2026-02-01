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
  const mobileContainerRef = useRef(null);
  const [isSafariMobile, setIsSafariMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

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

  // Mobile swipe navigation
  useEffect(() => {
    if (!isMobile) return;

    const totalSlides = 1 + projectsData.length + skillsData.length + 1;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      setShowSwipeHint(false);
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
      const diff = touchStartX.current - e.touches[0].clientX;
      setSwipeOffset(-diff * 0.3); // Show drag preview
    };

    const handleTouchEnd = () => {
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides - 1) {
          // Swipe left - next slide
          setCurrentSlide(currentSlide + 1);
        } else if (diff < 0 && currentSlide > 0) {
          // Swipe right - previous slide
          setCurrentSlide(currentSlide - 1);
        }
      }
      setSwipeOffset(0); // Reset offset
    };

    const container = mobileContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isMobile, currentSlide, projectsData.length, skillsData.length]);

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

    let currentX = 0;

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

      currentX += scrollDelta;
      currentX = Math.max(0, Math.min(currentX, maxScroll));

      gsap.to(container, {
        x: -currentX,
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
        {isMobile ? (
          // Mobile: Swipe navigation with page indicators
          <div className="relative overflow-hidden h-screen">
            {/* Swipe instruction hint */}
            {showSwipeHint && currentSlide === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
              >
                <div className="bg-[#2a2520]/90 backdrop-blur-md border-2 border-primary/30 rounded-lg px-6 py-4 text-center">
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
                      ← →
                    </motion.div>
                    <p className="font-display text-sm">Swipe to navigate</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div
              ref={mobileContainerRef}
              className="flex will-change-transform touch-pan-y overflow-hidden"
              style={{
                width: `${(1 + projectsData.length + skillsData.length + 1) * 100}vw`,
                height: "calc(100vh - var(--nav-h) - 4.5rem)",
              }}
            >
              <div className="flex-shrink-0 w-screen h-screen overflow-y-auto">
                <Hero />
              </div>

              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-screen overflow-y-auto pb-20 md:pb-0"
                  style={{ height: "100vh" }}
                >
                  <ProjectSlide project={project} index={index} />
                </div>
              ))}

              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  id={index === 0 ? "skills" : undefined}
                  className="flex-shrink-0 w-screen h-screen overflow-y-auto"
                >
                  <SkillSlide skill={skill} index={index} />
                </div>
              ))}

              <div className="flex-shrink-0 w-screen min-h-screen overflow-y-auto">
                <Contact />
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

        <footer
          className={`py-4 md:py-6 px-4 md:px-6 border-t-2 border-primary/30 z-30 ${
            isMobile
              ? "fixed bottom-0 left-0 right-0 bg-[#2a2520]/95 backdrop-blur-sm"
              : "relative"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {isMobile ? (
              // Mobile: Page indicators with instruction
              <div className="space-y-2">
                <div className="flex justify-center gap-2">
                  {Array.from({
                    length: 1 + projectsData.length + skillsData.length + 1,
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-primary w-6"
                          : "bg-vintage-beige/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <p className="text-center text-vintage-beige/60 text-xs font-display">
                  Swipe left or right • Tap dots to jump
                </p>
              </div>
            ) : (
              // Desktop: Copyright text
              <div className="text-center text-vintage-beige font-display text-sm md:text-base">
                <p>© 2024 - Scroll Down for Vintage Vibes →</p>
              </div>
            )}
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
