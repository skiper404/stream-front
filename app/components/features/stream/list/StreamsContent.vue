<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core"
import type { GetAllStreamsQuery } from "~/graphql/generated/graphql"

import EmptyState from "~/components/ui/EmptyState.vue"
import AppLoader from "~/components/ui/AppLoader.vue"
import StreamList from "./StreamList.vue"

const PAGE_SIZE = 12

const { t } = useI18n()

const props = defineProps<{ streams: GetAllStreamsQuery["getAllStreams"]; pending: boolean }>()
const route = useRoute()
const hasMore = ref(true)
const { getStreams } = useStream()
const loadMoreTrigger = useTemplateRef("trigger")
const loadingMore = ref(false)

const streamList = ref([...props.streams])

watch(
  () => props.streams,
  streams => {
    streamList.value = [...streams]
    hasMore.value = streams.length === PAGE_SIZE
  }
)

async function loadMore() {
  try {
    loadingMore.value = true
    const data = await getStreams({
      skip: streamList.value.length,
      take: PAGE_SIZE,
      searchTerm: String(route.query.searchTerm ?? "")
    })

    streamList.value.push(...data)

    if (data.length < PAGE_SIZE) {
      hasMore.value = false
    }
  } finally {
    loadingMore.value = false
  }
}

useIntersectionObserver(loadMoreTrigger, ([entry]) => {
  if (!entry?.isIntersecting || !hasMore.value || loadingMore.value) return

  loadMore()
})
</script>

<template>
  <AppLoader v-if="pending" />
  <div v-else-if="streamList.length">
    <StreamList :streams="streamList" :heading="t('streams.title')" />
    <AppLoader v-if="loadingMore" />
    <div ref="trigger" class="min-h-0"></div>
  </div>
  <EmptyState v-else />
</template>
