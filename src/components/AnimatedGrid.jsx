import React from "react";

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(255,255,255,1) 0px,
            rgba(255,255,255,1) 1px,
            transparent 1px,
            transparent calc(100vw / 12)
          )`,
        }}
      />
      <div
        className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #C6F542, transparent)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: "radial-gradient(closest-side, #7C5CFF, transparent)" }}
      />
    </div>
  );
};
