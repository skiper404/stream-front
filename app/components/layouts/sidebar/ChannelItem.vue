<script setup lang="ts">
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import ChannelVerified from "~/components/ui/ChannelVerified.vue"
import LiveBadge from "~/components/ui/LiveBadge.vue"
import type { FindRecommendedChannelsQuery } from "~/graphql/generated/graphql"

const localePath = useLocalePath()

defineProps<{ channel: FindRecommendedChannelsQuery["findRecommendedChannels"][number] }>()
</script>

<template>
  <NuxtLink :to="localePath(`/${channel.username}`)" class="hover:bg-muted/50 flex items-center rounded-2xl">
    <ChannelAvatar :channel="channel" :isLive="channel.stream?.isLive" />
    <h2 class="truncate pr-2 pl-4">{{ channel.username }}</h2>
    <ChannelVerified v-if="channel.isVerified" />
    <div v-if="channel.stream?.isLive" class="ml-auto">
      <LiveBadge />
    </div>
  </NuxtLink>
</template>
