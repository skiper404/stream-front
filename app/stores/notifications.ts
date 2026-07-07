import {
  ChangeNotificationSettingsDocument,
  CreateStreamStartDocument,
  CreateVerifyChannelDocument,
  FindNotificationsByUserDocument,
  FindUnreadNotificationsCountDocument,
  MarkNotificationsAsReadDocument,
  RemoveNotificationDocument,
  type FindNotificationsByUserQuery,
  type FindUnreadNotificationsCountQuery
} from "~/graphql/generated/graphql"

export const useNotificationsStore = defineStore("NotificationsStore", () => {
  const { $apollo } = useNuxtApp()

  const isLoading = ref(false)
  const notifications = ref<FindNotificationsByUserQuery["findNotificationsByUser"]>([])
  const count = ref<FindUnreadNotificationsCountQuery["findUnreadNotificationsCount"]>(0)

  const getNotifications = async () => {
    try {
      isLoading.value = true

      const { data } = await $apollo.query({ query: FindNotificationsByUserDocument, fetchPolicy: "network-only" })
      notifications.value = data?.findNotificationsByUser ?? []
      return data?.findNotificationsByUser
    } finally {
      isLoading.value = false
    }
  }

  const getNotificationsCount = async () => {
    const { data } = await $apollo.query({ query: FindUnreadNotificationsCountDocument, fetchPolicy: "network-only" })

    count.value = data?.findUnreadNotificationsCount ?? 0

    return data?.findUnreadNotificationsCount
  }

  const removeNotification = async (id: string) => {
    await $apollo.mutate({ mutation: RemoveNotificationDocument, variables: { id } })
    await getNotifications()
  }

  const markNotifacationsAsrRead = async () => {
    await $apollo.mutate({ mutation: MarkNotificationsAsReadDocument })
    count.value = 0
  }

  const changeNotificationsSettings = async (isEnable: boolean) => {
    const { data } = await $apollo.mutate({
      mutation: ChangeNotificationSettingsDocument,
      variables: { isEnable },
      fetchPolicy: "network-only"
    })
  }

  const createVerifyChannel = async () => {
    await $apollo.mutate({ mutation: CreateVerifyChannelDocument })
    await getNotificationsCount()
  }

  const createStreamStart = async () => {
    await $apollo.mutate({ mutation: CreateStreamStartDocument })
    await getNotificationsCount()
  }

  return {
    notifications,
    count,
    isLoading,
    removeNotification,
    getNotifications,
    getNotificationsCount,
    markNotifacationsAsrRead,
    changeNotificationsSettings,
    createVerifyChannel,
    createStreamStart
  }
})
