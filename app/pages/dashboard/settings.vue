<script setup lang="ts">
import UserSettings from "~/components/features/user/UserSettings.vue"

const { t } = useI18n()
definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.account_settings.title"),
  description: t("seo.account_settings.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <UserSettings />
</template>
