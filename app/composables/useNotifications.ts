import {
  ChangeNotificationSettingsDocument,
  FindNotificationsByUserDocument,
  FindUnreadNotificationsCountDocument,
  MarkNotificationsAsReadDocument,
  NotificationAddedDocument,
  RemoveNotificationDocument,
  type FindNotificationsByUserQuery
} from "~/graphql/generated/graphql"

export const useNotification = () => {
  const { $apollo } = useNuxtApp()

  const notifications = useState<FindNotificationsByUserQuery["findNotificationsByUser"]>("notifications", () => [])

  const notificationsCount = useState("notifications-count", () => 0)

  const getNotifications = async () => {
    const { data } = await $apollo.query({ query: FindNotificationsByUserDocument, fetchPolicy: "network-only" })
    notifications.value = data?.findNotificationsByUser ?? []
  }

  const getNotificationsCount = async () => {
    const { data } = await $apollo.query({ query: FindUnreadNotificationsCountDocument, fetchPolicy: "network-only" })

    notificationsCount.value = data?.findUnreadNotificationsCount ?? 0
  }

  const removeNotification = async (id: string) => {
    await $apollo.mutate({ mutation: RemoveNotificationDocument, variables: { id } })

    const notification = notifications.value.find(n => n.id === id)

    if (notification && !notification.isRead) {
      notificationsCount.value--
    }

    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  const markNotificationsAsrRead = async () => {
    await $apollo.mutate({ mutation: MarkNotificationsAsReadDocument })
  }

  const changeNotificationsSettings = async (isEnable: boolean) => {
    await $apollo.mutate({
      mutation: ChangeNotificationSettingsDocument,
      variables: { isEnable },
      fetchPolicy: "network-only"
    })
  }

  const subscribeToNotification = (userId: string) => {
    return $apollo.subscribe({ query: NotificationAddedDocument, variables: { userId } }).subscribe({
      next({ data }) {
        if (!data?.notificationAdded) return

        notifications.value = [data.notificationAdded, ...notifications.value]

        notificationsCount.value++
      }
    })
  }

  return {
    notifications,
    notificationsCount,
    getNotifications,
    getNotificationsCount,
    removeNotification,
    markNotificationsAsrRead,
    changeNotificationsSettings,
    subscribeToNotification
  }
}
