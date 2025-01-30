import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  search: parseAsString.withDefault(""),
  page: parseAsInteger.withDefault(1),
  per_page: parseAsInteger.withDefault(10),
  category_slug: parseAsString,
});
