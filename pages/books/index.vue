<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const { data: books } = useBooks();

const sortedBooks = computed(() => {
  return books.value
    ? books.value.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    : [];
});

const getBooksText = computed(() => {
  if (books.value?.length === 0) {
    return "No books added";
  } else if (books.value?.length === 1) {
    return `${books.value?.length} book`;
  } else {
    return `${books.value?.length} books`;
  }
});
</script>
<template>
  <div class="flex flex-col items-center gap-6">
    <transition name="page">
      <div v-if="books" class="flex flex-col">
        <div
          class="mb-6 flex flex-col items-center justify-between gap-3 self-center
          rounded-xl border-2 border-zinc-700/60 bg-zinc-800 px-6 py-3 text-center
          text-lg font-black tracking-wide text-orange-100 shadow-md lg:flex-row
          lg:gap-6 lg:text-xl hover:bg-zinc-600/40 transition-colors"
        >
          <div class="flex flex-col text-xl lg:flex-row lg:gap-2">
            <h1 class="">Your library:</h1>
            <span class="normal-case tracking-wide text-amber-300">
              {{ getBooksText }}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <label for="sort">Show</label>
            <select
              name="sort"
              class="rounded-lg bg-orange-300 p-1 text-zinc-800"
            >
              <option value="newest">All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
              <option value="reading">Reading</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label for="sort">Sort by:</label>
            <select
              name="sort"
              class="rounded-lg bg-orange-300 p-1 text-zinc-800"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <ul class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <li v-for="book in sortedBooks" :key="book.id">
            <TheBook v-bind="book" />
          </li>
        </ul>
      </div>
      <h1 v-else>Loading...</h1>
    </transition>
  </div>
</template>
