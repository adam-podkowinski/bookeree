<script setup lang="ts">
interface Book {
  title: string;
  id: string;
  images: {
    thumbnail: string;
  };
}

const {
  data: books,
  pending,
  error,
} = await useLazyFetch<Book[]>(
  'https://www.googleapis.com/books/v1/volumes?q="a storm of swords"&maxResults=5&printType=books&filter=ebooks&langRestrict=en',
  {
    transform: (d: any) =>
      d.items.map((i: any) => ({
        title: i.volumeInfo.title,
        images: i.volumeInfo.imageLinks,
        id: i.id,
      })),
  }
);
</script>
<template>
  <div>
    <h1>Books</h1>
    <ul v-if="!pending && !error && books && books.length > 0">
      <li v-for="(book, index) in books" :key="index">
        <h1 class="text-xl">{{ book.title }}:</h1>
        <img
          v-if="book.images"
          :src="book.images.thumbnail"
          :alt="book.title"
        />
        <p class="text-lg">
          {{ book.id }}
        </p>
      </li>
    </ul>
    <h1 v-else>Loading...</h1>
  </div>
</template>
