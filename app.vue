<template>
  <div class="min-h-screen bg-zinc-800 text-neutral-100">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="postcss">
.x-padding {
  @apply px-8 md:px-28 lg:px-20 xl:px-36;
}
.page-enter-active,
.page-leave-active {
  @apply transition duration-200;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}
</style>
