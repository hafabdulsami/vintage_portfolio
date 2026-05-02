import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VerticalMarquee({ items, separator = "✦" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);

  const loop = [...items, ...items, ...items];

  return (
    <div
      ref={ref}
      className="relative h-[60vh] border-y hairline overflow-hidden bg-[var(--bg-soft)]/40"
    >
      <div className="absolute inset-y-0 left-6 md:left-12 flex items-center font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-faint)] [writing-mode:vertical-rl] rotate-180">
        Scroll · Scroll · Scroll
      </div>

      <div className="absolute inset-y-0 right-6 md:right-12 flex items-center font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-faint)] [writing-mode:vertical-rl]">
        // Now playing
      </div>

      <div className="marquee-mask-v h-full flex items-start justify-center">
        <motion.div style={{ y }} className="flex flex-col items-center gap-10 py-20">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-10 font-display text-5xl md:text-7xl font-semibold tracking-tightest leading-none"
            >
              <span>{item}</span>
              <span className="text-[var(--accent)] text-3xl md:text-5xl">{separator}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
