import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 2;
      });
    }, 28);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[var(--bg)] z-[200] flex flex-col items-center justify-center px-6 overflow-hidden"
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] },
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 gradient-blob pointer-events-none opacity-50"
      />

      <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-faint)]">
        <span>// SAMMY</span>
        <span>Lahore · GMT+5</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--ink-muted)] mb-6">
          // booting portfolio
        </p>

        <h1 className="font-display text-7xl md:text-9xl text-[var(--ink)] tracking-tightest tabular-nums leading-none">
          {String(progress).padStart(3, "0")}
        </h1>

        <div className="w-64 md:w-80 h-px bg-white/10 overflow-hidden mt-10 mx-auto">
          <motion.div
            className="h-full bg-[var(--accent)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-5 text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-[0.3em]">
          {progress < 100 ? "loading" : "ready"}
        </p>
      </motion.div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-faint)]">
        <span>v 2.0 · MIN</span>
        <span>{String(progress).padStart(3, "0")} / 100</span>
      </div>
    </motion.div>
  );
};
