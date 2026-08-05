<script setup lang="ts">
import ChannelItem from "./ChannelItem.vue"

const { findRecommendedChannels } = useChannel()

const { data: channels } = useAsyncData("recommendedChannels", () => findRecommendedChannels(), { default: () => [] })
</script>

<template>
  <ChannelItem v-for="channel in channels" :channel="channel" :key="channel.id" />
</template>
