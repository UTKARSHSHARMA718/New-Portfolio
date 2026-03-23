"use client";
import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="glow-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    />
  );
}