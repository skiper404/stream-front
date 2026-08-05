export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore()
  const localePath = useLocalePath()
  const session = await sessionStore.getCurrentSession()

  if (session) {
    return navigateTo(localePath(`/dashboard/settings`))
  }
})
