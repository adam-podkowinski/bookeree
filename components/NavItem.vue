<script lang="ts" setup>
import { useSettingsStore } from "@/store/settings";

defineProps<{
  title: string;
  icon: string;
  link?: string;
  onClick?: () => void;
}>();

const iconSize = "1.3em";
const iconClass = "hover:animate-ping";
const settings = useSettingsStore();
</script>
<template>
  <NuxtLink
    class="flex cursor-pointer items-center gap-2 rounded-3xl py-5 px-6 text-2xl font-semibold tracking-wide transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:text-amber-200 hover:underline hover:shadow-xl lg:rounded-2xl lg:py-3 lg:px-4 lg:text-xl"
    active-class="bg-amber-200"
    :to="link"
    @click="settings.closeNav(), onClick && onClick()"
  >
    <Icon :name="icon" :size="iconSize" :class="iconClass" />
    {{ title }}
  </NuxtLink>
</template>
