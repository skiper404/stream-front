<script setup lang="ts">
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import LiveBadge from "~/components/ui/LiveBadge.vue"

import type { GetUserQuery } from "~/graphql/generated/graphql"

const props = defineProps<{
  url: string | null | undefined
  user: Pick<GetUserQuery["getUser"], "username" | "avatar">
  isLive: boolean
}>()
const color = ref("")

onMounted(() => {
  color.value = getRandomColor()
})

const src = computed(() => (props.url ? getMediaSrc(props.url) : undefined))
</script>

<template>
  <div class="group relative aspect-video cursor-pointer">
    <div
      class="absolute inset-0 rounded-xl m-0.5 transition-all group-hover:-translate-x-1 group-hover:translate-y-1"
      :style="{ backgroundColor: color }"
    ></div>

    <div class="relative h-full transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
      <NuxtImg v-if="url" :src="src" :alt="user.username" class="w-full rounded-xl object-cover" />

      <div v-else class="bg-accented flex h-full items-center justify-center rounded-xl">
        <ChannelAvatar :channel="user" :isLive="isLive" />
      </div>

      <div v-if="isLive" class="absolute top-2 right-2 z-10">
        <LiveBadge />
      </div>
    </div>
  </div>
</template>
