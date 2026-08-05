<script setup lang="ts">
import ChangeThemeForm from "../appearance/ChangeThemeForm.vue"
import ChangeLanguageForm from "../appearance/ChangeLanguageForm.vue"
import ChangeColorForm from "../appearance/ChangeColorForm.vue"

const { t } = useI18n()
</script>

<template>
  <UCard
    :title="t('settings.appearance.title')"
    :description="t('settings.appearance.description')"
    :ui="{ body: 'space-y-8' }"
  >
    <ChangeThemeForm />
    <ChangeLanguageForm />
    <ChangeColorForm />
  </UCard>
</template>
