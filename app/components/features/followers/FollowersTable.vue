<script setup lang="ts">
import type { DropdownMenuItem, TableColumn } from "@nuxt/ui"
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"

const { t, locale } = useI18n()
const { findMyFollowers } = useFollow()

const { data: followers } = useAsyncData("followers", () => findMyFollowers(), { default: () => [] })

type Follower = (typeof followers.value)[number]

const columns: TableColumn<Follower>[] = [
  { accessorKey: "user", header: t("followers.columns.user") },
  { accessorKey: "createdAt", header: t("followers.columns.created_at") },
  { id: "actions", header: t("followers.columns.actions"), meta: { class: { td: "text-right", th: "text-right" } } }
]

const getDropdownItems = (username: string): DropdownMenuItem[] => [
  {
    label: t("followers.open_channel"),
    icon: "lucide:user",
    to: `/${username}`,
    target: "_blank"
  }
]
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('followers.title')" :description="t('followers.description')" />
    <UTable :data="followers" :columns="columns" class="bg-accented/20 rounded-xl p-2">
      <template #user-cell="{ row }">
        <div class="space-x-2">
          <ChannelAvatar :channel="row.original.follower" />
          <span>{{ row.original.follower.username }}</span>
        </div>
      </template>
      <template #createdAt-cell="{ row }">
        {{
          new Date(row.original.follower.createdAt as string).toLocaleDateString(locale, {
            dateStyle: "long"
          })
        }}
      </template>
      <template #actions-cell="{ row }">
        <UDropdownMenu :items="getDropdownItems(row.original.follower.username)">
          <UButton icon="lucide:ellipsis-vertical" variant="ghost" />
        </UDropdownMenu>
      </template>
    </UTable>
  </UContainer>
</template>
