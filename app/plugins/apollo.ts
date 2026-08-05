import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { OperationTypeNode } from "graphql"
import { createClient } from "graphql-ws"
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs"

export default defineNuxtPlugin(() => {
  const headers = import.meta.server ? useRequestHeaders(["cookie"]) : {}
  const config = useRuntimeConfig()

  const backendUrl = config.public.backendUrl
  const wsUrl = backendUrl.replace(/^http:/, "ws:").replace(/^https:/, "wss:")

  const httpLink = new UploadHttpLink({
    uri: backendUrl,
    credentials: "include", // для клиентского запроса сам браузер пробрасывает
    headers // для серверного я пробрасываю
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsUrl
    })
  )

  const splitLink = ApolloLink.split(
    operation => {
      return operation.operationType === OperationTypeNode.SUBSCRIPTION
    },
    wsLink,
    httpLink
  )

  const apollo = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  })

  return {
    provide: {
      apollo
    }
  }
})
