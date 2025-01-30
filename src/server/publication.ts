"use server";

import { fetcher } from "@/lib/server/fetcher";
import { TQuery, TQueryCategory } from "@/types/api";

const BASE_PATH = "/api/publication";

export const findPublication = async (id: string) => {
  return await fetcher(`${BASE_PATH}/${id}`);
};

export const findManyPublication = async (searchParams: TQueryCategory) => {
  return await fetcher(BASE_PATH, { searchParams });
};

export const findPublicationCategory = async (id: string) => {
  return await fetcher(`${BASE_PATH}/category/${id}`);
};

export const findManyPublicationCategory = async (searchParams: TQuery) => {
  return await fetcher(`${BASE_PATH}/category`, { searchParams });
};
