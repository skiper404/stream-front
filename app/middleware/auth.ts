export default defineNuxtRouteMiddleware(async () => {
  const sessionStore = useSessionStore()

  if (!sessionStore.session) {
    await sessionStore.getSession()
  }

  if (!sessionStore.session) {
    return navigateTo("/auth/login-user")
  }
})
