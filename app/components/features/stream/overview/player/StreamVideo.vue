<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import OfflineStream from "./OfflineStream.vue"
import FullscreenControl from "./FullscreenControl.vue"
import VolumeControl from "./VolumeControl.vue"

defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { audioTrack, videoTrack, hasVideoTrack, hasAudioTrack, isConnected } = useLiveKitRoom()
const { isFullscreen, toggleFullscreen, playerRef } = useFullscreen()
const { toggleMute, volume, audioRef } = useVolume()

const videoRef = ref<HTMLVideoElement | null>(null)

watch(
  videoTrack,
  (track, prevTrack) => {
    prevTrack?.detach()
    if (!track || !videoRef.value) return
    track.attach(videoRef.value)
  },
  { immediate: true }
)

watch(
  audioTrack,
  (track, prevTrack) => {
    prevTrack?.detach()
    if (!track || !audioRef.value) return
    track.attach(audioRef.value)
  },
  { immediate: true }
)

onUnmounted(() => {
  videoTrack.value?.detach()
  audioTrack.value?.detach()
})
</script>

<template>
  <div v-show="hasVideoTrack" ref="playerRef" class="relative aspect-video overflow-hidden rounded-xl">
    <video ref="videoRef" v-show="videoRef" autoplay playsinline muted class="absolute size-full object-cover" />
    <audio ref="audioRef" v-show="audioRef" autoplay />

    <div class="absolute right-0 bottom-0 left-0 z-1 flex w-full items-center justify-between">
      <VolumeControl v-model:volume="volume" @toggle="toggleMute" />
      <FullscreenControl :isFullscreen="isFullscreen" @toggle="toggleFullscreen" />
    </div>
  </div>

  <OfflineStream v-show="!hasVideoTrack" :channel="channel" />
</template>
