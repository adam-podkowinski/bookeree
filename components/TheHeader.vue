<script setup>
import { useSettingsStore } from "@/store/settings";
const settings = useSettingsStore();
</script>
<template>
  <header
    class="x-padding sticky top-0 mb-16 flex items-center justify-between bg-amber-300 py-7 text-zinc-800 shadow-md shadow-amber-300/5"
  >
    <NuxtLink
      to="/"
      class="flex items-center gap-2 text-3xl font-bold tracking-tight transition-transform duration-200 hover:-translate-y-0.5"
      @click="settings.closeNav"
    >
      <Icon name="fa6-solid:book" />
      Bookeree
    </NuxtLink>
    <NavList />
  </header>
</template>
