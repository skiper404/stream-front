<script setup lang="ts">
import type { FormSubmitEvent, SelectItem } from "@nuxt/ui"
import { streamInfoSchema, type StreamInfoSchema } from "~/schemas/stream-info"
import type { FindAllCategoriesQuery, FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { changeStreamInfo } = useStream()
const { t } = useI18n()

const props = defineProps<{
  stream: FindChannelByUsernameQuery["findChannelByUsername"]["stream"]
  categories: FindAllCategoriesQuery["findAllCategories"]
}>()

const emit = defineEmits<{ (e: "close"): void }>()

const toast = useToast()
const isLoading = ref(false)

const schema = streamInfoSchema(t)

const streamInfoState = reactive<StreamInfoSchema>({
  title: props.stream?.title ?? "",
  categoryId: props.stream?.category?.id ?? ""
})

const onSubmit = async (event: FormSubmitEvent<StreamInfoSchema>) => {
  try {
    isLoading.value = true
    await changeStreamInfo(event.data.title, event.data.categoryId)
    await refreshNuxtData()
    toast.add({
      title: t("stream_settings.info.update_success")
    })
    emit("close")
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}

const items = computed<SelectItem[]>(() =>
  props.categories.map(category => ({ label: category.title, value: category.id }))
)
</script>

<template>
  <UCard :title="t('stream_settings.info.title')" variant="soft">
    <UForm :schema="schema" :state="streamInfoState" @submit="onSubmit" class="flex flex-col space-y-4">
      <UFormField
        name="title"
        :label="t('stream_settings.info.stream_title.label')"
        :description="t('stream_settings.info.stream_title.description')"
      >
        <UInput
          v-model="streamInfoState.title"
          class="w-full"
          :placeholder="t('stream_settings.info.stream_title.placeholder')"
        />
      </UFormField>
      <UFormField
        name="categoryId"
        :label="t('stream_settings.info.category.label')"
        :description="t('stream_settings.info.category.description')"
      >
        <USelect :items="items" v-model="streamInfoState.categoryId" class="w-full" />
      </UFormField>
      <UButton
        @click=""
        type="submit"
        :label="t('stream_settings.info.save')"
        class="w-fit"
        size="xs"
        :loading="isLoading"
        :disabled="isLoading"
      />
    </UForm>
  </UCard>
</template>
