import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const apollo = new ApolloClient({
    link: new HttpLink({
      uri: config.public.backendUrl,
      credentials: "include"
    }),
    cache: new InMemoryCache()
  })

  return {
    provide: {
      apollo
    }
  }
})
