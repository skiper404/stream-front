<script setup lang="ts">
import AppSearch from "~/components/layouts/header/AppSearch.vue"
import AppHeaderMenu from "~/components/layouts/header/AppHeaderMenu.vue"
import AppLogo from "./AppLogo.vue"
import RecommendedChannels from "../sidebar/RecommendedChannels.vue"

const { items, isDashboard } = useNavigations()
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

        <RecommendedChannels v-if="!isDashboard" />
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
