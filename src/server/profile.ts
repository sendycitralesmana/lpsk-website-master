"use server";

import { fetcher } from "@/lib/server/fetcher";
import { TQuery, TQueryCategory } from "@/types/api";

const BASE_PATH = "/api/profile";

export const findProfile = async (id: string) => {
  const resp = await fetcher(`${BASE_PATH}/${id}`);
  const data = await resp.json();
  return data;
};

export const findManyProfile = async (searchParams: TQueryCategory) => {
  const resp = await fetcher(BASE_PATH, { searchParams });
  const data = await resp.json();
  return data;
};

export const findProfileCategory = async (id: string) => {
  const resp = await fetcher(`${BASE_PATH}/category/${id}`);
  const data = await resp.json();
  return data;
};

export const findManyProfileCategory = async (searchParams: TQuery) => {
  const resp = await fetcher(`${BASE_PATH}/category`, { searchParams });
  const data = await resp.json();
  return data;
};
