"use client"
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// For Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/constants/schema"
// 
import LottieAnimationHalfCap from "../components/animations/halfCap";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner"
import Loading from "@/components/shared/loading";
import { useApi } from "@/hooks/fetchClient";



type LoginForm = {
  email: string;
  password: string;
};


export default function Home() {
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });
  const [ isLoading, setIsLoading ] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("user"))
      router.push("/dashboard")
  },[])
  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const result = await res.json();
      console.log("res", result);
      if(result.err == 0){ 
        toast.success("Logged in successfully.")
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: result.data?.name,
              email: result.data?.email,
              id: result.data?.id,
              role: result.data?.role
            })
          );
          router.push("/dashboard")
          setIsLoading(false)
      }else{
        toast.error(result.msg)
        setIsLoading(false)
      }
      
  

  };
  
  return (
    <div className="grid lg:grid-cols-2 lg:h-screen bg-[var(--dark_surface)]">
      <div className="hidden lg:flex justify-center items-center py-10 lg:p-0">
        <Image className="!w-auto !h-[200px] lg:!w-[900px] lg:!h-[500px] object-contain" src="/branches.png" alt="Branches"  
              width={1200}
              height={800} />

      </div>
      
      <div className="flex flex-col space-y-4 justify-center items-center rounded-tr-[2em] rounded-tl-[2em] 
                      mt-20 lg:mt-0 lg:rounded-tr-[0] lg:rounded-tl-[4em]  bg-[var(--background)] pt-40 lg:p-0">
        <div  className="space-y-4">
            <div className="flex justify-center fixed top-30 right-5 lg:right-0 lg:top-0 lg:relative ">
              <div className="absolute -top-3 lg:-top-10 left-1/2 -translate-x-1/2 ">
                <LottieAnimationHalfCap/>
              </div>
              <Image className="!w-[60px] lg:!w-[150px] h-full object-contain" src={"/logo_withHalfShape.png"} alt="Logo" width={200} height={200} />
            </div>
            <div className="text-center">
              {/* <h1 className="text-[var(--background)] font-bold !text-[2rem]">Smart Education Group</h1> */}
              <p className="text-[var(--grey)]">Sign in to access your dashboard</p>
            </div>
          </div>
         <Card className="bg-[var(--grey)] w-[90%] lg:w-[60%]">
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl p-5 w-full space-y-4">
                  <div>
                    <div className="mb-1 text-[0.95rem] text-[var(--light)]">
                      Email Address
                    </div>
                        <InputGroup className="w-full bg-[var(--secondary)]">
                          <InputGroupInput {...register("email")} placeholder="Enter Email..." />
                          <InputGroupAddon>
                            <Mail />
                          </InputGroupAddon>
                          {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
                        </InputGroup>
                    <p className="text-[var(--danger)] text-sm">{errors.email?.message}</p>
                  </div>
                  <div>
                    <div className="mb-1  text-[0.95rem] text-[var(--light)]">
                      Password
                    </div>
                    <InputGroup className="w-full bg-[var(--secondary)]">
                        <InputGroupInput {...register("password")} placeholder="Enter Password." />
                        <InputGroupAddon>
                          <Lock />
                        </InputGroupAddon>
                        {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
                      </InputGroup>
                    <p className="text-[var(--danger)] text-sm">{errors.password?.message}</p>
                  </div>
                  <div>
                    <Button disabled={isLoading} variant="destructive" className="w-full">
                      {isLoading? <Loading/>: "Sign In"}
                    </Button>
                  </div>
              </form>
            </CardContent>
          </Card> 
        
        <footer className="text-[var(--grey)] text-center">
        © 2026 Certificate Management System
      </footer>
      </div>

      
    </div>
  );
}
