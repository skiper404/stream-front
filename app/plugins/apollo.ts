import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const headers = import.meta.server ? useRequestHeaders(["cookie"]) : {}

  const apollo = new ApolloClient({
    link: new HttpLink({
      uri: config.public.localBackendUrl,
      credentials: "include", // для клиентского запроса сам браузер пробрасывает
      headers // для серверного я пробрасываю
    }),
    cache: new InMemoryCache()
  })

  return {
    provide: {
      apollo
    }
  }
})
