"use client"; // Enforces client-side rendering

import Lottie from "lottie-react";
import animationData from "../../animations/frame.json"; // Adjust path accordingly

export default function LottieAnimationFrame() {
  return (
    <div className="w-40 h-40 mx-auto"> 
      <Lottie 
        animationData={animationData} 
        loop={false} 
        autoplay={true} 
      />
    </div>
  );
}
