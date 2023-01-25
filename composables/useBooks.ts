import { Book } from "~~/types";

export const useBooks = () => {
  const user = useSupabaseUser();
  return useLazyFetch<Book[]>("/api/books", {
    key: `books for ${user.value?.id}`,
    method: "get",
    headers: useRequestHeaders(["Cookie"]) as HeadersInit,
  });
};
