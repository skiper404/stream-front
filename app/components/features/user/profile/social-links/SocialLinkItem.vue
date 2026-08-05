<script setup lang="ts">
import { useClipboard } from "@vueuse/core"

const { copy, copied } = useClipboard()
const { t } = useI18n()

interface SocialLink {
  id: string
  title: string
  url: string
}

defineProps<{ link: SocialLink; deletingLinkId?: string | null; editable: boolean }>()

const emit = defineEmits<{ (e: "remove", id: string): void }>()

const onClick = async (link: SocialLink, action: "copy" | "remove") => {
  if (action === "remove") emit("remove", link.id)
  if (action === "copy") copy(link.url)
}
</script>

<template>
  <div class="bg-muted flex items-center justify-between rounded-xl p-2">
    <div class="flex items-center gap-2">
      <div class="bg-accented flex items-center rounded-2xl p-2">
        <Icon :name="getIconName(link.url)" size="24" class="text-primary" />
      </div>
      <div>
        <div>{{ link.title }}</div>
        <div class="text-muted text-xs">{{ link.url }}</div>
      </div>
    </div>

    <UButton
      v-if="editable"
      :label="t('settings.profile.social_links.remove')"
      size="xs"
      variant="soft"
      class="cursor-pointer"
      :loading="link.id === deletingLinkId"
      @click="onClick(link, 'remove')"
    />

    <UButton
      v-else
      :icon="copied ? 'lucide:copy-check' : 'lucide:copy'"
      :aria-label="t('settings.profile.social_links.copy')"
      size="xs"
      variant="soft"
      class="cursor-pointer"
      :loading="link.id === deletingLinkId"
      @click="onClick(link, 'copy')"
    />
  </div>
</template>
