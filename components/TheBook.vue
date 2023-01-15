<script setup lang="ts">
import type { Book } from "@/types";
defineProps<Book>();
</script>
<template>
  <div
    class="relative flex h-full flex-col gap-3 rounded-lg border-2 border-zinc-700/60 bg-zinc-800 p-4 shadow-lg shadow-zinc-800/30 transition hover:-translate-y-0.5 hover:bg-zinc-600/40"
  >
    <NuxtLink :to="`/books/${id}`">
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
    </NuxtLink>
    <div class="mt-auto cursor-auto rounded-lg bg-zinc-900/30 p-4">
      <div
        class="mb-4 flex items-center justify-center gap-3 text-center text-xl font-semibold"
      >
        <label for="status">Status: </label>
        <select
          id="status"
          name="status"
          class="rounded-lg bg-orange-300 p-0.5 text-zinc-900"
        >
          <option value="read">Read</option>
          <option value="reading">Reading</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <button
        class="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white shadow-md shadow-red-300/10 transition duration-300 hover:bg-rose-600 hover:shadow-red-500/10"
      >
        Remove
      </button>
    </div>
  </div>
</template>
