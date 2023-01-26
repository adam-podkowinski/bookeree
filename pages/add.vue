<script setup lang="ts">
// TODO: refactor: extract each list item to a component
import type { ApiBook } from "@/types";
import { useBooksStore } from "@/store/books";

definePageMeta({ middleware: "auth", keepalive: true });

const GOOGLE_URL = "https://www.googleapis.com/books/v1";

const booksStore = useBooksStore();

const searchQuery = ref<string>("");
const loading = ref(false);
const loadingAction = ref<{ [key: string]: boolean }>({});
const searchBooks = ref<ApiBook[]>([]);
const addedIds = computed(() => {
  return booksStore.books.map((b) => b.volumeId);
});

const search = async (query: string) => {
  loading.value = true;
  searchBooks.value = [];
  const res: any = await $fetch(
    `${GOOGLE_URL}/volumes?q="${query}"&maxResults=6&printType=books&filter=ebooks&langRestrict=en`
  );
  if (res.items?.length > 0) {
    res.items.forEach((b: any) => {
      searchBooks.value.push(transformBookApi(b));
    });
  }
  loading.value = false;
};

const findBookId = (volumeId: string): bigint | undefined => {
  return booksStore.books.find((b) => b.volumeId === volumeId)?.id;
};

const onButtonClick = async (volumeId: string) => {
  loadingAction.value[volumeId] = true;
  if (addedIds.value.includes(volumeId)) {
    const id = findBookId(volumeId);
    if (!id) return;
    await booksStore.removeBook(id);
  } else {
    await booksStore.addBook(volumeId);
  }
  loadingAction.value[volumeId] = false;
};
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold sm:text-4xl">Search for a book</h1>
    <form
      class="mt-6 flex flex-col items-center gap-6 rounded-xl bg-zinc-800 px-6 py-4 md:flex-row"
      @submit.prevent
    >
      <label for="query" class="text-2xl font-medium">Title or Author:</label>
      <input
        id="query"
        v-model="searchQuery"
        type="text"
        placeholder="Search query"
        class="w-full flex-1 rounded-xl px-2 py-4 text-xl font-medium text-zinc-800 ring-amber-300 focus:outline-none focus:ring-4"
      />
      <button
        class="rounded-xl bg-amber-300 py-2 px-6 text-5xl text-zinc-800 transition-colors hover:bg-amber-400"
        @click="search(searchQuery)"
      >
        <Transition mode="out-in" name="loading">
          <Icon v-if="loading" name="mdi:loading" class="animate-spin" />
          <Icon v-else name="material-symbols:search" />
        </Transition>
      </button>
    </form>
    <ul v-if="searchBooks" class="mt-12">
      <li
        v-for="book in searchBooks"
        :key="book.volumeId"
        class="mb-6 flex flex-col items-start justify-center gap-1"
      >
        <p class="text-xl font-semibold">
          {{ book.title }}
        </p>
        <p
          v-for="author in book.authors"
          :key="author"
          class="text-lg text-neutral-400"
        >
          {{ author }}
        </p>
        <img
          :src="book.thumbnail"
          class="max-h-48 rounded-xl object-contain"
          :alt="book.title"
        />
        <button
          class="mt-3 h-min rounded-xl bg-amber-300 px-4 py-3 font-medium text-zinc-800 transition hover:bg-amber-400"
          :class="
            addedIds.includes(book.volumeId) && 'bg-rose-300 hover:bg-rose-400'
          "
          @click="onButtonClick(book.volumeId)"
        >
          <p v-if="loadingAction[book.volumeId]">Loading...</p>
          <div v-else>
            <p v-if="addedIds.includes(book.volumeId)">❌ Remove book</p>
            <p v-else>➕ Add to library</p>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss">
.loading,
.loading-enter-active,
.loading-leave-active {
  @apply transition-all duration-300;
}

.loading-enter-from,
.loading-leave-to {
  @apply opacity-0;
}
</style>
