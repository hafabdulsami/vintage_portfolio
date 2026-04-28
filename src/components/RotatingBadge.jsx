import React from "react";
import { motion } from "framer-motion";

/**
 * Circular badge with text rotating around the perimeter and a clickable
 * lime arrow puck in the center. Used as the headline contact CTA.
 */
export const RotatingBadge = ({
  text = "GET IN TOUCH · AVAILABLE NOW · ",
  href,
  ariaLabel,
  size = 220,
  duration = 22,
}) => {
  // Repeat enough times to fill the circumference at our chosen font-size
  const looped = (text + " ").repeat(2);

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="relative inline-flex items-center justify-center group select-none"
      style={{ width: size, height: size }}
    >
      {/* Outer hairline ring */}
      <span className="absolute inset-0 rounded-full border border-lime/25" />
      {/* Inner hairline ring */}
      <span
        className="absolute rounded-full border border-white/[0.06]"
        style={{ inset: 22 }}
      />

      {/* Rotating circular text */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full text-lime"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="rotating-badge-path"
            d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontFamily="JetBrains Mono, ui-monospace, monospace"
          fontSize="11"
          letterSpacing="2.4"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href="#rotating-badge-path">{looped}</textPath>
        </text>
      </motion.svg>

      {/* Center puck */}
      <motion.span
        whileHover={{ rotate: 45 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        className="relative z-10 w-[70px] h-[70px] rounded-full bg-lime flex items-center justify-center text-ink-800 text-3xl font-display font-bold shadow-[0_0_30px_rgba(198,245,66,0.35)]"
      >
        ↗
      </motion.span>
    </motion.a>
  );
};
