<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <UContainer :ui="{ base: 'text-center mt-10' }">
    <Icon name="lucide:shield-alert" size="30" class="text-muted" />
    <h1 class="mt-6 text-lg font-semibold">{{ t("verification.required.title") }}</h1>
    <p class="text-muted mt-4 w-full text-center">
      {{ t("verification.required.description") }}
    </p>
  </UContainer>
</template>
