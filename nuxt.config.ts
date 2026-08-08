export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-typed-router", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxt/image"],
  css: ["~/assets/css/main.css"],

  colorMode: { preference: "dark", fallback: "dark" },

  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_BACKEND_URL,
      livekitUrl: process.env.NUXT_LIVEKIT_URL,
      r2MediaUrl: process.env.NUXT_R2_URL
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        "@apollo/client",
        "@apollo/client/link/subscriptions",
        "@vueuse/core",
        "apollo-upload-client/UploadHttpLink.mjs",
        "graphql",
        "graphql-ws",
        "livekit-client",
        "vue3-emoji-picker",
        "zod"
      ]
    }
  },

  i18n: {
    langDir: "locales",
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "English" },
      { code: "ru", language: "ru-RU", file: "ru.json", name: "Русский" }
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"
    }
  }
})
