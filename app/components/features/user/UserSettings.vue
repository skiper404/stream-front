<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"

import ProfileTab from "./settings-tabs/ProfileTab.vue"
import AccountTab from "./settings-tabs/AccountTab.vue"
import AppearanceTab from "./settings-tabs/AppearanceTab.vue"
import NotificationsTab from "./settings-tabs/NotificationsTab.vue"
import SessionsTab from "./settings-tabs/SessionsTab.vue"

const { t } = useI18n()

const route = useRoute()
const router = useRouter()

const activeTab = computed({
  get: () => (route.query.tab as string) || "profile",
  set: value =>
    router.replace({
      query: {
        ...route.query,
        tab: value
      }
    })
})

const items: TabsItem[] = [
  {
    label: t("settings.tabs.profile"),
    icon: "i-lucide-user",
    slot: "profile",
    value: "profile"
  },
  {
    label: t("settings.tabs.account"),
    icon: "lucide:user-cog",
    slot: "account",
    value: "account"
  },
  {
    label: t("settings.tabs.appearance"),
    icon: "i-lucide-palette",
    slot: "appearance",
    value: "appearance"
  },
  {
    label: t("settings.tabs.notifications"),
    icon: "lucide:info",
    slot: "notifications",
    value: "notifications"
  },
  {
    label: t("settings.tabs.sessions"),
    icon: "lucide:swatch-book",
    slot: "sessions",
    value: "sessions"
  }
]
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('settings.title')" :description="t('settings.description')" />
    <UTabs
      :items="items"
      size="xs"
      variant="pill"
      v-model="activeTab"
      :ui="{
        root: 'space-y-2',
        trigger: 'md:flex-row flex-col cursor-pointer',
        label: 'text-[10px] md:text-xs'
      }"
    >
      <template #profile>
        <ProfileTab />
      </template>

      <template #account>
        <AccountTab />
      </template>

      <template #appearance>
        <AppearanceTab />
      </template>

      <template #notifications>
        <NotificationsTab />
      </template>

      <template #sessions>
        <SessionsTab />
      </template>
    </UTabs>
  </UContainer>
</template>
