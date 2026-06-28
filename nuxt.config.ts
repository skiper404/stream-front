export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-typed-router", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: { backendUrl: process.env.NUXT_BACKEND_URL, livekitUrl: process.env.NUXT_LIVEKIT_URL }
  },

  vite: {
    server: { allowedHosts: ["skiper.dev"] },
    optimizeDeps: {
      include: ["zod"]
    }
  }
})
