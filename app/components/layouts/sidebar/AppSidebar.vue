<script setup lang="ts">
import RecommendedChannels from "./RecommendedChannels.vue"

const sidebarStore = useSidebarStore()
const { t } = useI18n()

const { items, isDashboard } = useNavigations()
</script>

<template>
  <USidebar
    v-model:open="sidebarStore.isOpen"
    collapsible="icon"
    :ui="{
      body: 'bg-muted/30',
      container: 'pt-20'
    }"
    class="scrollbar-thumb-primary scrollbar-thin"
    variant="floating"
  >
    <UNavigationMenu
      :items="items"
      orientation="vertical"
      :ui="{ link: 'cursor-pointer p-1.5 overflow-hidden', list: 'space-y-1' }"
    />
    <USeparator />

    <RecommendedChannels v-if="!isDashboard" />

    <UButton
      color="neutral"
      variant="subtle"
      class="mt-auto w-fit"
      :aria-label="t('navigation.toggle_sidebar')"
      :icon="sidebarStore.isOpen ? 'lucide:panel-left' : 'lucide:panel-right'"
      @click="sidebarStore.toggleSidebar()"
    />
  </USidebar>
</template>
