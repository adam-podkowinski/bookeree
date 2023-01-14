<script setup lang="ts">
definePageMeta({ middleware: "auth" });

const GOOGLE_URL = "https://www.googleapis.com/books/v1";

interface Book {
  title: string;
  subtitle: string;
  id: string;
  thumbnail: string;
  averageRating: number;
  pageCount: number;
  authors: string[];
  description: string;
  createdAt: Date;
  price: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string | undefined;
}

const user = useSupabaseUser();

const books = ref<Book[]>([]);

const sortedBooks = computed(() => {
  return books.value.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
});

// TODO: move to a separate composable
const { data: dbBooks } = await useFetch("/api/books", {
  key: `books for ${user.value?.id}`,
  headers: useRequestHeaders(["Cookie"]) as HeadersInit,
});

watch(
  () => dbBooks,
  () => {
    dbBooks.value?.forEach(async (b) => {
      const data = await $fetch(`${GOOGLE_URL}/volumes/${b.volume_id}`);
      const bookToAdd = mapItemToBook(data, b.created_at);
      books.value.push(bookToAdd);
    });
  },
  { immediate: true }
);

const mapItemToBook = (item: any, createdAt: Date): Book => {
  return {
    id: item.id,
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    authors: item.volumeInfo.authors,
    description: item.volumeInfo.description,
    averageRating: item.volumeInfo.averageRating,
    pageCount: item.volumeInfo.pageCount,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    buyLink: item.saleInfo.buyLink,
    createdAt,
    price: {
      amount: item.saleInfo.retailPrice.amount,
      currencyCode: item.saleInfo.retailPrice.currencyCode,
    },
  };
};
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
