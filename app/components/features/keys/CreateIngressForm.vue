<script setup lang="ts">
import { useClipboard } from "@vueuse/core"

const { t } = useI18n()
const { copy, copied } = useClipboard()
const { createIngress } = useStream()

const toast = useToast()
const userStore = useUserStore()
const isLoading = ref(false)
const isShowStreamKey = ref(false)

const toggleShowStreamKey = () => {
  isShowStreamKey.value = !isShowStreamKey.value
}

const createStreamKey = async () => {
  try {
    isLoading.value = true
    await createIngress()
    await userStore.getUser()
    toast.add({
      title: t("stream_keys.generated")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}

const copyToClipboard = async (value: string) => {
  await copy(value)
  toast.add({
    title: t("common.copied")
  })
}
</script>

<template>
  <UCard
    variant="soft"
    :title="t('stream_keys.title')"
    :description="t('stream_keys.description')"
    :ui="{ body: 'space-y-10' }"
  >
    <div class="space-y-1">
      <h2 class="font-semibold">
        {{ t("stream_keys.server_url") }}
      </h2>

      <p class="text-muted">
        {{ t("stream_keys.server_url_description") }}
      </p>
      <UInput
        :model-value="userStore.user?.stream?.serverUrl!"
        readonly
        icon="i-lucide-globe"
        class="w-full"
        :ui="{ base: 'ring-0 outline-none' }"
      >
        <template #trailing>
          <UButton
            :icon="copied ? 'lucide:copy-check' : 'lucide:copy'"
            class="cursor-pointer"
            variant="soft"
            size="xs"
            @click="copyToClipboard(userStore.user?.stream?.serverUrl!)"
          />
        </template>
      </UInput>
    </div>

    <div class="space-y-1">
      <h2 class="font-semibold">
        {{ t("stream_keys.stream_key") }}
      </h2>

      <p class="text-muted">
        {{ t("stream_keys.stream_key_description") }}
      </p>
      <UInput
        :model-value="userStore.user?.stream?.streamKey!"
        readonly
        icon="i-lucide-key-round"
        class="w-full"
        :type="isShowStreamKey ? 'text' : 'password'"
        :ui="{ base: 'ring-0 outline-none' }"
      >
        <template #trailing>
          <div class="space-x-2">
            <UButton
              :icon="isShowStreamKey ? 'lucide:eye' : 'lucide:eye-off'"
              class="cursor-pointer"
              variant="soft"
              size="xs"
              @click="toggleShowStreamKey"
            />
            <UButton
              :icon="copied ? 'lucide:copy-check' : 'lucide:copy'"
              class="cursor-pointer"
              variant="soft"
              size="xs"
              @click="copyToClipboard(userStore.user?.stream?.streamKey!)"
            />
          </div>
        </template>
      </UInput>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <UButton
          :label="t('stream_keys.generate')"
          icon="i-lucide-refresh-cw"
          variant="soft"
          :loading="isLoading"
          :disabled="isLoading"
          @click="createStreamKey"
        />
      </div>
    </template>
  </UCard>
</template>
