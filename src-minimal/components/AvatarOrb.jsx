import React from "react";
import { motion } from "framer-motion";

export function AvatarOrb() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-[440px] mx-auto">
      <div className="absolute inset-6 rounded-full orb-bg opacity-80" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[3/4] rounded-3xl border hairline-strong bg-[var(--bg-card)] overflow-hidden noise"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display font-semibold tracking-tightest text-[28vw] md:text-[14rem] leading-none bg-gradient-to-br from-[var(--grad-3)] via-[var(--grad-2)] to-[var(--grad-1)] text-transparent bg-clip-text select-none">
            AS
          </div>
        </div>

        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        <div className="absolute top-4 right-4 font-mono text-[10px] text-[var(--ink-faint)]">
          ~/sammy
        </div>

        <div className="absolute bottom-4 left-4 right-4 font-mono text-[11px] text-[var(--ink-muted)] space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[var(--grad-3)]">$</span>
            <span>whoami</span>
          </div>
          <div className="text-[var(--ink-muted)]">→ full-stack engineer</div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--grad-3)]">$</span>
            <span>status</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-[var(--accent)]"
            >▍</motion.span>
          </div>
          <div className="text-[var(--ink-muted)]">→ shipping</div>
        </div>
      </motion.div>
    </div>
  );
}
