<script setup></script>
<template>
  <div class="min-h-screen bg-zinc-900 text-neutral-100">
    <div
      class="grid h-16 w-full place-items-center bg-amber-300 text-center text-3xl text-zinc-900"
    >
      Hello
    </div>
    <button
      class="m-6 rounded-2xl bg-amber-300 py-4 px-6 text-2xl font-medium uppercase tracking-wide text-zinc-900 shadow shadow-amber-300/30 transition hover:bg-amber-400 hover:shadow-none"
    >
      Click me
    </button>
    <NuxtLink
      active-class="text-amber-300"
      class="text-xl font-medium tracking-wide transition-colors"
      to="/books"
      >Hello</NuxtLink
    >
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
