<script lang="ts" setup>
import { useSettingsStore } from "@/store/settings";

interface NavOptions {
  title: string;
  icon: string;
  link?: string;
  onClick?: () => void;
}

const settings = useSettingsStore();
const session = useSupabaseAuthClient();
const user = useSupabaseUser();
const navClass = computed(() =>
  settings.navOpen ? "opacity-1" : "max-lg:opacity-0 max-lg:pointer-events-none"
);

const signInWithGoogle = () =>
  session.auth.signInWithOAuth({ provider: "google" });

const signOut = async () => {
  await session.auth.signOut();
  // Needs a timeout to update user on /
  setTimeout(() => navigateTo("/", { replace: true }), 200);
};

const loggedInOptions = computed<NavOptions[]>(() => [
  { title: "My Books", icon: "ph:books-bold", link: "/books" },
  { title: "Add a Book", icon: "material-symbols:add", link: "/add" },
  { title: "Profile", icon: "carbon:user-avatar-filled", link: "/profile" },
  {
    title: "Logout",
    icon: "fa-solid:sign-out-alt",
    onClick: signOut,
  },
]);

const loggedOffOptions = computed<NavOptions[]>(() => [
  {
    title: "Sign In",
    icon: "carbon:two-factor-authentication",
    onClick: signInWithGoogle,
  },
  {
    title: "Sign Up",
    icon: "fluent-mdl2:signin",
    onClick: signInWithGoogle,
  },
]);

const options = computed<NavOptions[]>(() => {
  return user.value ? loggedInOptions.value : loggedOffOptions.value;
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
      <ClientOnly>
        <li v-for="option of options" :key="option.link">
          <NavItem v-bind="option" />
        </li>
      </ClientOnly>
    </ul>
  </nav>
</template>
