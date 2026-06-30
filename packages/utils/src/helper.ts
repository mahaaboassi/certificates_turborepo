type HelperProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
  headers?: HeadersInit;
  signal?: AbortSignal;
  params?: Record<string, string>;
  isFetchFresh?: boolean;
  origin_url?: string;
  isFromClientSide?: boolean
};

export const Helper = async ({
  url,
  method,
  body,
  headers = {},
  signal,
  params,
  isFetchFresh,
  origin_url,
  isFromClientSide
}: HelperProps) => {
  try {
    const isFormData = body instanceof FormData;

    // -----------------------------
    // Build URL
    // -----------------------------
    const finalUrl = origin_url
      ? new URL(url, origin_url)
      : new URL(url);

    if (params) {
      finalUrl.search = new URLSearchParams(params).toString();
    }

    // -----------------------------
    // Headers
    // -----------------------------
    const finalHeaders: HeadersInit = {
      ...headers,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    };

    // -----------------------------
    // Fetch options
    // -----------------------------
    const options: RequestInit = {
      method,
      headers: finalHeaders,
      signal,
      ...(isFromClientSide && {
        credentials: "include",
      }),
      cache: isFetchFresh ? "no-store" : "default",
      ...(method !== "GET" && method !== "DELETE"
        ? {
            body: isFormData ? body : JSON.stringify(body),
          }
        : {}),
    };

    // -----------------------------
    // Request
    // -----------------------------
    const res = await fetch(finalUrl.toString(), options);
    const data = await res.json();

    // -----------------------------
    // Response normalization
    // -----------------------------
    return {
      ok: res.ok,
      status: res.status,
      data,
      response: res
    };
  } catch (error: any) {
    return {
      ok: false,
      status: 500,
      message: error?.message || "Something went wrong",
    };
  }
};