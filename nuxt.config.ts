// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // Add additional keys to .env
  // import keys here
  runtimeConfig: {
    TEST_KEY: process.env.TEST_KEY,
  },
});
