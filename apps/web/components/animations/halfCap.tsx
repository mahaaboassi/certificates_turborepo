"use client"; // Enforces client-side rendering

import Lottie from "lottie-react";
import animationData from "../../animations/halfOfCap.json"; // Adjust path accordingly

export default function LottieAnimationHalfCap() {
  return (
    <div className="w-[50px] h-[10px] lg:w-40 lg:h-40 mx-auto"> 
      <Lottie 
        animationData={animationData} 
        loop={false} 
        autoplay={true} 
      />
    </div>
  );
}
