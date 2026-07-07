export const useSidebarStore = defineStore("sidebar", () => {
  const isOpen = ref(true)

  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleSidebar }
})
