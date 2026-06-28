<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Room, RoomEvent, Track, type RemoteParticipant, type RemoteTrackPublication } from "livekit-client"

const config = useRuntimeConfig()

const videoEl = ref<HTMLVideoElement | null>(null)

let room: Room | null = null

function attachTrack(track: any) {
  if (!videoEl.value) return

  if (track.kind === Track.Kind.Video) {
    const element = track.attach()

    videoEl.value.srcObject = element.srcObject
    videoEl.value.play().catch(() => {})
  }
}

function handleParticipant(p: RemoteParticipant) {
  p.trackPublications.forEach((pub: RemoteTrackPublication) => {
    if (pub.track) {
      attachTrack(pub.track)
    }

    pub.on("subscribed", track => {
      attachTrack(track)
    })
  })
}

onMounted(async () => {
  room = new Room()

  room.on(RoomEvent.TrackSubscribed, track => {
    attachTrack(track)
  })

  room.on(RoomEvent.ParticipantConnected, handleParticipant)

  await room.connect(
    config.public.livekitUrl,
    "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2tpcGVyIiwidmlkZW8iOnsicm9vbSI6IjU5ZjAzMWI1LWUyODQtNDE4Ny05ODRkLTQzYjA2NDkyODczOCIsInJvb21Kb2luIjp0cnVlLCJjYW5QdWJsaXNoIjp0cnVlfSwiaXNzIjoiQVBJeUtQZTVRcW1uYjU5IiwiZXhwIjoxNzgyMjkyMDE0LCJuYmYiOjE3ODIyNzA0MTQsInN1YiI6Ikhvc3QtNTlmMDMxYjUtZTI4NC00MTg3LTk4NGQtNDNiMDY0OTI4NzM4In0.Nmir7gJn3-H1fQWRENUH8qHL1BPAfx4qiwD5plGGDAs"
  )

  // 🔥 IMPORTANT: late join fix
  room.remoteParticipants.forEach(handleParticipant)
})

onBeforeUnmount(() => {
  room?.disconnect()
})
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center bg-black">
    <video ref="videoEl" autoplay playsinline muted class="h-full w-full object-cover" />
  </div>
</template>
