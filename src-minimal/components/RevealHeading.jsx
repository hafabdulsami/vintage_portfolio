import React from "react";
import { motion } from "framer-motion";

export function RevealHeading({ children, className = "", as = "h2" }) {
  const MotionTag = motion[as];
  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <MotionTag
        initial={{ x: "-110%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
}

export function RevealEyebrow({ children, className = "" }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.p
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.p>
    </div>
  );
}
