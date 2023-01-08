<template>
  <button class="button">
    <slot />
  </button>
</template>
<style lang="postcss">
.button {
  @apply rounded-lg px-6 py-3 text-xl font-medium tracking-wide transition lg:px-12;
}
</style>
