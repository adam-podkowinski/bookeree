<script setup>
import { useSettingsStore } from "@/store/settings";
const settings = useSettingsStore();
const user = useSupabaseUser();
</script>
<template>
  <header
    class="x-padding sticky top-0 z-[999] mb-10 flex items-center justify-between bg-amber-300 py-5 text-zinc-800 shadow-md shadow-amber-300/5 lg:py-7"
  >
    <NuxtLink
      :to="user ? '/dashboard' : '/'"
      class="flex items-center gap-2 text-3xl font-bold tracking-tight transition-transform duration-200 hover:-translate-y-0.5"
      @click="settings.closeNav"
    >
      <Icon name="fa6-solid:book" />
      Bookeree
    </NuxtLink>
    <NavList />
  </header>
</template>
