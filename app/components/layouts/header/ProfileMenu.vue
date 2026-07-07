<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui"
import Notifications from "./notifications/Notifications.vue"
import ChannelAvatar from "~/components/ui/elements/ChannelAvatar.vue"
import type { GetUserQuery } from "~/graphql/generated/graphql.js"

const authStore = useAuthStore()

const props = defineProps<{ user: GetUserQuery["getUser"] }>()

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: props.user.username,
    icon: "lucide:user",
    to: `/${props.user.username}`
  },
  {
    label: "Dashboard",
    icon: "lucide:layout-dashboard",
    to: "/dashboard"
  },
  {
    label: "Logout",
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
      <ChannelAvatar :user="user" />
      <template #content-top>
        <div class="flex items-center gap-3 p-3">
          <ChannelAvatar :user="user" />

          <div class="flex flex-col">
            <span class="font-medium">
              {{ user.username }}
            </span>

            <span class="text-muted text-sm"> {{ user.username }} </span>
          </div>
        </div>
      </template>
    </UDropdownMenu>
  </div>
</template>
