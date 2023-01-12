<script setup lang="ts">
definePageMeta({ middleware: "auth" });

interface Book {
  title: string;
  subtitle: string;
  id: string;
  thumbnail: string;
  averageRating: number;
  pageCount: number;
  authors: string[];
  description: string;
  price: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string | undefined;
}

const mapItemToBook = (item: any): Book => {
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
    price: {
      amount: item.saleInfo.retailPrice.amount,
      currencyCode: item.saleInfo.retailPrice.currencyCode,
    },
  };
};

const {
  data: books,
  pending,
  error,
} = await useLazyFetch<Book[]>(
  'https://www.googleapis.com/books/v1/volumes?q="a storm of swords"&maxResults=5&printType=books&filter=ebooks&langRestrict=en',
  {
    transform: (d: any) => d.items.map(mapItemToBook),
  }
);
</script>
<template>
  <div>
    <h1>Books</h1>
    <ul v-if="!pending && !error && books && books.length > 0">
      <li v-for="(book, index) in books" :key="index">
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
