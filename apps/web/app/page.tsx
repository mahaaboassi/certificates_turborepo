"use client"
import Image from "next/image";
// Shared Component
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
// For Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schems";
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";


type LoginForm = {
  email: string;
  password: string;
};


export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    const result = await Helper({
      url: apiRoutes.auth.signIn,
      method: "POST",
      body: data,
      origin_url: process.env.NEXT_PUBLIC_APP_URL || window.location.origin
    })
    if(result){
      console.log(result);
      
    }else{
      console.log("sss");
      
    }
  };
  return (
    <div className="bg-[var(--primary)] gap-4 h-screen flex justify-center items-center flex-col ">
      <main className="space-y-4">
        <div  className="space-y-4 ">
          <div className="w-full flex justify-center">
            <Image className="w-[110px] xs:w-[150px] h-full object-contain" src={"/logo.png"} alt="Logo" width={200} height={200} />
          </div>
          <div className="text-center">
            {/* <h1 className="text-[var(--background)] font-bold !text-[2rem]">Smart Education Group</h1> */}
            <p className="text-[var(--light_grey)]">Sign in to access your dashboard</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--card)] rounded-xl p-5 w-full xxs:w-[350px] xs:w-[400px] lg:w-[450px] space-y-4">
            <div>
              <div className="mb-1 text-[var(--grey)] text-[0.95rem]">
                Email Address
              </div>
              <Input placeholder="Email" type="text" {...register("email")}/>
              <p className="text-[var(--accent)] text-sm">{errors.email?.message}</p>
            </div>
            <div>
              <div className="mb-1 text-[var(--grey)] text-[0.95rem]">
                Password
              </div>
              <Input placeholder="Password" type="password" {...register("password")}/>
              <p className="text-[var(--accent)] text-sm">{errors.password?.message}</p>
            </div>
            <div>
              <Button className="primary-btn w-full py-2">Sign In</Button>
            </div>
        </form>
      </main>
      <footer className="text-[var(--light_grey)] text-center">
        © 2026 Certificate Management System
      </footer>
    </div>
  );
}
