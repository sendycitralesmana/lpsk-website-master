export type TQuery = {
  page: number;
  per_page: number;
  search: string;
};

export type TQueryCategory = {
  page: number;
  per_page: number;
  search?: string;
  category_slug?: string;
};
