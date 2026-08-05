<script setup lang="ts">
import TransactionsTable from "~/components/features/sponsorship/transactions/TransactionsTable.vue"

const { t } = useI18n()
definePageMeta({ middleware: "auth" })

useSeoMeta({
  title: t("seo.transactions.title"),
  description: t("seo.transactions.description"),
  robots: "noindex,nofollow"
})
</script>

<template>
  <TransactionsTable />
</template>
