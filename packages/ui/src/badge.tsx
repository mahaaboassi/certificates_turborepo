"use client";

import { ReactNode } from "react";

interface BadgeProps {
  icon?: ReactNode;
  className?: string;
  label: string,
  status: string,
  size?: string
}
// Excepted colors warning, danger, info, success
export const Badge = ({ icon, className, label, status, size }: BadgeProps) => {
  const refColors:any = {
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#3B82F6",
  } 
  const opacityColor = refColors[status]+"20"
    console.log(refColors[status]);
    
 return (
    <div
      style={{
        background: opacityColor,
        color: refColors[status],
        borderColor: refColors[status]
      }}
      className={`${className} 
      flex text-center gap-2 justify-center items-center border rounded-3xl p-2 `}
    >
      {icon && <div >{icon} </div>}
      <div className={`${size? `!${size}`:"text-sm"} font-medium`}>
        {label}
      </div>
    </div>
  );
};
