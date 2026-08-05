<script setup lang="ts">
import SocialLinkList from "~/components/features/user/profile/social-links/SocialLinkList.vue"
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()

defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()
</script>

<template>
  <UCard :ui="{ body: 'space-y-8' }" variant="soft" icon="lucide:user">
    <template #title>
      <div class="flex items-center gap-2">
        <Icon name="lucide:user" size="20" class="text-primary" />
        <div>{{ t("channel.about", { username: channel.username }) }}</div>
      </div>
    </template>
    <div v-if="channel.bio" class="text-muted w-[80%]">{{ channel.bio }}</div>
    <div v-else class="text-muted w-[80%]">{{ t("channel.no_description") }}</div>
    <div class="space-y-4">
      <SocialLinkList :links="channel.socialLinks" :editable="false" />
    </div>
  </UCard>
</template>
