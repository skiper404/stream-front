<script setup lang="ts">
import type { GetSocialLinksQuery } from "~/graphql/generated/graphql"
import SocialLinkItem from "./SocialLinkItem.vue"

defineProps<{ links: GetSocialLinksQuery["getSocialLinks"]; deletingLinkId?: string | null; editable: boolean }>()

const emit = defineEmits<{ (e: "remove", id: string): void }>()
</script>

<template>
  <SocialLinkItem
    v-for="link in links"
    :key="link.id"
    :link="link"
    :deleting-link-id="deletingLinkId"
    :editable="editable"
    @remove="id => emit('remove', id)"
  />
</template>
