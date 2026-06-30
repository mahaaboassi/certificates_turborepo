import { NextResponse } from "next/server";
// Shared from Packages
import { Helper } from "@repo/utils/helper";
import { apiRoutes } from "@repo/utils/apiRoutes";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await Helper({
    url: apiRoutes.auth.signIn,
    method: "POST",
    body, 
    origin_url: process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:4000" ,
  });
  const response = NextResponse.json(result.data, {
    status: result.status,
  });
  // get cookie from raw response
  const setCookie = result?.response?.headers?.get("set-cookie");

  if (setCookie) {
    response.headers.append("set-cookie", setCookie);
  }

  return response;
}