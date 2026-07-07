export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-typed-router", "@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
      localBackendUrl: process.env.NUXT_LOCAL_BACKEND_URL,
      livekitUrl: process.env.NUXT_PUBLIC_LIVEKIT_URL
    }
  },

  vite: {
    optimizeDeps: {
      include: ["@apollo/client", "@apollo/client/link/subscriptions", "graphql", "graphql-ws", "livekit-client", "zod"]
    }
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "ru", language: "ru-RU", file: "ru.json" }
    ],
    defaultLocale: "en"
  }
})
