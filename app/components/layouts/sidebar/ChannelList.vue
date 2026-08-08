<script setup lang="ts">
import type { FindMyFollowingsQuery } from "~/graphql/generated/graphql.js"
import ChannelItem from "./ChannelItem.vue"

defineProps<{ heading: string; channels: FindMyFollowingsQuery["findMyFollowings"][number]["following"][] }>()
</script>

<template>
  <h3 class="font-semibold">{{ heading }}</h3>
  <ChannelItem v-for="channel in channels" :channel="channel" :key="channel.id" />
</template>
