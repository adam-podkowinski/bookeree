<script setup></script>
<template>
  <div class="min-h-screen bg-zinc-800 text-neutral-100">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition duration-300;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}
</style>
