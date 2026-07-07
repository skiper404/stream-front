<script setup lang="ts">
import AppHeader from "~/components/layouts/header/AppHeader.vue"
import type { NavigationMenuItem } from "@nuxt/ui"

const sidebarStore = useSidebarStore()
const sessionStore = useSessionStore()

const mainItems: NavigationMenuItem[] = [
  {
    label: "Главная",
    icon: "lucide:house",
    to: "/"
  },
  {
    label: "Категории",
    icon: "lucide:folder",
    to: "/categories"
  },
  {
    label: "Стримы",
    icon: "heroicons:signal-16-solid",
    to: "/streams"
  }
]

const userItems: NavigationMenuItem[] = [
  {
    label: "Настройки",
    icon: "lucide:cog",
    to: "/dashboard/settings"
  },
  {
    label: "Ключи для стрима",
    icon: "lucide:key-round",
    to: "/dashboard/keys"
  },
  {
    label: "Настройки чата",
    icon: "lucide:message-square",
    to: "/dashboard/chat"
  },
  {
    label: "Подписчики",
    icon: "i-lucide-users",
    to: "/dashboard/followers"
  },
  {
    label: "Спонсоры",
    icon: "lucide:medal",
    to: "/dashboard/sponsors"
  },
  {
    label: "Премиум планы",
    icon: "lucide:circle-dollar-sign",
    to: "/dashboard/plans"
  },
  {
    label: "Транзакции",
    icon: "lucide:credit-card",
    to: "/dashboard/transactions"
  }
]
</script>

<template>
  <div class="h-screen">
    <AppHeader />
    <USidebar
      v-model:open="sidebarStore.isOpen"
      collapsible="icon"
      :ui="{
        container: 'mt-12'
      }"
    >
      <UNavigationMenu
        :items="sessionStore.session ? userItems : mainItems"
        orientation="vertical"
        :ui="{ link: 'cursor-pointer p-1.5 overflow-hidden h-12', list: 'space-y-1' }"
      />
    </USidebar>
    <main :class="['relative pt-12', sidebarStore.isOpen ? 'pl-64' : 'pl-6 lg:pl-16']">
      <UButton
        :class="['fixed top-16 cursor-pointer transition-all', sidebarStore.isOpen ? 'left-66' : 'left-4 lg:left-18']"
        color="neutral"
        variant="subtle"
        aria-label="Toggle sidebar"
        :icon="sidebarStore.isOpen ? 'lucide:panel-left' : 'lucide:panel-right'"
        @click="sidebarStore.toggleSidebar()"
      />
      <div class="p-4">
        <slot />
      </div>
    </main>
  </div>
</template>
