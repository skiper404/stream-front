<script setup lang="ts">
import KeysSettings from "~/components/features/keys/KeysSettings.vue"

const { t } = useI18n()
definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.stream_keys.title"),
  description: t("seo.stream_keys.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <KeysSettings />
</template>
