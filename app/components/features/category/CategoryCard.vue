<script setup lang="ts">
import type { FindRandomCategoriesQuery } from "~/graphql/generated/graphql"

const localePath = useLocalePath()

const props = defineProps<{
  category: FindRandomCategoriesQuery["findRandomCategories"][0]
}>()

const color = ref("")

onMounted(() => {
  color.value = getRandomColor()
})

const src = getMediaSrc(props.category.thumbnailUrl)
</script>

<template>
  <NuxtLink :to="localePath(`/categories/${props.category.slug}`)" class="space-y-2">
    <div class="group relative">
      <div
        class="absolute inset-0 -z-1 rounded-xl transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"
        :style="{ backgroundColor: color }"
      ></div>

      <NuxtImg
        :src="src"
        :alt="category.title"
        class="h-full w-full rounded-xl object-cover transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>

    <div>
      <h2 class="text-background text-center">
        {{ props.category.title }}
      </h2>
    </div>
  </NuxtLink>
</template>
