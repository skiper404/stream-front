<script setup lang="ts">
import FollowersTable from "~/components/features/followers/FollowersTable.vue"

definePageMeta({ middleware: "auth" })
const { t } = useI18n()

useSeoMeta({
  title: t("seo.followers.title"),
  description: t("seo.followers.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <FollowersTable />
</template>
