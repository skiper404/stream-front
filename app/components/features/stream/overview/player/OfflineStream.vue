<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
const { t } = useI18n()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()
</script>

<template>
  <div
    class="relative aspect-video rounded-xl bg-cover"
    :style="{ 'background-image': `url(${getMediaSrc(channel.stream?.thumbnailUrl!)})` }"
  >
    <div
      class="text-muted absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-xl bg-black opacity-70"
    >
      <Icon name="lucide:wifi-off" size="30" />
      <p>{{ t("stream.offline_user", { username: channel.username }) }}</p>
    </div>
  </div>
</template>
