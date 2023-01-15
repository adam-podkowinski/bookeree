<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const user = useSupabaseUser();
const { data: length } = useLazyFetch("/api/books/length", {
  key: `books length for ${user.value?.id}`,
  headers: useRequestHeaders(["Cookie"]) as HeadersInit,
});
</script>
<template>
  <div class="grid gap-10">
    <div class="flex gap-8">
      <Icon
        name="material-symbols:waving-hand-rounded"
        class="text-6xl text-amber-300 lg:text-7xl"
      />
      <Icon
        name="ic:sharp-menu-book"
        class="text-6xl text-amber-300 lg:text-7xl"
      />
    </div>
    <h1
      class="flex flex-col gap-3 text-3xl font-bold tracking-wide lg:flex-row lg:items-center lg:text-6xl"
    >
      <p>Welcome back,</p>
      <div class="flex items-center">
        <img
          class="mr-3 h-12 rounded-lg object-contain drop-shadow-xl lg:ml-6"
          :src="user?.identities?.at(0)?.identity_data.avatar_url"
          alt="User"
        />
        <span
          class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
        >
          {{ user?.identities?.at(0)?.identity_data.name.split(" ")[0] }}
        </span>
      </div>
    </h1>
    <p
      v-if="length"
      class="flex flex-col gap-1 text-2xl tracking-wide lg:flex-row lg:gap-3"
    >
      <span>You currently have</span>
      <span class="font-semibold text-amber-300">
        {{ length }} {{ length === 1 ? "book" : "books" }}
      </span>
      <span> in Your personal library. 😁</span>
    </p>
    <div
      class="mb-10 flex w-full flex-col items-stretch gap-8 lg:mb-14 lg:flex-row"
    >
      <NuxtLink class="button" to="/books">
        <Icon name="ph:books-bold" size="1.3em" /> My Books
      </NuxtLink>
      <NuxtLink class="button transition-all" to="/find">
        <Icon name="material-symbols:add" size="1.3em" />
        Add a Book
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.button {
  @apply w-full rounded-xl bg-amber-300 px-8 py-5 text-xl
    font-semibold text-zinc-900 duration-300 hover:-translate-y-0.5 lg:w-auto;
}
</style>
