"use server";

import { fetcher } from "@/lib/server/fetcher";
import { TQuery, TQueryCategory } from "@/types/api";

const BASE_PATH = "/api/news";

export const findNews = async (id: string) => {
  return await fetcher(`${BASE_PATH}/${id}`);
};

export const findManyNews = async (searchParams: TQueryCategory) => {
  return await fetcher(BASE_PATH, { searchParams });
};

export const findNewsCategory = async (id: string) => {
  return await fetcher(`${BASE_PATH}/category/${id}`);
};

export const findManyNewsCategory = async (searchParams: TQuery) => {
  return await fetcher(`${BASE_PATH}/category`, { searchParams });
};
