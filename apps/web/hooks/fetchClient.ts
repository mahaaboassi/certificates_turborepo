"use client";

import { useState } from "react";
import { Helper } from "@repo/utils/helper";
import { ApiProps } from "@/constants/types";
import { toast } from "sonner";
 
export function useApi({
    url, isFetchFresh, headers, params, body, method
  }: ApiProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const call = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await Helper({
            url: url,
            method: method,
            body: body,
            isFetchFresh: isFetchFresh,
            origin_url: process.env.NEXT_PUBLIC_APP_URL || window.location.origin,
            params: params,
            headers: {
              ...headers,
            },
            isFromClientSide: true
      });

      if (!res.ok) {
        setError(res.message || "Error occurred");
        toast.error(res.message || "Error occurred")
      }
      console.log("useApi",res);
      
      return res;
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false);
    }
  };

  return { call, loading, error };
}