<script setup lang="ts">
import StreamOverview from "~/components/features/stream/overview/StreamOverview.vue"
import AppLoader from "~/components/ui/AppLoader.vue"

const route = useRoute("username")
const { t, locale } = useI18n()

const { findChannelByUsername } = useChannel()

const { data: channel, pending } = await useAsyncData(`${route.params.username}-channel`, () =>
  findChannelByUsername(route.params.username)
)

if (!channel.value) {
  throw createError({
    statusCode: 404,
    message: t("channel.not_found")
  })
}

useSeoMeta({
  title: () =>
    channel.value ? t("seo.channel.title", { username: channel.value.username }) : t("seo.channel.loading_title"),

  description: () =>
    channel.value
      ? t("seo.channel.description", { username: channel.value.username })
      : t("seo.channel.loading_description")
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})
</script>

<template>
  <UContainer>
    <AppLoader v-if="pending" />
    <StreamOverview v-if="channel" :channel="channel" />
  </UContainer>
</template>
