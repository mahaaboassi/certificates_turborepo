"use client"; // Enforces client-side rendering
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../animations/exclamationMark.json"; // Adjust path accordingly

export default function LottieAnimationExclamationMark() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); 
    }
  }, []);
  return (
    <div className="w-15 h-15 mx-auto mb-3 "> 
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData} 
        loop
        autoplay
      />
    </div>
  );
}
