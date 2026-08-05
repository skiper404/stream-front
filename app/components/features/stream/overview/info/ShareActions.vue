<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()
const props = defineProps<{
  channel: FindChannelByUsernameQuery["findChannelByUsername"]
}>()

const requestUrl = useRequestURL()

const shareUrl = computed(() => `${requestUrl.origin}/${props.channel.username}`)
</script>

<template>
  <UPopover mode="hover" enable-touch>
    <UButton color="neutral" variant="subtle" :aria-label="t('share.title')" icon="lucide:share-2" size="xs" />

    <template #content>
      <div class="p-4">
        <h2 class="text-muted">{{ t("share.title") }}</h2>

        <div class="mt-4">
          <a
            :href="`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`"
            target="_blank"
            rel="noopener
            noreferrer"
            class="hover:text-primary flex items-center gap-2 transition-colors"
          >
            <Icon name="simple-icons:telegram" />
            {{ t("share.telegram") }}
          </a>
        </div>
      </div>
    </template>
  </UPopover>
</template>
