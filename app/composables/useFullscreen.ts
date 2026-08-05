export const useFullscreen = () => {
  const playerRef = ref<HTMLElement | null>(null)

  const isFullscreen = ref(false)

  const handleFullscreenChange = () => {
    isFullscreen.value = document.fullscreenElement === playerRef.value
  }

  const toggleFullscreen = async () => {
    if (!playerRef.value) return

    if (document.fullscreenElement === playerRef.value) {
      await document.exitFullscreen()
    } else {
      await playerRef.value.requestFullscreen()
    }
  }

  onMounted(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    handleFullscreenChange()
  })

  onUnmounted(() => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange)
  })

  return { playerRef, isFullscreen, toggleFullscreen }
}
