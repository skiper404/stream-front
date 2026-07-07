<script setup lang="ts">
import { useNotificationsStore } from "~/stores/notifications"
import NotificationItem from "./NotificationItem.vue"
import AppLoader from "~/components/ui/elements/AppLoader.vue"

const toast = useToast()
const notificationsStore = useNotificationsStore()

onMounted(async () => {
  await notificationsStore.getNotifications()
  await notificationsStore.markNotifacationsAsrRead()
})

const removeNotification = async (id: string) => {
  await notificationsStore.removeNotification(id)
  toast.add({ title: "Notification removed!" })
}
</script>

<template>
  <div class="bg-accented/20 relative w-80 rounded-xl p-2">
    <div class="p-2 text-center font-semibold">Уведомления</div>

    <AppLoader v-if="notificationsStore.isLoading" />

    <div
      v-else-if="notificationsStore.notifications.length"
      class="scrollbar-thumb-primary/50 scrollbar-track-primary/10 max-h-screen scrollbar-thin space-y-2 overflow-y-auto"
    >
      <div
        v-for="notification in notificationsStore.notifications"
        :key="notification.id"
        class="bg-default hover:bg-muted/50 relative rounded-lg p-4 transition-colors"
      >
        <UButton
          icon="lucide:x"
          variant="ghost"
          color="neutral"
          size="xs"
          class="hover:text-primary absolute top-2 right-2 cursor-pointer"
          @click="removeNotification(notification.id)"
        />

        <NotificationItem :notification="notification" />
      </div>
    </div>
    <div v-else class="flex h-14 items-center justify-center">Новых уведомлений нет</div>
  </div>
</template>
