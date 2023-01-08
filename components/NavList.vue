<script lang="ts" setup>
import { useSettingsStore } from "@/store/settings";
const iconSize = "1.3em";
const iconClass = "hover:animate-ping";
const settings = useSettingsStore();
const navClass = computed(() =>
  settings.navOpen ? "opacity-1" : "max-lg:opacity-0 max-lg:pointer-events-none"
);
</script>
<template>
  <nav>
    <button class="lg:hidden" @click="settings.toggleNav">
      <transition
        mode="out-in"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
        leave-to-class="opacity-0 rotate-45"
        enter-from-class="opacity-0 rotate-45"
      >
        <Icon
          v-if="settings.navOpen"
          name="material-symbols:close"
          class="text-4xl"
        />
        <Icon v-else name="ri:menu-3-fill" class="text-4xl" />
      </transition>
    </button>
    <ul
      :class="`lg:opacity-1 fixed left-0 top-0 z-[-1] flex h-screen w-screen flex-col items-center
      justify-center gap-4 bg-amber-300 transition duration-200 lg:static lg:flex
lg:h-full lg:w-full lg:translate-x-0 lg:translate-y-0 lg:flex-row ${navClass}`"
    >
      <li>
        <NavLink to="/books">
          <Icon name="ph:books-bold" :size="iconSize" :class="iconClass" />
          My Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/add">
          <Icon name="bx:bxs-book-add" :size="iconSize" :class="iconClass" />
          Add a Book
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout">
          <Icon
            name="carbon:user-avatar-filled"
            :size="iconSize"
            :class="iconClass"
          />
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" class="hover:bg-red-500 hover:text-neutral-100">
          <Icon
            name="fa-solid:sign-out-alt"
            :size="iconSize"
            :class="iconClass"
          />
          Logout
        </NavLink>
      </li>
    </ul>
  </nav>
</template>
