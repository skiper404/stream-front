<script setup lang="ts">
import type { GetUserQuery } from "~/graphql/generated/graphql"

const props = defineProps<{
  channel: Pick<GetUserQuery["getUser"], "avatar" | "username">
  isLive?: boolean
  size?: "xl" | "2xl"
}>()
</script>

<template>
  <UAvatar
    :src="channel.avatar ? getMediaSrc(channel.avatar) : undefined"
    :alt="channel.username"
    color="neutral"
    :class="['cursor-pointer', { 'ring-2 ring-rose-500': isLive, 'size-20': size === 'xl', 'size-30': size === '2xl' }]"
  />
</template>
