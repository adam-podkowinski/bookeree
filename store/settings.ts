import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  const navOpen = ref(false);
  const toggleNav = () => {
    navOpen.value = !navOpen.value;
  };
  const closeNav = () => {
    navOpen.value = false;
  };

  return { navOpen, toggleNav, closeNav };
});
