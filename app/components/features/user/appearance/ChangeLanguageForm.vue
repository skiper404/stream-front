<script setup lang="ts">
const { t } = useI18n()
const { locale, setLocale } = useI18n()

type TypeLocale = "en" | "ru"

const locales = ref(["en", "ru"])
</script>

<template>
  <UCard
    :title="t('settings.appearance.language.title')"
    variant="soft"
    :ui="{ body: 'flex flex-wrap justify-between gap-2' }"
  >
    <div>{{ t("settings.appearance.language.label") }}</div>
    <div class="space-x-2">
      <UButton
        v-for="l in locales"
        :label="l.toUpperCase()"
        class="cursor-pointer"
        :variant="locale === l ? 'solid' : 'soft'"
        @click="setLocale(l as TypeLocale)"
      />
    </div>
  </UCard>
</template>
