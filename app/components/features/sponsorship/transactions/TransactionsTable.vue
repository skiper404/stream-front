<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"

const { t } = useI18n()
const { findMyTransactions } = useSponsorship()

const { data: transactions } = await useAsyncData("transactions", () => findMyTransactions(), { default: () => [] })

type Transaction = (typeof transactions.value)[number]

const columns: TableColumn<Transaction>[] = [
  { accessorKey: "createdAt", header: t("transactions.table.created_at") },
  { accessorKey: "status", header: t("transactions.table.status") },
  { accessorKey: "amount", header: t("transactions.table.amount") }
]
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('transactions.title')" :description="t('transactions.description')" />
    <UTable :data="transactions" :columns="columns" class="bg-accented/20 rounded-xl p-2">
      <template #createdAt-cell="{ row }">
        {{
          new Date(row.original.createdAt as string).toLocaleDateString("ru-RU", {
            dateStyle: "long"
          })
        }}
      </template>
      <template #status-cell="{ row }">{{ t(`transactions.status.${row.original.status.toLowerCase()}`) }} </template>
      <template #amount-cell="{ row }">
        {{ Intl.NumberFormat("ru-RU", { style: "currency", currency: "USD" }).format(row.original.amount) }}
      </template>
    </UTable>
  </UContainer>
</template>
