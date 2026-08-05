<script setup lang="ts">
import CategoryCard from "./CategoryCard.vue"
import type { FindRandomCategoriesQuery } from "~/graphql/generated/graphql.js"

const { t } = useI18n()

defineProps<{ categories: FindRandomCategoriesQuery["findRandomCategories"] }>()
</script>

<template>
  <h1 class="text-2xl font-semibold">
    {{ t("categories.title") }}
  </h1>
  <div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>
