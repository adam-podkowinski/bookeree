export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  app: {
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
