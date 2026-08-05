export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore()
  const localePath = useLocalePath()

  await sessionStore.getCurrentSession()

  if (!sessionStore.session) {
    return navigateTo(localePath("/account/login-user"))
  }
})
