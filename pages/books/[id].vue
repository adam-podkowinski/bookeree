<script setup lang="ts">
const route = useRoute();
const { data: book } = useBook(route.params.id as string);
</script>
<template>
  <h1>{{ book?.title }}</h1>
</template>
