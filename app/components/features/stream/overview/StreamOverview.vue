<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import StreamVideo from "./player/StreamVideo.vue"
import StreamInfo from "./info/StreamInfo.vue"
import AboutChannel from "./info/AboutChannel.vue"
import ChannelSponsors from "./info/ChannelSponsors.vue"

import LiveChat from "../../chat/live/LiveChat.vue"

const { connect, disconnect } = useLiveKitRoom()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { generateStreamToken } = useStream()

const { data: token } = await useAsyncData(`streamToken-${props.channel.id}`, () =>
  generateStreamToken(props.channel.id)
)

onMounted(async () => {
  if (token.value?.token) {
    await connect(token.value.token)
  }
})

onUnmounted(() => {
  disconnect()
})

onMounted(() => {
  console.log("StreamOverview mounted")
})

onUnmounted(() => {
  console.log("StreamOverview unmounted")
  disconnect()
})
</script>

<template>
  <div class="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-7">
    <div class="col-span-1 flex flex-col gap-2 lg:col-span-5">
      <StreamVideo :channel="channel" />
      <StreamInfo :channel="channel" />
      <AboutChannel :channel="channel" />
      <ChannelSponsors :channel="channel" />
    </div>
    <div class="col-span-1 lg:col-span-2">
      <div class="sticky top-20 lg:h-[calc(100vh-6rem)]">
        <LiveChat :channel="channel" :chat-mode="channel.stream?.chatMode!" />
      </div>
    </div>
  </div>
</template>
