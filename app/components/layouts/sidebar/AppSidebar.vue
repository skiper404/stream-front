<script setup lang="ts">
import ChannelList from "./ChannelList.vue"

const sidebarStore = useSidebarStore()

const { t } = useI18n()

const { items, isDashboard } = useNavigations()
const userStore = useUserStore()

const { findRecommendedChannels } = useChannel()
const { findMyFollowings } = useFollow()

const { data: channels } = useAsyncData("recommendedChannels", () => findRecommendedChannels(), { default: () => [] })
const { data: followings } = useAsyncData("followingChannels", () => findMyFollowings(), { default: () => [] })
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

    <ChannelList
      v-if="!isDashboard && followings.length > 0 && userStore.user"
      :heading="t('home.followings_channels')"
      :channels="followings.map(f => f.following)"
    />

    <ChannelList v-if="!isDashboard" :heading="t('home.recommended_streams')" :channels="channels" />

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
