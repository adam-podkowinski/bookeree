import { defineStore } from "pinia";
import { ref } from "vue";
import { Book } from "~~/types";

export const useBooksStore = defineStore("books", () => {
  const loading = ref<boolean>(true);
  const books = ref<Book[]>([]);

  const user = useSupabaseUser();

  watchEffect(async () => {
    if (user.value === null) {
      return;
    }
    loading.value = true;
    const { data: booksData } = await useFetch<Book[]>("/api/books", {
      key: `books for ${user.value.id}`,
      method: "get",
      headers: useRequestHeaders(["cookie"]) as HeadersInit,
    });
    if (booksData.value === null) return;
    books.value = booksData.value;
    loading.value = false;
  });

  const addBook = async (volumeId: string) => {
    const book = await $fetch<Book>("/api/books", {
      method: "post",
      body: { volumeId },
      headers: useRequestHeaders(["Cookie"]) as HeadersInit,
    });
    if (!book) {
      alert("ERROR: could not add a book!");
      return;
    }
    books.value.push(book);
  };

  const removeBook = async (id: bigint) => {
    books.value.splice(
      books.value.findIndex((b) => b.id === id),
      1,
    );
    const removed = await $fetch<number>(`/api/books/${id}`, {
      method: "DELETE",
      headers: useRequestHeaders(["Cookie"]) as HeadersInit,
    });
    if (!removed) {
      alert("ERROR: Could not remove a book!");
    }
  };

  return { books, addBook, removeBook, loading };
});
