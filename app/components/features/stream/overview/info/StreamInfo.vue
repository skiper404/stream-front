<script setup lang="ts">
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import ChannelVerified from "~/components/ui/ChannelVerified.vue"
import StreamActions from "./StreamActions.vue"

import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { participants, hasVideoTrack } = useLiveKitRoom()

const viewersCount = computed(() => Math.max(0, participants.value.length - 1))
</script>

<template>
  <UCard variant="soft">
    <h1 class="font-semibold sm:text-xl">
      {{ channel.stream?.title }}
      <UBadge v-if="channel.stream?.category" variant="soft">
        {{ channel.stream.category.title }}
      </UBadge>
    </h1>

    <div class="mt-2 flex items-center gap-2">
      <ChannelAvatar :channel="channel" :isLive="hasVideoTrack" />

      <h2 class="text-lg font-semibold">
        {{ channel.username }}
      </h2>
      <ChannelVerified v-if="channel.isVerified" />

      <div v-if="hasVideoTrack" class="flex items-center gap-2 text-xs font-semibold text-rose-500">
        <Icon name="lucide:user" size="20" />
        {{ viewersCount }} {{ t("stream.viewers") }}
      </div>

      <p v-else class="text-muted">{{ t("stream.offline") }}</p>
    </div>

    <StreamActions :channel="channel" />
  </UCard>
</template>
