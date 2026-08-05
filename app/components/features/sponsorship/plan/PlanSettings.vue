<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"
import CreatePlanForm from "./CreatePlanForm.vue"
import VerifyChannelAlert from "./VerifyChannelAlert.vue"

const { t } = useI18n()
const { findMySponsorshipPlans, removeSponsorshipPlan } = useSponsorship()

const { data: plans, refresh: refreshPlans } = await useAsyncData("plans", () => findMySponsorshipPlans(), {
  default: () => []
})

const toast = useToast()
const userStore = useUserStore()
const isLoading = ref(false)
const isModalOpen = ref(false)
const deletingPlanId = ref<string | null>(null)

type Follower = (typeof plans.value)[number]

const columns: TableColumn<Follower>[] = [
  { accessorKey: "plan", header: t("sponsorship.plans.table.name") },
  { accessorKey: "price", header: t("sponsorship.plans.table.price") },
  { accessorKey: "createdAt", header: t("sponsorship.plans.table.created_at") },
  {
    id: "actions",
    header: t("sponsorship.plans.table.actions"),
    meta: { class: { td: "text-right", th: "text-right" } }
  }
]

const onPlanCreated = async () => {
  isModalOpen.value = false
  await refreshPlans()
}

const removePlan = async (planId: string) => {
  try {
    deletingPlanId.value = planId
    isLoading.value = true
    await removeSponsorshipPlan(planId)
    await refreshPlans()
    toast.add({
      title: t("sponsorship.plans.delete.success")
    })
  } catch (error: any) {
    toast.add({ title: error.message })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('sponsorship.plans.title')" :description="t('sponsorship.plans.description')">
      <template v-if="userStore.user?.isVerified" #links>
        <UModal
          v-model:open="isModalOpen"
          :title="t('sponsorship.plans.create.title')"
          :description="t('sponsorship.plans.create.description')"
        >
          <UButton :label="t('sponsorship.plans.create.button')" />

          <template #body>
            <CreatePlanForm @plan-created="onPlanCreated" />
          </template>
        </UModal>
      </template>
    </UPageHeader>

    <UTable v-if="userStore.user?.isVerified" :data="plans" :columns="columns" class="bg-accented/20 rounded-xl p-2">
      <template #plan-cell="{ row }">
        <div class="space-x-2">
          <span>{{ row.original.title }}</span>
        </div>
      </template>

      <template #price-cell="{ row }">
        {{ Intl.NumberFormat("ru-RU", { style: "currency", currency: "USD" }).format(row.original.price) }}
      </template>
      <template #createdAt-cell="{ row }">
        {{
          new Date(row.original.createdAt as string).toLocaleDateString("ru-RU", {
            dateStyle: "long"
          })
        }}
      </template>

      <template #actions-cell="{ row }">
        <UButton
          :label="t('sponsorship.plans.delete.button')"
          variant="outline"
          :disabled="isLoading"
          :loading="deletingPlanId === row.original.id"
          @click="removePlan(row.original.id)"
        />
      </template>
    </UTable>

    <VerifyChannelAlert v-else />
  </UContainer>
</template>
