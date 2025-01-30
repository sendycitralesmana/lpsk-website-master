/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from "next/dist/server/api-utils";
import "server-only";

const BASE = process.env.BASE_API_URL || "http://localhost:3000/api";

export type FetcherOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  searchParams?: Record<string, string | number | undefined>;
  body?: Record<string, any>;
};

export const fetcher = async (path: string, opt?: FetcherOptions) => {
  const url = new URL(path, BASE);

  if (opt?.searchParams) {
    for (const [key, value] of Object.entries(opt.searchParams)) {
        if (value != undefined) {
            url.searchParams.set(key, value.toString());
        }
    }
  }
  const resp = await fetch(url, {
    method: opt?.method || "GET",
    body: opt?.body ? JSON.stringify(opt?.body) : undefined,
  });

  if (!resp.ok) throw new ApiError(resp.status, resp.statusText);

  const data = await resp.json();

  return data;
};
