// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    issuer: process.env.ISSUER,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@sidebase/nuxt-auth",
  ],
  app: {
    pageTransition: {
      mode: "out-in",
      name: "page",
    },
  },
});
