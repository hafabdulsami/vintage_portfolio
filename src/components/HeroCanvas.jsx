import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const WireMesh = () => {
  const group = useRef(null);
  const inner = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || !inner.current) return;
    const { mouse } = state;

    // Subtle base rotation
    inner.current.rotation.x += delta * 0.08;
    inner.current.rotation.y += delta * 0.12;

    // Cursor-driven tilt on the outer group, eased
    const targetX = mouse.y * 0.35;
    const targetY = mouse.x * 0.45;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial
          color="#C6F542"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
      {/* Inner ghost shape for depth */}
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.55, 0]} />
        <meshBasicMaterial
          color="#7C5CFF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
};

export const HeroCanvas = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only render the 3D layer on desktop and when motion is allowed
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-90"
      style={{
        maskImage:
          "radial-gradient(ellipse at 78% 38%, #000 0%, #000 28%, transparent 62%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at 78% 38%, #000 0%, #000 28%, transparent 62%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <WireMesh />
      </Canvas>
    </div>
  );
};
