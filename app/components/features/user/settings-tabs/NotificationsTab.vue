<script setup lang="ts">
import ChangeNotificationsSettingsForm from "../notifications/ChangeNotificationsSettingsForm.vue"

const { t } = useI18n()
</script>

<template>
  <UCard :title="t('settings.notifications.title')" :description="t('settings.notifications.description')">
    <ChangeNotificationsSettingsForm />
  </UCard>
</template>
