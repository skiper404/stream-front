export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore()
  const session = await sessionStore.getCurrentSession()

  if (session) {
    return navigateTo(`/dashboard/settings`)
  }
})
