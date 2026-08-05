<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
const { findFollowersCountByChannel } = useChannel()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const { data: count } = useAsyncData(
  `${props.channel.username}-followers`,
  () => findFollowersCountByChannel(props.channel.id),
  {
    default: () => 0
  }
)

const label = computed(() => {
  const value = count.value

  return `${value} ${value === 1 ? t("channel.follower") : t("channel.followers")}`
})
</script>
<template>
  <UButton :label="label" icon="lucide:users" variant="subtle" class="hidden sm:flex" size="xs" />
  <UButton :label="String(count)" icon="lucide:users" variant="subtle" size="xs" class="sm:hidden" />
</template>
