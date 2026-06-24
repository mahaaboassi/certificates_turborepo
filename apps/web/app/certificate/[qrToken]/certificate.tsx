"use client";

import { useEffect, useState } from "react";

type Arrow = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  moveX: number;
  moveY: number;
  opacity: number;
};

export function GoldenArrowsBackground() {
  const [arrows, setArrows] = useState<Arrow[]>([]);

  useEffect(() => {
    const generatedArrows = Array.from({ length: 22 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 150 + Math.random() * 34,
      duration: 7 + Math.random() * 8,
      delay: Math.random() * 5,
      rotate: Math.random() * 180,
      moveX: -80 + Math.random() * 160,
      moveY: -80 + Math.random() * 160,
      opacity: 0.15 + Math.random() * 0.35,
    }));

    setArrows(generatedArrows);
  }, []);

  return (
    <div className="pointer-events-none absolute z-0 inset-0 overflow-hidden bg-[var(--primary)] ">
      {arrows.map((arrow) => (
        // <svg
        //   key={arrow.id}
        //   viewBox="0 0 64 64"
        //   

        // >
        //   <path
        //     d="M32 4L58 30H43V60H21V30H6L32 4Z"
        //     fill="#D7A503"
        //   />
        // </svg>
        <svg className="absolute golden-arrow"
            style={
                {
                left: `${arrow.left}%`,
                top: `${arrow.top}%`,
                width: `${arrow.size}px`,
                height: `${arrow.size}px`,
                opacity: arrow.opacity,
                animationDuration: `${arrow.duration}s`,
                animationDelay: `${arrow.delay}s`,
                "--rotate": `${arrow.rotate}deg`,
                "--move-x": `${arrow.moveX}px`,
                "--move-y": `${arrow.moveY}px`,
                } as React.CSSProperties
            }
            xmlns="http://www.w3.org/2000/svg" width="460" height="272" viewBox="0 0 460 272" fill="none">
            <path d="M460 0C200.259 65.9791 46.9594 212.102 0 272H54.0285C167.943 133.051 369.616 32.0428 460 0Z" fill="url(#paint0_linear_1819_42)"/>
            <defs>
            <linearGradient id="paint0_linear_1819_42" x1="230" y1="0" x2="230" y2="272" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D7A503"/>
            <stop offset="1" stop-color="#715702"/>
            </linearGradient>
            </defs>
        </svg>
      ))}
    </div>
  );
}