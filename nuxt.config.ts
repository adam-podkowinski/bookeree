// TODO: use redirect from supabase nuxt plugin
export default defineNuxtConfig({
  modules: [
    "@vue-macros/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/dashboard",
      exclude: ["/*"],
    },
  },
  app: {
    // Nuxt Bug: overriding in definePageMeta doesn't work
    keepalive: { include: "add" },
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
