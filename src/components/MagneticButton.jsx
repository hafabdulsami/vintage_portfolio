import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 220, damping: 18, mass: 0.45 };

export const MagneticButton = ({
  as = "button",
  strength = 0.3,
  range = 1.6,
  className = "",
  children,
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Activation radius scales with the button's larger dimension
    const radius = Math.max(rect.width, rect.height) * range;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > radius) {
      x.set(0);
      y.set(0);
      return;
    }

    const falloff = 1 - dist / radius;
    x.set(dx * strength * falloff);
    y.set(dy * strength * falloff);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};
