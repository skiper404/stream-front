import {
  ChangeEmailDocument,
  ChangePasswordDocument,
  ChangeProfileAvatarDocument,
  ChangeProfileBioDocument,
  ChangeProfileUsernameDocument,
  GetUserDocument,
  RemoveProfileAvatarDocument,
  type GetUserQuery
} from "~/graphql/generated/graphql"

export const useUserStore = defineStore("userStore", () => {
  const { $apollo } = useNuxtApp()

  const user = ref<GetUserQuery["getUser"] | null>(null)

  const getUser = async () => {
    const { data } = await $apollo.query({ query: GetUserDocument, fetchPolicy: "network-only" })

    user.value = data?.getUser ?? null

    return data?.getUser ?? null
  }

  const changeEmail = async (email: string) => {
    await $apollo.mutate({ mutation: ChangeEmailDocument, variables: { data: { email } } })
    await getUser()
  }

  const changePassword = async (newPassword: string, oldPassword: string) => {
    await $apollo.mutate({
      mutation: ChangePasswordDocument,
      variables: { data: { newPassword, oldPassword } }
    })
  }

  const changeAvatar = async (avatar: File) => {
    await $apollo.mutate({ mutation: ChangeProfileAvatarDocument, variables: { avatar } })
    await getUser()
  }

  const removeAvatar = async () => {
    await $apollo.mutate({ mutation: RemoveProfileAvatarDocument })
    await getUser()
  }

  const changeUsername = async (username: string) => {
    await $apollo.mutate({ mutation: ChangeProfileUsernameDocument, variables: { data: { username } } })
    await getUser()
  }

  const changeBio = async (bio: string) => {
    await $apollo.mutate({
      mutation: ChangeProfileBioDocument,
      variables: { data: { bio } }
    })
    await getUser()
  }

  return {
    user,
    getUser,
    changeEmail,
    changePassword,
    changeUsername,
    changeAvatar,
    removeAvatar,
    changeBio
  }
})
