import {
  ClearSessionCookieDocument,
  GetCurrentSessionDocument,
  GetUserSessionsDocument,
  RemoveSessionDocument,
  type GetCurrentSessionQuery,
  type GetUserSessionsQuery
} from "~/graphql/generated/graphql"

export const useSessionStore = defineStore("session", () => {
  const { $apollo } = useNuxtApp()

  const session = ref<GetCurrentSessionQuery["getCurrentSession"] | null>(null)
  const sessions = ref<GetUserSessionsQuery["getUserSessions"] | null>(null)

  const getCurrentSession = async () => {
    const { data } = await $apollo.query({ query: GetCurrentSessionDocument, fetchPolicy: "network-only" })
    session.value = data?.getCurrentSession ?? null

    return data?.getCurrentSession
  }

  const getSessions = async () => {
    const { data } = await $apollo.query({ query: GetUserSessionsDocument, fetchPolicy: "network-only" })
    sessions.value = data?.getUserSessions ?? null
  }

  const clearSessionCookie = async () => {
    await $apollo.mutate({ mutation: ClearSessionCookieDocument })
  }

  const removeSession = async (id: string) => {
    await $apollo.mutate({
      mutation: RemoveSessionDocument,
      variables: { id }
    })
  }

  return { session, sessions, getCurrentSession, getSessions, clearSessionCookie, removeSession }
})
