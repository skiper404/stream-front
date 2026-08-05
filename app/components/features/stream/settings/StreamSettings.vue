<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import ChangeThumbnailForm from "./ChangeThumbnailForm.vue"
import ChangeInfoForm from "./ChangeInfoForm.vue"

const isModalOpen = ref(false)
const userStore = useUserStore()
const { t } = useI18n()

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
const isOwnerChannel = computed(() => userStore.user?.id === props.channel.id)
const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()
const { findAllCategories } = useCategory()

const { data: categories } = useAsyncData("categories", () => findAllCategories(), { default: () => [] })
</script>

<template>
  <UModal
    v-if="isOwnerChannel"
    v-model:open="isModalOpen"
    :title="t('stream_settings.title')"
    :description="t('stream_settings.description')"
    :ui="{ body: 'space-y-4' }"
  >
    <UButton icon="lucide:pencil" @click="openModal" color="neutral" variant="subtle" size="xs" />
    <template #body>
      <ChangeInfoForm :stream="channel.stream" :categories="categories" @close="closeModal" />
      <ChangeThumbnailForm :stream="channel.stream" @close="closeModal" />
    </template>
  </UModal>
</template>
