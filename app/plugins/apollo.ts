import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { OperationTypeNode } from "graphql"
import { createClient } from "graphql-ws"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const headers = import.meta.server ? useRequestHeaders(["cookie"]) : {}

  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include", // для клиентского запроса сам браузер пробрасывает
    headers // для серверного я пробрасываю
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: "ws://localhost:4000/graphql"
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
