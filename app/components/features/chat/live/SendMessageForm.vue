<script setup lang="ts">
//@ts-ignore
import "vue3-emoji-picker/css"
import type { FormSubmitEvent } from "@nuxt/ui"
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import { sendMessageSchema, type SendMessageSchema } from "~/schemas/send-message-schema"
const EmojiPicker = defineAsyncComponent(() => import("vue3-emoji-picker"))

const { t } = useI18n()
const toast = useToast()
const theme = useColorMode()
const { sendMessage } = useChat()
const isLoading = ref(false)

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"]; isDisabled: boolean }>()

const emojiTheme = computed(() => (theme.value === "dark" ? "dark" : "light"))

const schema = sendMessageSchema(t)

const sendMessageState = reactive<SendMessageSchema>({ text: "" })
const streamId = computed(() => props.channel.stream?.id)

const onSubmit = async (event: FormSubmitEvent<SendMessageSchema>) => {
  if (props.isDisabled) return

  try {
    if (!streamId.value) return
    isLoading.value = true
    await sendMessage(event.data.text, streamId.value)
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
    sendMessageState.text = ""
  }
}

function onSelect(emoji: any) {
  sendMessageState.text += emoji.i
}
</script>

<template>
  <UForm
    class="flex flex-col items-start space-y-4 transition-all"
    :schema="schema"
    :state="sendMessageState"
    :validate-on="['input']"
    @submit.prevent="onSubmit"
  >
    <UInput
      v-model="sendMessageState.text"
      :placeholder="t('chat.message_placeholder')"
      :disabled="isDisabled"
      class="w-full"
      variant="subtle"
    >
      <template #trailing>
        <UPopover>
          <Icon name="lucide:smile" class="text-primary" />

          <template #content>
            <ClientOnly>
              <EmojiPicker @select="onSelect" :theme="emojiTheme" />
            </ClientOnly>
          </template>
        </UPopover>
      </template>
    </UInput>
    <UButton :label="t('chat.send')" type="submit" size="xs" :disabled="isLoading || isDisabled" :loading="isLoading" />
  </UForm>
</template>
