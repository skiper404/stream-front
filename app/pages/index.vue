<script setup lang="ts">
import CategoriesList from "~/components/features/category/CategoriesList.vue"
import StreamList from "~/components/features/stream/list/StreamList.vue"

const { t, locale } = useI18n()

const { findRandomStreams } = useStream()
const { findRandomCategories } = useCategory()

useSeoMeta({
  title: t("seo.home.title"),
  description: t("seo.home.description")
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})

const { data: streams } = await useAsyncData("random-streams", () => findRandomStreams(), { default: () => [] })
const { data: categories } = await useAsyncData("random-categories", () => findRandomCategories(), {
  default: () => []
})
</script>

<template>
  <UContainer :ui="{ base: 'space-y-4' }">
    <StreamList :streams="streams" :heading="t('home.recommended_streams')" />
    <CategoriesList :categories="categories" />
  </UContainer>
</template>
