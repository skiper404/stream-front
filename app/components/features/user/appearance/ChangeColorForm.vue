<script setup lang="ts">
import { colors } from "~/constants/theme-colors"

const { t } = useI18n()
const { primaryColor, setPrimaryColor } = usePrimaryColor()
</script>

<template>
  <UCard
    :title="t('settings.appearance.accent_color.title')"
    variant="soft"
    :ui="{ body: 'flex flex-wrap justify-between gap-2' }"
  >
    <div>{{ t("settings.appearance.accent_color.label") }}</div>
    <div class="flex flex-wrap gap-2">
      <UButton
        v-for="color in colors"
        :key="color"
        type="button"
        class="ring-offset-default size-6 cursor-pointer rounded-lg ring-2 transition hover:saturate-150 lg:size-8"
        :class="primaryColor === color ? 'ring-white' : 'ring-transparent'"
        :style="{ backgroundColor: `var(--color-${color}-500)` }"
        @click="setPrimaryColor(color)"
      />
    </div>
  </UCard>
</template>
