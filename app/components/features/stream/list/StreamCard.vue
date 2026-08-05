<script setup lang="ts">
import ChannelAvatar from "~/components/ui/ChannelAvatar.vue"
import type { FindRandomStreamsQuery } from "~/graphql/generated/graphql"
import StreamThumbnail from "./StreamThumbnail.vue"
import ChannelVerified from "~/components/ui/ChannelVerified.vue"

defineProps<{ stream: FindRandomStreamsQuery["findRandomStreams"][number] }>()

const localePath = useLocalePath()
</script>

<template>
  <div class="space-y-3">
    <NuxtLink :to="localePath(`/${stream.user.username}`)" class="block">
      <StreamThumbnail :url="stream.thumbnailUrl" :user="stream.user" :isLive="stream.isLive" />

      <h2 class="mt-3 truncate text-base font-semibold">
        {{ stream.title }}
      </h2>
    </NuxtLink>

    <div class="flex gap-2">
      <NuxtLink :to="localePath(`/${stream.user.username}`)">
        <ChannelAvatar :channel="stream.user" :isLive="stream.isLive" />
      </NuxtLink>

      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <NuxtLink :to="localePath(`/${stream.user.username}`)">
            <h3 class="hover:text-muted truncate font-semibold transition-colors">
              {{ stream.user.username }}
            </h3>
          </NuxtLink>

          <ChannelVerified v-if="stream.user.isVerified" size="sm" />
        </div>

        <NuxtLink
          v-if="stream.category"
          :to="localePath(`/categories/${stream.category.slug}`)"
          class="hover:text-muted truncate text-sm transition-colors"
        >
          {{ stream.category.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
