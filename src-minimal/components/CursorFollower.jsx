import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CursorFollower = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] transition-[transform,background] duration-200 hidden md:block mix-blend-difference ${
        isHovering
          ? "scale-[2.2] bg-white"
          : "scale-100 border-2 border-white bg-transparent"
      }`}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};
