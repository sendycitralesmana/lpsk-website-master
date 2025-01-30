"use server";

import { fetcher } from "@/lib/server/fetcher";
import { TQuery, TQueryCategory } from "@/types/api";

const BASE_PATH = "/api/highlight";

export const findHighlight = async (id: string) => {
  return await fetcher(`${BASE_PATH}/${id}`);
};

export const findManyHighlight = async (searchParams: TQueryCategory) => {
  return await fetcher(BASE_PATH, { searchParams });
};

export const findHighlightCategory = async (id: string) => {
  return await fetcher(`${BASE_PATH}/category/${id}`);
};

export const findManyHighlightCategory = async (searchParams: TQuery) => {
  return await fetcher(`${BASE_PATH}/category`, { searchParams });
};
