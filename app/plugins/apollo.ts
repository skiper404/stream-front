import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  // так все таки нужно прокидывать куку для ssr
  const headers = useRequestHeaders(["cookie"])

  const apollo = new ApolloClient({
    link: new HttpLink({
      uri: config.public.backendUrl,
      // uri: config.public.localBackendUrl,
      credentials: "include",
      headers
    }),
    cache: new InMemoryCache()
  })

  return {
    provide: {
      apollo
    }
  }
})
