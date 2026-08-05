<script setup lang="ts">
import type { FindChatMessagesByStreamQuery } from "~/graphql/generated/graphql"

const props = defineProps<{
  message: FindChatMessagesByStreamQuery["findChatMessagesByStream"][number]
  isSponsor: Boolean
}>()

const color = getRandomColor()

const formattedDate = computed(() =>
  new Date(props.message.createdAt as Date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })
)
</script>

<template>
  <div class="bg-muted flex gap-2 rounded-xl p-2 text-sm">
    <p class="text-muted">{{ formattedDate }}</p>
    <div class="flex grow flex-wrap items-baseline gap-1">
      <p class="flex items-center whitespace-nowrap">
        <span class="truncate" :style="{ color }"> {{ message.user.username }} </span>
        <Icon v-if="isSponsor" name="lucide:medal" class="text-primary ml-1" size="10" />
      </p>
      :
      <p className="break-all">{{ message.text }}</p>
    </div>
  </div>
</template>
