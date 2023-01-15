<script setup lang="ts">
import { Book } from "@/utils/Book";
defineProps<Book>();
</script>
<template>
  <NuxtLink
    class="relative flex h-full flex-col gap-3 rounded-lg border-2 border-zinc-700/60
    bg-zinc-800 p-4 shadow-lg shadow-zinc-800/30 hover:bg-zinc-600/40 transition"
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
    <div
      class="mt-2 cursor-auto rounded-lg bg-zinc-900/50 p-4"
      @click.stop.prevent
    >
      <div
        class="mb-4 flex items-center justify-center gap-3 text-center text-xl font-semibold"
      >
        <label for="status">Status: </label>
        <select
          id="status"
          name="status"
          class="rounded-lg bg-amber-300 p-0.5 text-zinc-900"
        >
          <option value="read">Read</option>
          <option value="reading">Reading</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <button
        class="pointer-events-auto w-full rounded-lg bg-red-400 py-3 font-semibold text-zinc-900 shadow-lg shadow-amber-300/10 transition duration-300 hover:bg-red-500 hover:shadow-red-500/10"
        @click.stop.prevent
      >
        Remove
      </button>
    </div>
  </NuxtLink>
</template>
