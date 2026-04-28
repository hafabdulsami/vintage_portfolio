import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-ink-800 z-[200] flex flex-col items-center justify-center px-4"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8 text-white tracking-tighter tabular-nums">
          {String(progress).padStart(3, "0")}
        </h1>
        <div className="w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-lime"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-xs font-mono text-ink-200 uppercase tracking-widest">
          loading portfolio
        </p>
      </motion.div>
    </motion.div>
  );
};
