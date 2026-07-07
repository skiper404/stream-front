<script setup lang="ts">
import { useNotificationsStore } from "~/stores/notifications"
import NotificationsList from "./NotificationsList.vue"

const notificationsStore = useNotificationsStore()

onMounted(async () => {
  await notificationsStore.getNotificationsCount()
})

const displayCount = computed(() => (notificationsStore.count > 10 ? "+9" : notificationsStore.count))
</script>

<template>
  <div class="relative">
    <UPopover>
      <UButton color="neutral" variant="subtle" icon="lucide:bell" />
      <div class="bg-secondary absolute -top-1 left-5 w-6 rounded-full text-center text-xs font-semibold text-white">
        {{ displayCount }}
      </div>
      <template #content>
        <NotificationsList />
      </template>
    </UPopover>
  </div>
</template>
