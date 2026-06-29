export default defineNuxtRouteMiddleware(async () => {
  const sessionStore = useSessionStore()

  try {
    await sessionStore.getSession()
    return navigateTo("/")
  } catch {
    return
  }
})
