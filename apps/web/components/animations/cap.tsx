"use client"; // Enforces client-side rendering

import Lottie from "lottie-react";
import animationData from "../../animations/graduationCap.json"; // Adjust path accordingly

export default function LottieAnimation() {
  return (
    <div className="w-70 h-70 mx-auto"> 
      <Lottie 
        animationData={animationData} 
        loop={false} 
        autoplay={true} 
      />
    </div>
  );
}
