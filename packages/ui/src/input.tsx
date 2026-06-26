"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react"

interface InputProps {
  type: string;
  className?: string;
  placeholder: string;
}

export const Input = ({ type, className, placeholder,  ...props}: InputProps) => {
  const [ typeInput, setTypeInput ] = useState("")
  useEffect(()=>setTypeInput(type),[type])
  return (
    <div className={`flex w-full relative h-[40px]  border-[1px]  rounded-lg ${className}`}>
       <input {...props} className={`h-full w-full px-2 rounded-lg`} placeholder={placeholder} type={typeInput}  />
       {/* Icons view unview */}
       {type == "password" && <div onClick={()=>setTypeInput(prev=> (prev == "password"? "text": "password"))} className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[var(--hint)] ">
         {typeInput == "password"? <Eye />:
         <EyeOff  />}
       </div>}
    </div>
    
  );
};
