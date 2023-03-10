export default defineNuxtConfig({
  modules: [
    "@vue-macros/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  app: {
    // Nuxt Bug: overriding in definePageMeta doesn't work
    keepalive: { include: "add" },
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
