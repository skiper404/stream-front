<script setup lang="ts">
import type { FindNotificationsByUserQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
const localePath = useLocalePath()

type Notification = FindNotificationsByUserQuery["findNotificationsByUser"][number]

interface NewSponsorPayload {
  username: string
}

const props = defineProps<{ notification: Notification }>()

const payload = props.notification.payload as NewSponsorPayload
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center gap-1">
      <Icon name="lucide:medal" class="text-primary" />
      <h3 class="font-semibold">{{ t("notifications.new_sponsor.title") }}</h3>
    </div>
    <p class="text-muted text-sm">
      <NuxtLink :to="localePath(`/${payload.username}`)" class="text-primary hover:underline">
        {{ payload.username }}
      </NuxtLink>
      {{ t("notifications.new_sponsor.description") }}
    </p>
  </div>
</template>
