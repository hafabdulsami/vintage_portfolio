import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionTitle({ title, eyebrow, id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-55%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.2, 1, 1, 0.2]
  );

  return (
    <div
      id={id}
      ref={ref}
      className="relative h-[120vh] border-t hairline"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {eyebrow && (
          <div className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-6">
            <p className="font-mono text-xs text-[var(--ink-muted)]">
              // {eyebrow}
            </p>
          </div>
        )}
        <motion.h2
          style={{ x, opacity }}
          className="font-display font-semibold tracking-tightest leading-[0.85] whitespace-nowrap text-[20vw] md:text-[18vw] will-change-transform"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
