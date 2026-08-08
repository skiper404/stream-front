<script setup lang="ts">
import AppSearch from "~/components/layouts/header/AppSearch.vue"
import AppHeaderMenu from "~/components/layouts/header/AppHeaderMenu.vue"
import AppLogo from "./AppLogo.vue"
import ChannelList from "../sidebar/ChannelList.vue"

const { items, isDashboard } = useNavigations()
const { t } = useI18n()

const { findRecommendedChannels } = useChannel()
const { findMyFollowings } = useFollow()

const { data: channels } = useAsyncData("recommendedChannels", () => findRecommendedChannels(), { default: () => [] })
const { data: followings } = useAsyncData("followingChannels", () => findMyFollowings(), { default: () => [] })
</script>

<template>
  <UHeader class="from-primary/20 backdrop z-10 bg-linear-to-r to-transparent">
    <template #left>
      <AppLogo />
    </template>

    <template #body>
      <div class="space-y-2">
        <AppSearch />
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          :ui="{
            link: 'cursor-pointer p-1.5 overflow-hidden h-12',
            list: 'space-y-2'
          }"
        />
        <USeparator />

        <ChannelList
          v-if="!isDashboard"
          :heading="t('home.followings_channels')"
          :channels="followings.map(f => f.following)"
        />

        <ChannelList v-if="!isDashboard" :heading="t('home.recommended_streams')" :channels="channels" />
      </div>
    </template>

    <template #default>
      <AppSearch class="w-lg" />
    </template>

    <template #right>
      <AppHeaderMenu />
    </template>
  </UHeader>
</template>
