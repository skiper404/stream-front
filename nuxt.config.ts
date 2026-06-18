export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "nuxt-graphql-client", "nuxt-typed-router"],
  css: ["~/assets/css/main.css"],

  "graphql-client": {
    documentPaths: ["./graphql"],
    clients: {
      default: {
        host: process.env.GQL_HOST as string,

        fetchOptions: {
          credentials: "include"
        }
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: ["zod"]
    }
  }
})
