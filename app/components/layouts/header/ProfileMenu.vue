<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import type { GetUserQuery } from "~/graphql/generated/graphql.js"
import Notifications from "./notifications/Notifications.vue"

const authStore = useAuthStore()
const { t } = useI18n()

const props = defineProps<{ user: GetUserQuery["getUser"] }>()

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: props.user.username,
    icon: "lucide:user",
    to: `/${props.user.username}`
  },
  {
    label: t("navigation.dashboard"),
    icon: "lucide:layout-dashboard",
    to: "/dashboard/settings"
  },
  {
    label: t("auth.logout"),
    icon: "lucide:log-out",
    onSelect: async () => {
      await authStore.logout()
      await navigateTo("/")
    }
  }
])
</script>

<template>
  <div class="flex gap-4">
    <Notifications />
    <UDropdownMenu
      :items="items"
      :ui="{
        content: 'w-48'
      }"
    >
      <ChannelAvatar :channel="user" class="hover:border-primary transition-all hover:border-2" />
    </UDropdownMenu>
  </div>
</template>
