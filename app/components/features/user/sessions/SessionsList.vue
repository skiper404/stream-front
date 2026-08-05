<script setup lang="ts">
const { t } = useI18n()
const toast = useToast()

const sessionsStore = useSessionStore()
const authStore = useAuthStore()

const isLoading = ref(false)
const isModalOpen = ref(false)
const selectedSessionId = ref<string | null>(null)

const openModal = (id: string) => {
  selectedSessionId.value = id
  isModalOpen.value = true
}

const closeModal = () => {
  selectedSessionId.value = null
  isModalOpen.value = false
}

onMounted(async () => await sessionsStore.getSessions())

const removeSessionHandler = async () => {
  if (!selectedSessionId.value) return

  try {
    isLoading.value = true

    if (selectedSessionId.value === sessionsStore.session?.id) {
      await authStore.logout()
      return
    }

    await sessionsStore.removeSession(selectedSessionId.value)
    await sessionsStore.getSessions()

    toast.add({
      title: t("settings.sessions.deleted")
    })

    closeModal()
  } catch (e: any) {
    toast.add({
      title: e.message
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="space-y-4">
    <UCard
      v-for="session in sessionsStore.sessions"
      :key="session.id"
      variant="soft"
      :ui="{
        body: [
          'flex items-center justify-between relative border rounded-xl',
          sessionsStore.session?.id === session.id ? 'border-primary' : 'border-neutral-800'
        ]
      }"
    >
      <div class="flex items-start gap-4">
        <Icon name="i-lucide-monitor" class="text-primary mt-1 size-5" />

        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="font-medium">
              {{ session.metadata.device.os }}
            </span>

            <UBadge color="neutral" variant="soft">
              {{ session.metadata.device.browser }}
            </UBadge>

            <UBadge
              v-if="sessionsStore.session?.id === session.id"
              :label="t('settings.sessions.current')"
              variant="soft"
            />
          </div>

          <div class="text-muted space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <Icon name="i-lucide-map-pin" class="size-4" />

              <span>
                {{ session.metadata.location.city }},
                {{ session.metadata.location.country }}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <Icon name="i-lucide-globe" class="size-4" />

              <span>{{ session.metadata.ip }}</span>
            </div>

            <div class="flex items-center gap-2">
              <Icon name="i-lucide-key-round" class="size-4" />

              <span class="font-mono text-xs">
                {{ session.id }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <UButton
        color="error"
        variant="soft"
        icon="i-lucide-log-out"
        class="cursor-pointer"
        size="xs"
        @click="openModal(session.id)"
      >
        {{ t("settings.sessions.finish") }}
      </UButton>
    </UCard>

    <UModal
      v-model:open="isModalOpen"
      :title="t('settings.sessions.confirmation.title')"
      :description="t('settings.sessions.confirmation.description')"
    >
      <template #body>
        <div class="flex justify-center gap-8">
          <UButton :label="t('settings.sessions.cancel')" variant="subtle" size="xs" @click="closeModal" />

          <UButton
            :label="t('settings.sessions.delete')"
            color="error"
            size="xs"
            :loading="isLoading"
            :disabled="isLoading"
            @click="removeSessionHandler"
          />
        </div>
      </template>
    </UModal>
  </div>
</template>
