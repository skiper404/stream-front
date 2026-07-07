export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore()
  await sessionStore.getCurrentSession()

  if (!sessionStore.session) {
    return navigateTo("/account/login-user")
  }
})
