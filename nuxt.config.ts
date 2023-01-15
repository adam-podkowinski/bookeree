export default defineNuxtConfig({
  modules: [
    "@vue-macros/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  app: {
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
