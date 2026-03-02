import React from "react";

// Animated Background Grid - Vintage Paper Texture
export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B2F22] via-[#2C2219] to-[#3B2F22]" />
      {/* Vintage paper texture pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(212, 165, 116, 0.03) 0px,
            transparent 1px,
            transparent 2px,
            rgba(212, 165, 116, 0.03) 3px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(212, 165, 116, 0.03) 0px,
            transparent 1px,
            transparent 2px,
            rgba(212, 165, 116, 0.03) 3px
          )`,
          backgroundSize: "80px 80px",
          animation: "gridMove 30s linear infinite",
        }}
      />
      {/* Old paper spots effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(193, 120, 80, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
      `}</style>
    </div>
  );
};
