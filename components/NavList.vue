<script lang="ts" setup>
const iconSize = "1.3em";
const iconClass = "hover:animate-ping";
const open = ref(false);
const close = () => (open.value = false);
const navClass = computed(() =>
  open.value ? "opacity-1" : "max-lg:opacity-0"
);
</script>
<template>
  <nav>
    <button class="lg:hidden" @click="open = !open">
      <transition
        mode="out-in"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
        leave-to-class="opacity-0 rotate-45"
        enter-from-class="opacity-0 rotate-45"
      >
        <Icon v-if="open" name="material-symbols:close" class="text-4xl" />
        <Icon v-else name="ri:menu-3-fill" class="text-4xl" />
      </transition>
    </button>
    <ul
      :class="`lg:opacity-1 fixed left-0 top-0 z-[-1] flex h-screen w-screen flex-col items-center
      justify-center gap-6 bg-amber-300 transition duration-200 lg:static lg:flex
lg:h-full lg:w-full lg:translate-x-0 lg:translate-y-0 lg:flex-row ${navClass}`"
    >
      <li>
        <NavLink :close="close" to="/books">
          <Icon name="ph:books-bold" :size="iconSize" :class="iconClass" />
          My Books
        </NavLink>
      </li>
      <li>
        <NavLink :close="close" to="/add">
          <Icon name="bx:bxs-book-add" :size="iconSize" :class="iconClass" />
          Add a Book
        </NavLink>
      </li>
      <li>
        <NavLink :close="close" to="/logout">
          <Icon name="bx:log-out" :size="iconSize" :class="iconClass" />
          Logout
        </NavLink>
      </li>
    </ul>
  </nav>
</template>
