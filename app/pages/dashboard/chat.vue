<script setup lang="ts">
import ChatSettings from "~/components/features/chat/settings/ChatSettings.vue"

const { t } = useI18n()

definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.chat_settings.title"),
  description: t("seo.chat_settings.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <ChatSettings />
</template>
