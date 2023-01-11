<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />
    <main class="x-padding flex-auto">
      <slot />
    </main>
    <footer class="mt-24 flex-shrink-0 bg-zinc-800/50 px-12 py-12">
      Bookeree &copy;
    </footer>
  </div>
</template>
