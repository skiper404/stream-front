<script setup lang="ts">
const { t } = useI18n()
const theme = useColorMode()

const toggleTheme = () => {
  theme.preference = theme.preference === "dark" ? "light" : "dark"
}
</script>

<template>
  <UCard
    :title="t('settings.appearance.theme.title')"
    variant="soft"
    :ui="{ body: 'flex flex-wrap justify-between gap-2' }"
  >
    <div>{{ t("settings.appearance.theme.label") }}</div>
    <div class="flex items-center gap-2">
      {{ t("settings.appearance.theme.dark") }}
      <USwitch unchecked-icon="lucide:moon" checked-icon="lucide:sun" @change="toggleTheme" />
      {{ t("settings.appearance.theme.light") }}
    </div>
  </UCard>
</template>
