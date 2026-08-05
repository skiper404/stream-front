<script setup lang="ts">
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { findSponsorsByChannel } = useSponsorship()

const { data: sponsors } = await useAsyncData(
  `${props.channel.username}-sponsors`,
  () => findSponsorsByChannel(props.channel.id),
  {
    default: () => []
  }
)
</script>

<template>
  <ClientOnly>
    <UCard v-if="sponsors.length" :ui="{ body: 'flex flex-wrap items-center gap-4' }" variant="soft">
      <template #title>
        <div class="flex items-center gap-2">
          <Icon name="lucide:medal" size="20" class="text-primary" />
          <div>{{ t("channel.sponsors", { username: channel.username }) }}</div>
        </div>
      </template>
      <NuxtLink
        v-for="sponsor in sponsors"
        :key="sponsor.user.id"
        :to="localePath(`/${sponsor.user.username}`)"
        class="space-x-2"
      >
        <ChannelAvatar :channel="sponsor.user" />
        <span :style="{ color: getRandomColor() }" class="transition-colors hover:text-white!">
          {{ sponsor.user.username }}</span
        >
      </NuxtLink>
    </UCard>
  </ClientOnly>
</template>
