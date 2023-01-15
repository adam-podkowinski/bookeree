<script setup lang="ts">
const route = useRoute();
const { data: book } = useBook(route.params.id[0]);
</script>
<template>
  <h1>{{ book?.id }}</h1>
</template>
