<script setup lang="ts">
import PlanSettings from "~/components/features/sponsorship/plan/PlanSettings.vue"

const { t } = useI18n()
definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.sponsorship_plans.title"),
  description: t("seo.sponsorship_plans.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <PlanSettings />
</template>
