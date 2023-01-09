<template>
  <div class="text-center">
    <div class="flex flex-col items-center justify-center gap-12 text-center">
      <div class="flex gap-10">
        <div>
          <Icon
            name="material-symbols:waving-hand-rounded"
            class="text-7xl text-amber-300 lg:text-8xl"
          />
        </div>
        <div>
          <Icon
            name="ic:sharp-menu-book"
            class="text-7xl text-amber-300 lg:text-8xl"
          />
        </div>
      </div>
      <h1 class="text-3xl font-bold leading-tight tracking-wide lg:text-6xl">
        Welcome to the
        <div
          class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
        >
          <Icon name="fa6-solid:book" class="text-amber-300" />
          Bookeree!
        </div>
      </h1>
      <div
        class="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row"
      >
        <BigButton
          class="w-full bg-gradient-to-r from-amber-300 to-orange-400 text-zinc-900 shadow-xl shadow-orange-400/20 duration-1000 hover:shadow-none lg:w-auto"
          >Sign Up</BigButton
        >
        <BigButton
          class="w-full border-4 border-orange-300 bg-orange-300/10 hover:bg-orange-300 hover:text-zinc-900 lg:w-auto"
          >Login</BigButton
        >
      </div>
    </div>
    <main class="mt-12 lg:mt-20">
      <h2 class="text-xl font-semibold lg:text-3xl">
        What can you do with Bookeree?
      </h2>
      <div
        class="mt-6 grid grid-cols-1 gap-6 px-2 text-start lg:mt-10 lg:grid-cols-2 lg:gap-12 lg:px-24"
      >
        <div class="perk">
          <Icon name="ph:books-bold" size="3rem" class="text-amber-300" />
          Keep all your books in one place
        </div>
        <div class="perk">
          <Icon name="ic:baseline-search" size="3rem" class="text-blue-500" />
          Find new material to read
        </div>
        <div class="perk">
          <Icon
            name="material-symbols:star"
            size="3rem"
            class="text-yellow-300"
          />
          Rate books from 1-5 stars
        </div>
        <div class="perk">
          <Icon
            name="material-symbols:cloud"
            size="3rem"
            class="text-sky-300"
          />
          Secure all your data in a cloud
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="postcss">
.perk {
  @apply grid gap-6 rounded-lg border-2 border-amber-300 bg-zinc-800 px-8 py-12 text-justify
  text-lg font-medium tracking-wide shadow-2xl shadow-amber-300/10 lg:px-16 lg:text-2xl;
}
</style>
