<script setup lang="ts">
import { Book } from "@/utils/Book";
defineProps<Book>();
</script>
<template>
  <NuxtLink
    class="relative flex h-full flex-col gap-3 rounded-lg border-2 border-zinc-700/60 bg-zinc-800 p-4 shadow-lg shadow-zinc-800/30"
    :to="`/books/${id}`"
  >
    <div>
      <img
        :src="thumbnail"
        :alt="title"
        class="float-left mr-4 h-40 rounded-lg border-amber-300 object-cover shadow-lg shadow-zinc-900/50"
      />
      <div class="tracking-wide text-orange-100">
        <p v-if="averageRating" class="text-xl font-bold text-yellow-300">
          {{ averageRating && `⭐ ${averageRating}/5` }}
        </p>
        <h1 class="text-xl font-semibold tracking-wide">
          {{ title }}
        </h1>
      </div>
      <h2 class="mt-1 text-lg tracking-wide text-orange-100/80">
        <span v-for="author in authors" :key="author">{{ author }} </span>
      </h2>
    </div>
    <div class="mt-2 rounded-lg bg-zinc-900/50 p-4">
      <h2 class="mb-4 text-center text-xl font-semibold text-red-400">
        Status: Unread
      </h2>
      <button
        class="w-full rounded-lg bg-amber-300 py-3 font-semibold text-zinc-900 shadow-lg shadow-amber-300/10 transition duration-300 hover:bg-green-500 hover:shadow-green-500/10"
      >
        Read
      </button>
    </div>
  </NuxtLink>
</template>
