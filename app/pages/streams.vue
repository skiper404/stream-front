<script setup lang="ts">
import StreamsContent from "~/components/features/stream/list/StreamsContent.vue"

const { t, locale } = useI18n()
const route = useRoute()
const { getStreams } = useStream()

const searchTerm = computed(() => String(route.query.searchTerm ?? ""))

useSeoMeta({
  title: searchTerm.value ? t("seo.streams.search_title", { query: searchTerm.value }) : t("seo.streams.title"),

  description: searchTerm.value
    ? t("seo.streams.search_description", { query: searchTerm.value })
    : t("seo.streams.description")
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})

const { data: streams, pending } = await useAsyncData(
  () => `streams-${searchTerm.value}`,
  () =>
    getStreams({
      searchTerm: searchTerm.value,
      skip: 0,
      take: 12
    }),
  {
    watch: [searchTerm],
    default: () => []
  }
)
</script>

<template>
  <UContainer>
    <StreamsContent :streams="streams" :pending="pending" />
  </UContainer>
</template>
