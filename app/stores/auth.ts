import {
  CreateUserDocument,
  LoginUserDocument,
  LogoutUserDocument,
  NewPasswordDocument,
  ResetPasswordDocument,
  VerifyAccountDocument
} from "~/graphql/generated/graphql"

export const useAuthStore = defineStore("auth", () => {
  const { $apollo } = useNuxtApp()

  const create = async (username: string, email: string, password: string) => {
    await $apollo.mutate({
      mutation: CreateUserDocument,
      variables: { data: { username, email, password } }
    })
  }

  const login = async (login: string, password: string) => {
    const sessionStore = useSessionStore()
    const userStore = useUserStore()

    const { data } = await $apollo.mutate({
      mutation: LoginUserDocument,
      variables: { data: { login, password } }
    })
    await sessionStore.getCurrentSession()
    await userStore.getUser()

    return data?.loginUser ?? null
  }

  const logout = async () => {
    const sessionStore = useSessionStore()
    const userStore = useUserStore()

    await $apollo.mutate({ mutation: LogoutUserDocument })

    sessionStore.session = null
    userStore.user = null
    await $apollo.clearStore()
  }

  const verifyAccount = async (token: string) => {
    await $apollo.mutate({ mutation: VerifyAccountDocument, variables: { data: { token } } })
  }

  const resetPassword = async (email: string) => {
    await $apollo.mutate({ mutation: ResetPasswordDocument, variables: { data: { email } } })
  }

  const newPassword = async (password: string, passwordRepeat: string, token: string) => {
    await $apollo.mutate({
      mutation: NewPasswordDocument,
      variables: { data: { password, passwordRepeat, token } }
    })
  }

  return { create, login, logout, verifyAccount, resetPassword, newPassword }
})
