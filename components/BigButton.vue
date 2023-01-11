<template>
  <button class="button">
    <slot />
  </button>
</template>
<style lang="postcss">
.button {
  @apply rounded-xl px-6 py-3 text-xl font-medium tracking-wide transition
  hover:underline lg:px-16 lg:py-4;
}
</style>
