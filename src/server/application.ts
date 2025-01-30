"use server";

import { fetcher } from "@/lib/server/fetcher";
import { TQuery, TQueryCategory } from "@/types/api";

const BASE_PATH = "/api/application";

export const findApplication = async (id: string) => {
  return await fetcher(`${BASE_PATH}/${id}`);
};

export const findManyApplication = async (searchParams: TQueryCategory) => {
  return await fetcher(BASE_PATH, { searchParams });
};

export const findApplicationCategory = async (id: string) => {
  return await fetcher(`${BASE_PATH}/category/${id}`);
};

export const findManyApplicationCategory = async (searchParams: TQuery) => {
  return await fetcher(`${BASE_PATH}/category`, { searchParams });
};
