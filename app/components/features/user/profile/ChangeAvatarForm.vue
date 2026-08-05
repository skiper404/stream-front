<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import { imageSchema, type ImageSchema } from "~/schemas/image.schema"

const { t } = useI18n()
const toast = useToast()
const userStore = useUserStore()
const isUploadLoading = ref(false)
const isRemoveLoading = ref(false)

const schema = imageSchema(t)

const imageState = reactive<Partial<ImageSchema>>({
  image: undefined
})

function createObjectUrl(file: File): string {
  return URL.createObjectURL(file)
}

const onSubmit = async (event: FormSubmitEvent<ImageSchema>) => {
  try {
    isUploadLoading.value = true
    await userStore.changeAvatar(event.data.image)
    toast.add({
      title: t("settings.profile.avatar.updated")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isUploadLoading.value = false
    imageState.image = undefined
  }
}

const removeAvatar = async () => {
  try {
    isRemoveLoading.value = true
    await userStore.removeAvatar()
    toast.add({
      title: t("settings.profile.avatar.deleted")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isRemoveLoading.value = false
  }
}

const onError = (event: any) => {
  console.log(event)
}
</script>

<template>
  <UCard :title="t('settings.profile.avatar.title')" variant="soft" :ui="{ body: 'flex gap-6' }">
    <ChannelAvatar v-if="userStore.user" :channel="userStore.user" size="2xl" />
    <UForm :schema="schema" :state="imageState" class="space-y-4" @submit="onSubmit" @error="onError">
      <UFormField
        name="image"
        :label="t('settings.profile.avatar.label')"
        :description="t('settings.profile.avatar.description')"
      >
        <UFileUpload v-slot="{ open }" v-model="imageState.image" accept="image/*">
          <div class="flex flex-wrap items-center gap-4">
            <UAvatar
              size="lg"
              :src="imageState.image ? createObjectUrl(imageState.image) : undefined"
              icon="i-lucide-image"
            />

            <UButton
              :label="t('settings.profile.avatar.select')"
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
          :label="t('settings.profile.avatar.upload')"
          size="xs"
          class="cursor-pointer"
          :disabled="isUploadLoading"
          :loading="isUploadLoading"
        />
        <UButton
          v-show="userStore.user?.avatar"
          class="cursor-pointer"
          type="button"
          :label="t('settings.profile.avatar.remove')"
          size="xs"
          variant="outline"
          :loading="isRemoveLoading"
          @click="removeAvatar"
        />
      </div>
    </UForm>
  </UCard>
</template>
