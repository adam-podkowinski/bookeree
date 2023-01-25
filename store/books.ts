import { defineStore } from "pinia";
import { ref } from "vue";

// TODO: move all books frontend logic to this store for simplicity
export const useBooksStore = defineStore("books", () => {
  // These functions only temporary, see t0d0 above
  const shouldRefresh = ref(false);
  const refresh = () => {
    shouldRefresh.value = true;
  };
  const refreshed = () => {
    shouldRefresh.value = false;
  };
  //
  return { shouldRefresh, refresh, refreshed };
});
