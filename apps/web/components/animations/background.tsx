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
    const generatedArrows = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 50 + Math.random() * 34,
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
    <div className="pointer-events-none absolute z-0 inset-0 overflow-hidden ">
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
        <svg key={arrow.id} className="absolute golden-arrow"
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
            } xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M30.8073 44.3512C30.8313 47.4775 28.3123 50.0065 25.1794 50C22.0473 49.9927 19.4887 47.4527 19.4643 44.3267L19.3685 30.6165L5.61773 30.5209C2.51169 30.4952 -0.00364201 27.9418 2.71644e-05 24.8183C0.00410401 21.694 2.52636 19.1833 5.63322 19.209L19.289 19.3038L19.1932 5.64843C19.1687 2.5229 21.6881 -0.00649719 24.8206 1.36257e-05C27.9528 0.00733828 30.5113 2.54772 30.5354 5.67366L30.6316 19.3835L44.3823 19.4796C47.4883 19.5056 50.0037 22.0586 50 25.1821C49.9963 28.3064 47.4737 30.8171 44.3668 30.791L30.7111 30.6962L30.8073 44.3512Z" fill="url(#paint0_linear_1830_42)"/>
        <defs>
        <linearGradient id="paint0_linear_1830_42" x1="25" y1="1.09278e-06" x2="25" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D7A503" stopOpacity="0.65"/>
        <stop offset="1" stopColor="#AC860D" stopOpacity="0.65"/>
        </linearGradient>
        </defs>
        </svg>
      ))}
    </div>
  );
}