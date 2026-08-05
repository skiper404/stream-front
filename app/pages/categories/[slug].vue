<script setup lang="ts">
import StreamList from "~/components/features/stream/list/StreamList.vue"
import Heading from "~/components/ui/Heading.vue"

const { t } = useI18n()
const route = useRoute("categories-slug")
const { findCategoryBySlug } = useCategory()

const { data: category } = await useAsyncData(
  () => `category-${route.params.slug}`,
  () => findCategoryBySlug(route.params.slug)
)

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t("category.not_found")
  })
}

useSeoMeta({
  title: category.value.title,
  description: category.value.description,
  ogTitle: category.value.title,
  ogDescription: category.value.description,
  ogImage: getMediaSrc(category.value.thumbnailUrl),
  ogImageAlt: category.value.title
})

const categoryData = category.value
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <div class="mt-4 flex items-end gap-6">
      <NuxtImg :src="getMediaSrc(categoryData.thumbnailUrl)" :alt="categoryData.title" class="h-50 rounded-xl" />
      <Heading :title="categoryData.title" :description="categoryData.description" size="2xl" />
    </div>
    <StreamList :streams="categoryData.streams" :heading="t('streams.title')" />
  </UContainer>
</template>
