<script setup lang="ts">
import type { FindNotificationsByUserQuery } from "~/graphql/generated/graphql.js"

import VerifiedChannelNotification from "./VerifiedChannelNotification.vue"
import StreamStartNotification from "./StreamStartNotification.vue"
import NewSponsorshipNotification from "./NewSponsorshipNotification.vue"
import EnableTwoFactorsNotification from "./EnableTwoFactorsNotification.vue"
import NewFollowerNotification from "./NewFollowerNotification.vue"

type Notification = FindNotificationsByUserQuery["findNotificationsByUser"][number]

const props = defineProps<{
  notification: Notification
}>()

const componentMap = {
  STREAM_START: StreamStartNotification,
  VERIFIED_CHANNEL: VerifiedChannelNotification,
  ENABLE_TWO_FACTORS: EnableTwoFactorsNotification,
  NEW_FOLLOWER: NewFollowerNotification,
  NEW_SPONSORSHIP: NewSponsorshipNotification
}
</script>

<template>
  <component :is="componentMap[notification.type]" :notification="notification" />
</template>
