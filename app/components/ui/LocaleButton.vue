<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  locale.value === "en" ? setLocale("ru") : setLocale("en")
}
</script>

<template>
  <UButton :label="locale.toUpperCase()" variant="ghost" @click="toggleLocale" />
</template>
