export default defineNuxtRouteMiddleware(async () => {
  const sessionStore = useSessionStore()

  try {
    await sessionStore.getSession()

    if (!sessionStore.session?.id) {
      return navigateTo("/auth/login-user")
    }
  } catch (e) {
    return navigateTo("/auth/login-user")
  }
})
