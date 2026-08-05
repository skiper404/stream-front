<script setup lang="ts">
import type { FindRandomStreamsQuery } from "~/graphql/generated/graphql.js"
import StreamCard from "./StreamCard.vue"

defineProps<{ streams: FindRandomStreamsQuery["findRandomStreams"]; heading: string }>()
</script>

<template>
  <h1 class="text-2xl font-semibold">{{ heading }}</h1>
  <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <StreamCard v-for="stream in streams" :key="stream.id" :stream="stream" />
  </div>
</template>
