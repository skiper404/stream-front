<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import MessageItem from "./MessageItem.vue"

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { findSponsorsByChannel } = useSponsorship()
const { messages, findChatMessagesByStream, subscribeToMessage, clearMessages } = useChat()

const { data: sponsors } = useAsyncData(`${props.channel.id}-sponsors`, () => findSponsorsByChannel(props.channel.id), {
  default: () => []
})

await findChatMessagesByStream(props.channel.stream?.id!)
const subscription = subscribeToMessage(props.channel.stream?.id!)

onUnmounted(() => {
  subscription.unsubscribe()
  clearMessages()
})

const sponsorsIds = computed(() => new Set(sponsors.value.map(sponsor => sponsor.user.id)))
</script>

<template>
  <div class="scrollbar-thumb-primary flex min-h-0 flex-1 scrollbar-thin flex-col gap-2 overflow-y-scroll">
    <div class="flex-1"></div>
    <MessageItem
      v-for="message in messages"
      :message="message"
      :key="message.id"
      :isSponsor="sponsorsIds.has(message.user.id)"
    />
  </div>
</template>
