<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const user = useSupabaseUser();

// TODO: move to a separate composable
const { data: books } = useLazyFetch("/api/books", {
  key: `books for ${user.value?.id}`,
  headers: useRequestHeaders(["Cookie"]) as HeadersInit,
});

const sortedBooks = computed(() => {
  return books.value
    ? books.value.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    : [];
});
</script>
<template>
  <div>
    <h1>Books</h1>
    <ul v-if="books">
      <li v-for="book in sortedBooks" :key="book.id">
        <h1 class="text-xl">{{ book.title }}:</h1>
        <img v-if="book.thumbnail" :src="book.thumbnail" :alt="book.title" />
        <p class="text-lg">
          {{ book.id }}
          {{ book.authors }}
          {{ book.price.amount }}
          {{ book.price.currencyCode }}
          {{ book.averageRating }}
        </p>
        <hr class="h-4 border-none bg-white" />
        <hr class="h-4 border-none bg-white" />
      </li>
    </ul>
    <h1 v-else>Loading...</h1>
  </div>
</template>
