<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const route = useRoute();
const { data: book } = useBook(route.params.id as string);
</script>
<template>
  <div v-if="book">
    <p>Title: {{ book.title }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
