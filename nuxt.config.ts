export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-typed-router"],
  css: ["~/assets/css/main.css"],

  vite: {
    optimizeDeps: {
      include: ["zod"]
    }
  }
})
