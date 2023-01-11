<script lang="ts" setup>
import { useSettingsStore } from "@/store/settings";

interface NavOptions {
  title: string;
  icon: string;
  link?: string;
  onClick?: () => void;
}

const settings = useSettingsStore();
const session = useSession();
const navClass = computed(() =>
  settings.navOpen ? "opacity-1" : "max-lg:opacity-0 max-lg:pointer-events-none"
);

const loggedInOptions: NavOptions[] = [
  { title: "My Books", icon: "ph:books-bold", link: "/books" },
  { title: "Add a Book", icon: "bx:bxs-book-add", link: "/add" },
  { title: "Profile", icon: "carbon:user-avatar-filled", link: "/profile" },
  {
    title: "Logout",
    icon: "fa-solid:sign-out-alt",
    onClick: async () => {
      await fetch(`${useRuntimeConfig().public.issuer}/v2/logout`, {
        credentials: "include",
        mode: "no-cors",
      });
      await session.signOut({ callbackUrl: "/" });
    },
  },
];

const loggedOffOptions = computed<NavOptions[]>(() => [
  {
    title: "Sign In",
    icon: "carbon:two-factor-authentication",
    onClick: () => session.signIn("auth0", { callbackUrl: "/" }),
  },
  {
    title: "Sign Up",
    icon: "fluent-mdl2:signin",
    onClick: () => session.signIn("auth0", { callbackUrl: "/" }),
  },
]);

const options = computed(() => {
  return session.status.value === "authenticated"
    ? loggedInOptions
    : loggedOffOptions.value;
});
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
      <li v-for="{ icon, link, title, onClick } of options" :key="link">
        <NavItem :icon="icon" :link="link" :title="title" :on-click="onClick" />
      </li>
    </ul>
  </nav>
</template>
