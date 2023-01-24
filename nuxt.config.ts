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
    // Nuxt Bug: overriding in definePageMeta doesn't work
    keepalive: true,
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
