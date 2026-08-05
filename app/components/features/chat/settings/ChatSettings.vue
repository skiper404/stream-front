<script setup lang="ts">
import { ChatMode, chatSettingsSchema, type ChatSettingsSchema } from "~/schemas/change-chat-settings.schema"

const { t } = useI18n()
const userStore = useUserStore()
const chatStore = useChat()
const toast = useToast()
const isLoading = ref(false)

const chatSettingsState = reactive<ChatSettingsSchema>({
  chatMode: (userStore.user?.stream?.chatMode as ChatMode) ?? ChatMode.EVERYONE
})

const modeItems = computed(() =>
  Object.values(ChatMode).map(mode => ({ label: t(`chat_settings.mode.${mode.toLowerCase()}`), value: mode }))
)

const changeChatSettings = async () => {
  try {
    isLoading.value = true
    await chatStore.changeChatSetting(chatSettingsState)
    toast.add({
      title: t("chat_settings.updated")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <UPageHeader :title="t('chat_settings.title')" :description="t('chat_settings.description')" />
    <UCard variant="soft">
      <UForm :schema="chatSettingsSchema" :state="chatSettingsState" :ui="{ base: 'space-y-4' }">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p class="font-semibold">{{ t("chat_settings.title") }}</p>
            <p class="text-muted text-xs">
              {{ t("chat_settings.enable_chat.description") }}
            </p>
          </div>
          <USelect
            v-model="chatSettingsState.chatMode"
            :items="modeItems"
            :loading="isLoading"
            :disabled="isLoading"
            class="w-full sm:w-70"
            @change="changeChatSettings"
          />
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>
