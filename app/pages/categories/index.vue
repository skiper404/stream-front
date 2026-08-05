<script setup lang="ts">
import CategoryCard from "~/components/features/category/CategoryCard.vue"

const { t } = useI18n()

useSeoMeta({
  title: t("seo.categories.title"),
  description: t("seo.categories.description")
})

const { findAllCategories } = useCategory()

const { data: categories } = await useAsyncData("categories", () => findAllCategories(), { default: () => [] })
</script>

<template>
  <UContainer>
    <h1 class="text-2xl font-semibold">
      {{ t("categories.title") }}
    </h1>
    <div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </UContainer>
</template>
