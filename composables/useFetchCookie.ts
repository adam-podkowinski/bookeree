export const useFetchCookie = async <T>(url: string, method = "GET") => {
  return await useFetch<T>(url, {
    headers: useRequestHeaders(["cookie"]) as HeadersInit,
    method,
  });
};
