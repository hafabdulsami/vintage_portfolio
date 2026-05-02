import React from "react";

export function Marquee({ items, separator = "✦", className = "" }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className="marquee-track py-4">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-mono text-sm md:text-base text-[var(--ink-muted)] px-6"
          >
            {item}
            <span className="ml-12 text-[var(--accent)]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
