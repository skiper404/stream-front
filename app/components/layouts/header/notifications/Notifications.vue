<script setup lang="ts">
import NotificationsList from "./NotificationsList.vue"
const userStore = useUserStore()
const MAX_BADGE_COUNT = 9

const {
  notifications,
  notificationsCount,
  markNotificationsAsrRead,
  subscribeToNotification,
  getNotifications,
  getNotificationsCount
} = useNotification()

if (userStore.user) {
  await getNotifications()
  await getNotificationsCount()

  const subscription = subscribeToNotification(userStore.user?.id)

  onUnmounted(() => {
    subscription.unsubscribe()
  })
}

const displayCount = computed(() =>
  notificationsCount.value > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : notificationsCount.value
)

const onOpen = async (open: boolean) => {
  if (!open) return

  notificationsCount.value = 0

  notifications.value = notifications.value.map(notification => ({
    ...notification,
    isRead: true
  }))

  await markNotificationsAsrRead()
}
</script>

<template>
  <div class="relative">
    <UPopover @update:open="onOpen">
      <UButton color="neutral" variant="subtle" icon="lucide:bell" />
      <div class="bg-primary absolute -top-1 left-5 w-6 rounded-full text-center text-xs font-semibold text-white">
        {{ displayCount }}
      </div>
      <template #content>
        <NotificationsList />
      </template>
    </UPopover>
  </div>
</template>
