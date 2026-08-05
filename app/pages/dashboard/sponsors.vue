<script setup lang="ts">
import SponsorsTable from "~/components/features/sponsorship/subscription/SponsorsTable.vue"

const { t } = useI18n()
definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.sponsors.title"),
  description: t("seo.sponsors.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <SponsorsTable />
</template>
