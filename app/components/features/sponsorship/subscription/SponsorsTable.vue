<script setup lang="ts">
import type { DropdownMenuItem, TableColumn } from "@nuxt/ui"
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"

const { t } = useI18n()
const { findMySponsors } = useSponsorship()

const { data: sponsors } = await useAsyncData("sponsors", () => findMySponsors(), { default: () => [] })

type Follower = (typeof sponsors.value)[number]

const columns: TableColumn<Follower>[] = [
  { accessorKey: "user", header: t("sponsors.table.user") },
  { accessorKey: "plan", header: t("sponsors.table.plan") },
  { accessorKey: "expiresAt", header: t("sponsors.table.expires_at") },
  { id: "actions", header: t("sponsors.table.actions"), meta: { class: { td: "text-right", th: "text-right" } } }
]

const getDropdownItems = (username: string): DropdownMenuItem[] => [
  {
    label: t("sponsors.open_channel"),
    icon: "lucide:user",
    to: `/${username}`,
    target: "_blank"
  }
]
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('sponsors.title')" :description="t('sponsors.description')" />
    <UTable :data="sponsors" :columns="columns" class="bg-accented/20 rounded-xl p-2">
      <template #user-cell="{ row }">
        <div class="space-x-2">
          <ChannelAvatar :channel="row.original.user" />
          <span>{{ row.original.user.username }}</span>
        </div>
      </template>
      <template #plan-cell="{ row }">
        {{ row.original.plan.title }}
      </template>
      <template #expiresAt-cell="{ row }">
        {{
          new Date(row.original.expiresAt as string).toLocaleDateString("ru-RU", {
            dateStyle: "long"
          })
        }}
      </template>
      <template #actions-cell="{ row }">
        <UDropdownMenu :items="getDropdownItems(row.original.user.username)">
          <UButton icon="lucide:ellipsis-vertical" variant="ghost" />
        </UDropdownMenu>
      </template>
    </UTable>
  </UContainer>
</template>
