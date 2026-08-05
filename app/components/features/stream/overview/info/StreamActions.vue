<script setup lang="ts">
import { type FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import FollowButton from "./FollowButton.vue"
import SupportButton from "./SupportButton.vue"
import ShareActions from "./ShareActions.vue"
import StreamSettings from "../../settings/StreamSettings.vue"
import FollowersCount from "./FollowersCount.vue"

defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()
</script>

<template>
  <div class="mt-4 flex flex-wrap items-center gap-3">
    <FollowButton :channel="channel" />
    <FollowersCount :channel="channel" />
    <SupportButton :channel="channel" />
    <StreamSettings :channel="channel" />
    <ShareActions :channel="channel" />
  </div>
</template>
