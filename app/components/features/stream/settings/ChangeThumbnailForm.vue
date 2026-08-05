<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import { imageSchema, type ImageSchema } from "~/schemas/image.schema"

const { changeStreamThumbnail, removeStreamThumbnail } = useStream()
const { t } = useI18n()

const props = defineProps<{
  stream: FindChannelByUsernameQuery["findChannelByUsername"]["stream"]
}>()

const emit = defineEmits<{ (e: "close"): void }>()

const toast = useToast()
const isUploadLoading = ref(false)
const isRemoveLoading = ref(false)

const schema = imageSchema(t)

const imageState = reactive<Partial<ImageSchema>>({
  image: undefined
})

const createObjectUrl = (file: File): string => URL.createObjectURL(file)

const uploadThumbnail = async (event: FormSubmitEvent<ImageSchema>) => {
  try {
    isUploadLoading.value = true
    await changeStreamThumbnail(event.data.image)
    await refreshNuxtData("channelByUsername")
    toast.add({
      title: t("stream_settings.thumbnail.upload_success")
    })

    emit("close")
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isUploadLoading.value = false
    imageState.image = undefined
  }
}

const removeThumbnail = async () => {
  try {
    isRemoveLoading.value = true
    await removeStreamThumbnail()
    await refreshNuxtData()
    toast.add({
      title: t("stream_settings.thumbnail.remove_success")
    })
    emit("close")
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isRemoveLoading.value = false
  }
}

watch(() => props.stream?.thumbnailUrl, console.log)
</script>

<template>
  <UCard :title="t('stream_settings.thumbnail.title')" variant="soft" :ui="{ body: 'space-y-6' }">
    <div v-if="stream?.thumbnailUrl">
      <NuxtImg
        :src="stream.thumbnailUrl ? getMediaSrc(stream?.thumbnailUrl) : undefined"
        :alt="stream.title"
        class="aspect-video rounded-xl"
      />
    </div>
    <div v-else class="flex aspect-video items-center justify-center rounded-xl">
      <Icon name="lucide:image" size="100" class="text-muted/10" />
    </div>
    <UForm :schema="schema" :state="imageState" class="space-y-3" @submit="uploadThumbnail">
      <UFormField name="image">
        <UFileUpload v-slot="{ open }" v-model="imageState.image" accept="image/*">
          <div class="relative space-y-4" v-if="imageState.image">
            <NuxtImg
              :src="imageState.image ? createObjectUrl(imageState.image) : undefined"
              class="w-full rounded-xl"
            />
            <UBadge
              :label="t('stream_settings.thumbnail.preview')"
              variant="outline"
              class="absolute top-2 left-2 animate-pulse text-xs"
              color="neutral"
            />

            <UButton
              :label="t('stream_settings.thumbnail.select_image')"
              color="neutral"
              class="cursor-pointer"
              variant="outline"
              size="xs"
              :disabled="isUploadLoading"
              @click="open()"
            />
          </div>
        </UFileUpload>
      </UFormField>

      <div class="space-x-2">
        <UButton
          type="submit"
          :label="t('stream_settings.thumbnail.upload')"
          size="xs"
          class="cursor-pointer"
          :disabled="isUploadLoading"
          :loading="isUploadLoading"
        />
        <UButton
          class="cursor-pointer"
          type="button"
          :label="t('stream_settings.thumbnail.remove')"
          size="xs"
          variant="outline"
          :disabled="isRemoveLoading || stream?.thumbnailUrl === null"
          :loading="isRemoveLoading"
          @click="removeThumbnail"
        />
      </div>
    </UForm>
  </UCard>
</template>
