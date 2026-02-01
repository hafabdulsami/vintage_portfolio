import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      // Parallax effect on scroll
      gsap.to(".floating-element", {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techStack = [
    "React",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "Vue",
    "Nuxt",
    "Feathers",
  ];

  // Calculate positions once to avoid re-rendering randomness
  const techPositions = techStack.map((tech, i) => {
    const angle = (i * 360) / techStack.length;
    const radius = 280;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    const floatDistance = 15 + i * 3;
    const floatDuration = 3 + i * 0.3;
    const rotateAmount = (i % 2 === 0 ? 1 : -1) * (5 + i * 2);

    return { tech, x, y, floatDistance, floatDuration, rotateAmount };
  });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen mt-36 md:mt-0 flex items-center justify-center overflow-hidden pt-20 md:pt-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 relative z-10">
        {/* Unique asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="col-span-1 lg:col-span-6 text-center lg:text-left">
            <motion.div className="mb-4 md:mb-6 inline-block">
              <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-[#2a2520] text-xs md:text-sm font-bold shadow-lg shadow-primary/50 border-2 border-vintage-orange font-display">
                ⚡ Full-Stack JavaScript Engineer
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-none font-display">
                <div className="hero-title mb-2 md:mb-4">
                  <span className="text-vintage-cream">I Craft</span>
                </div>
                <div className="hero-title mb-2 md:mb-4">
                  <span className="bg-gradient-to-r from-primary via-vintage-orange to-secondary bg-clip-text text-transparent animate-gradient">
                    Timeless
                  </span>
                </div>
                <div className="hero-title">
                  <span className="text-vintage-cream italic">Experiences</span>
                </div>
              </h1>
            </div>

            <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-vintage-beige max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed">
              Not your average developer. I craft{" "}
              <span className="text-primary font-bold">timeless</span> web
              applications with a vintage soul.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-[#2a2520] font-bold rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary transition-all border-2 border-vintage-orange font-display text-sm md:text-base"
              >
                🎨 See My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-[#2a2520] transition-all relative overflow-hidden group font-display text-sm md:text-base"
              >
                <span className="relative z-10">📬 Let's Talk</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Creative element */}
          <div className="col-span-1 lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              className="floating-element relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Tech stack - Grid on mobile, Circular on desktop */}
              <div className="hidden lg:block relative w-[500px] xl:w-[700px] h-[500px] xl:h-[700px] mx-auto pointer-events-none">
                {techPositions.map((pos, i) => (
                  <motion.div
                    key={pos.tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -pos.floatDistance, 0],
                      rotate: [0, pos.rotateAmount, 0],
                    }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      y: {
                        duration: pos.floatDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      },
                      rotate: {
                        duration: pos.floatDuration + 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15,
                      },
                    }}
                    whileHover={{ scale: 1.3, rotate: 360, zIndex: 100 }}
                    className="absolute pointer-events-auto"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${pos.x * 0.7}px), calc(-50% + ${pos.y * 0.7}px))`,
                      zIndex: 10,
                    }}
                  >
                    <div className="px-4 py-2.5 bg-[#3a3028] border-2 border-primary rounded-xl text-vintage-cream font-bold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/60 transition-all cursor-pointer whitespace-nowrap font-display hover:z-50">
                      {pos.tech}
                    </div>
                  </motion.div>
                ))}

                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 xl:w-20 h-16 xl:h-20 bg-gradient-to-br from-primary to-vintage-orange rounded-full flex items-center justify-center text-2xl xl:text-3xl shadow-2xl shadow-primary/50 border-3 border-vintage-cream/20">
                  💻
                </div>
              </div>

              {/* Mobile tech stack - Simple grid layout */}
              <div className="lg:hidden flex flex-wrap justify-center gap-3 max-w-xs mx-auto">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-[#3a3028] border-2 border-primary rounded-lg text-vintage-cream font-bold text-xs shadow-lg shadow-primary/30 font-display"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 md:top-20 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-primary/20 to-vintage-orange/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-tr from-secondary/20 to-vintage-green/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};
