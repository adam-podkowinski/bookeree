<template>
  <div class="min-h-screen bg-zinc-900 text-neutral-100">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="postcss">
.x-padding {
  @apply px-8 md:px-28 lg:px-20 xl:px-40;
}
.page-enter-active,
.page-leave-active,
.page-appear-active {
  @apply transition-all duration-200;
}
.page-enter-from,
.page-leave-to,
.page-appear-from {
  @apply translate-y-1 opacity-0;
}
</style>
