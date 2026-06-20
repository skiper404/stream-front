import { ApolloClient, InMemoryCache } from "@apollo/client"
import CreateUploadLink from "apollo-upload-client/UploadHttpLink.mjs"

export default defineNuxtPlugin(nuxtApp => {
  const headers = useRequestHeaders(["cookie"])

  const apollo = new ApolloClient({
    link: new CreateUploadLink({
      uri: "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie: headers.cookie || ""
      }
    }),
    cache: new InMemoryCache()
  })

  return {
    provide: {
      apollo
    }
  }
})
