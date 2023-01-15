export const useBooks = () => {
  const user = useSupabaseUser();
  return useLazyFetch("/api/books", {
    key: `books for ${user.value?.id}`,
    headers: useRequestHeaders(["Cookie"]) as HeadersInit,
  });
};
