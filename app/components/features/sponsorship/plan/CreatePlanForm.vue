<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { MAX_DESCRIPTION_LENGTH } from "~/constants/constants"
import { createPlanSchema, type TypeCreatePlanSchema } from "~/schemas/create-plan.schema"

const { t } = useI18n()
const toast = useToast()
const isLoading = ref(false)
const { createSponsorshipPlan } = useSponsorship()

const emit = defineEmits<{ (e: "plan-created"): void }>()

const schema = createPlanSchema(t)

const createPlanState = reactive<TypeCreatePlanSchema>({ title: "", description: "", price: 0 })

const onSubmit = async (event: FormSubmitEvent<TypeCreatePlanSchema>) => {
  try {
    isLoading.value = true
    await createSponsorshipPlan(event.data.title, event.data.price, event.data.description)
    toast.add({
      title: t("plans.created", {
        title: event.data.title
      })
    })
    emit("plan-created")
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UForm :state="createPlanState" :schema="schema" @submit="onSubmit" :ui="{ base: 'space-y-8' }">
    <UFormField :label="t('plans.form.title.label')" name="title" :description="t('plans.form.title.description')">
      <UInput v-model="createPlanState.title" class="w-full" :placeholder="t('plans.form.title.placeholder')" />
    </UFormField>

    <UFormField
      :label="t('plans.form.description.label')"
      name="description"
      :description="t('plans.form.description.description')"
    >
      <UTextarea
        v-model="createPlanState.description"
        :maxlength="MAX_DESCRIPTION_LENGTH"
        :placeholder="t('plans.form.description.placeholder')"
        class="w-full"
        :ui="{
          base: 'pr-16'
        }"
        variant="subtle"
        autoresize
        :maxrows="10"
        icon="lucide:message-square"
      >
        <template #trailing>
          <div class="text-muted text-xs tabular-nums">
            {{ createPlanState.description?.length }}/{{ MAX_DESCRIPTION_LENGTH }}
          </div>
        </template>
      </UTextarea>
    </UFormField>

    <UFormField :label="t('plans.form.price.label')" name="price" :description="t('plans.form.price.description')">
      <UInput v-model="createPlanState.price" :placeholder="t('plans.form.price.placeholder')" type="number" />
    </UFormField>

    <UButton :label="t('plans.form.submit')" type="submit" :loading="isLoading" :disabled="isLoading" />
  </UForm>
</template>
