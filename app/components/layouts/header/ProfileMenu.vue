<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import type { GetUserQuery } from "~/graphql/generated/graphql.js"
import Notifications from "./notifications/Notifications.vue"

const authStore = useAuthStore()
const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{ user: GetUserQuery["getUser"] }>()

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: props.user.username,
    icon: "lucide:user",
    to: localePath(`/${props.user.username}`)
  },
  {
    label: t("navigation.dashboard"),
    icon: "lucide:layout-dashboard",
    to: localePath("/dashboard/settings")
  },
  {
    label: t("auth.logout"),
    icon: "lucide:log-out",
    onSelect: async () => {
      await authStore.logout()
      await navigateTo(localePath("/"))
    }
  }
])
</script>

<template>
  <div class="flex gap-4">
    <UTooltip :text="t('notifications.title')" :delay-duration="0">
      <Notifications />
    </UTooltip>

    <UDropdownMenu
      :items="items"
      :ui="{
        content: 'w-48'
      }"
      as-child
    >
      <UTooltip :text="user.username" :delay-duration="0">
        <UButton icon="lucide:user" color="primary" variant="outline" class="cursor-pointer rounded-full" />
      </UTooltip>
    </UDropdownMenu>
  </div>
</template>
