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
      <div v-if="books">
        <h1
          class="mb-6 self-stretch rounded-xl border-2 border-zinc-700/60 bg-zinc-800 px-10 py-3 text-center text-2xl font-black uppercase tracking-widest text-orange-100 shadow-md"
        >
          YOUR LIBRARY:
          <span class="normal-case tracking-wide text-amber-300">
            {{ getBooksText }}
          </span>
        </h1>
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
