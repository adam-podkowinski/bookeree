<script lang="ts" setup>
defineProps<{ close: () => void }>();
</script>
<template>
  <NuxtLink
    class="flex items-center gap-2 rounded-3xl py-5 px-6 text-2xl font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-amber-200 hover:shadow-xl lg:rounded-2xl lg:py-3 lg:px-4 lg:text-xl"
    active-class="bg-amber-200"
    @click="close"
  >
    <slot />
  </NuxtLink>
</template>
