"use server";

import { Helper } from "@repo/utils/helper";
import { cookies } from "next/headers";

export async function loginUser(data: { email: string; password: string }) {
  const cookieHeader = cookies().toString();

  return Helper({
    url: "http://localhost:3000/auth/login",
    method: "POST",
    body: data,
    headers: {
      Cookie: cookieHeader,
    },
  });
}