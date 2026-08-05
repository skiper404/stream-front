<script setup lang="ts">
import type { FindNotificationsByUserQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
const localePath = useLocalePath()

type Notification = FindNotificationsByUserQuery["findNotificationsByUser"][number]

interface StreamStartPayload {
  username: string
}

const props = defineProps<{ notification: Notification }>()

const payload = props.notification.payload as StreamStartPayload
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center gap-1">
      <Icon name="heroicons:signal-16-solid" class="text-primary" />
      <h3 class="font-semibold">{{ t("notifications.stream_start.title") }}</h3>
    </div>
    <p class="text-muted text-sm">
      <NuxtLink :to="localePath(`/${payload.username}`)" class="text-primary hover:underline">
        {{ payload.username }}
      </NuxtLink>
      {{ t("notifications.stream_start.description") }}
    </p>
  </div>
</template>
