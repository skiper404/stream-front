export const useVolume = () => {
  const volume = ref(50)
  const isMuted = computed(() => volume.value === 0)
  const volumeBeforeMute = ref(0)
  const audioRef = ref<HTMLAudioElement | null>(null)

  const toggleMute = () => {
    if (isMuted.value) {
      volume.value = volumeBeforeMute.value
    } else {
      volumeBeforeMute.value = volume.value
      volume.value = 0
    }
  }

  watch(
    volume,
    value => {
      if (!audioRef.value) return

      audioRef.value.volume = value / 100
    },
    { immediate: true }
  )

  return { volume, isMuted, audioRef, toggleMute }
}
