<script setup lang="ts">
import NotificationItem from "./NotificationItem.vue"

const toast = useToast()
const { t } = useI18n()
const { removeNotification, notifications } = useNotification()

const removingNotificationId = ref<string | null>(null)

const remove = async (id: string) => {
  try {
    removingNotificationId.value = id
    await removeNotification(id)
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    removingNotificationId.value = null
  }
}
</script>

<template>
  <div class="relative w-80 rounded-xl p-2">
    <div class="p-2 text-center font-semibold">{{ t("notifications.title") }}</div>

    <div
      v-if="notifications.length"
      class="scrollbar-thumb-primary/50 scrollbar-track-primary/10 max-h-screen scrollbar-thin space-y-2 overflow-y-auto"
    >
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="bg-default hover:bg-muted/50 relative rounded-lg p-4 transition-colors"
      >
        <UButton
          icon="lucide:x"
          variant="ghost"
          color="neutral"
          size="xs"
          :loading="removingNotificationId === notification.id"
          class="hover:text-primary absolute top-2 right-2 cursor-pointer"
          @click="remove(notification.id)"
        />

        <NotificationItem :notification="notification" />
      </div>
    </div>
    <div v-else class="flex h-14 items-center justify-center">{{ t("notifications.empty") }}</div>
  </div>
</template>
