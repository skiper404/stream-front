<script setup lang="ts">
import type { FindNotificationsByUserQuery } from "~/graphql/generated/graphql"

type Notification = FindNotificationsByUserQuery["findNotificationsByUser"][number]

interface StreamStartPayload {
  username: string
}

const props = defineProps<{ notification: Notification }>()

const payload = props.notification.payload as StreamStartPayload
</script>

<template>
  <h3 class="font-semibold">📺 Не пропустите!</h3>

  <p class="text-muted text-sm">
    Присоединяйтесь к стриму на канале

    <NuxtLink :to="`/${payload.username}`" class="text-primary hover:underline">
      {{ payload.username }}
    </NuxtLink>
  </p>
</template>
