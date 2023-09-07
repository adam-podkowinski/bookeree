import { Book } from "@/types";

export const useBook = (id: string) => {
  return useLazyFetch<Book>(`/api/books/${id}`, {
    key: `book ${id}`,
    headers: useRequestHeaders(["cookie"]) as HeadersInit,
  });
};
