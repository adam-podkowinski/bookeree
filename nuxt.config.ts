export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@vue-macros/nuxt",
  ],
  app: {
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
