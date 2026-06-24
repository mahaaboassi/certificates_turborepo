

const getToken = () => {
  // Read the auth token from localStorage (returns an empty string if missing)
  return localStorage.getItem("token") ? localStorage.getItem("token") : "";
};
type HelperProps = {
  url: string;
  body?: any;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  signal?: AbortSignal;
  hasToken?: boolean;
  isFetchfresh?: boolean;
  params?: Record<string, string > ;
  origin_url: string
};
export const Helper = async ({
  url,
  body,
  method,
  signal,
  hasToken,
  params,
  origin_url,
  isFetchfresh
}: HelperProps) => {


  // Determine whether the request body is FormData (multipart) or JSON
  const isFormData = body instanceof FormData;
  try {
    // Build headers:
    // - For FormData: do NOT set Content-Type; the browser will set boundary automatically.
    // - For JSON: set Content-Type to application/json.
    const headers:any = isFormData ? {} : {"Content-Type": "application/json"};

    // Add Bearer token when required
    if (hasToken) headers["Authorization"] = `Bearer ${getToken()}`;
    // cache: "no-store", // always fetch fresh data
    if(isFetchfresh) headers["cache"] = `no-store`;
    // Build fetch options
    const data = {
      method,
      headers,
      // Attach AbortController signal if provided
      signal: signal,
      // Attach body only for POST/PUT (and only when provided)
      ...(method === "POST" || method === "PUT"
        ? { body: isFormData ? body : JSON.stringify(body) }
        : {}),
    };

    // Development-only: log the final request details (URL, headers, body)
    // params.pass = 1;


    // Build final URL and attach query params (if any)
    const urlWithParams = new URL(url, origin_url);
    urlWithParams.search = new URLSearchParams(params).toString();
    
    // Execute request
    const result = await fetch(urlWithParams, data);
    // Parse JSON response
    const res = await result.json();
    console.log("Result from helper", res);
    
    // Guard: unexpected response shape
    // if (!res.data ) {
    //   return { message: "Something went wrong, please try again.", statusCode: 500 };
    // }



    // Normalize response handling by status
    switch (res.statusCode) {
      case 200:
        return { response: res, message: res.msg, statusCode: 200 };

      case 400:
        // If server says unauthenticated, clear stored user (optional behavior)
        if (localStorage.getItem("user") && res.message === "Unauthenticated") {
          localStorage.removeItem("user");
        }
        return { message: res.msg, statusCode: 400, results: res?.data || null };

      case 401:
        // Unauthorized: reload page (forces re-auth flow if your app does that)

        return { message: res.msg, statusCode: 401 };

      case 403:
        return { message: res.msg, statusCode: 403 };
        
      case 404:
        return { message: res.msg, statusCode: 404 };

      case 405:
        return { message: res.msg, statusCode: 405 };

      case 409:
        return { message: res.msg, statusCode: 409 };

      case 413:
        return { message: res.msg, statusCode: 413 };

      case 422:
        return { message: res.msg, statusCode: 422 };

      case 455:
        return { message: res.msg, statusCode: 455 };

      case 500:
        return { message: "Something went wrong, please try again.", statusCode: 500 };

      default:
        return { response: res, message: res.msg };
    }
  } catch (error:any) {
    // Network/parse/abort errors end up here
    console.error("Error fetching data:", error);

    switch (error.message) {
      case "404 Not Found":
        return { message: "Resource not found" };
      case "500 Internal Server Error":
        return { message: "Something went wrong, please try again." };
      case "signal is aborted without reason":
        return { message: "Signal is aborted without reason" };
      default:
        return { message: "Something went wrong, please try again." };
    }
  }
};

