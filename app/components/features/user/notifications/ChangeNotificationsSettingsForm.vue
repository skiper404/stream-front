<script setup lang="ts">
const { t } = useI18n()
const toast = useToast()
const userStore = useUserStore()
const { changeNotificationsSettings } = useNotification()

const isLoading = ref(false)

const setNotificationSetting = async (isEnable: boolean) => {
  try {
    isLoading.value = true
    await changeNotificationsSettings(isEnable)
    await userStore.getUser()
    toast.add({
      title: isEnable ? t("settings.notifications.enabled") : t("settings.notifications.disabled")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}

const isNotificationsEnabled = computed(() => userStore.user?.isNotificationsEnabled ?? false)
</script>

<template>
  <UCard variant="soft" :ui="{ body: 'flex justify-between items-center' }">
    <div>{{ t("settings.notifications.title") }}</div>
    <USwitch
      :model-value="isNotificationsEnabled"
      :loading="isLoading"
      :disabled="isLoading"
      @update:model-value="setNotificationSetting"
    />
  </UCard>
</template>
