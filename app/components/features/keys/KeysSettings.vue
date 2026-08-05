<script setup lang="ts">
import CreateIngressForm from "./CreateIngressForm.vue"
import InstructionModal from "./InstructionModal.vue"

const { t } = useI18n()
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('stream_keys.page_title')" :description="t('stream_keys.page_description')">
      <template #links>
        <InstructionModal />
      </template>
    </UPageHeader>
    <CreateIngressForm />
  </UContainer>
</template>
