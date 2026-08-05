<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mt-10 flex flex-col items-center justify-center">
    <Icon name="lucide:search-x" class="text-muted" size="30" />
    <h1 class="mt-4 text-2xl font-semibold">{{ t("search.empty.title") }}</h1>
    <p class="text-muted mt-3 w-full text-center">
      {{ t("search.empty.description") }}
    </p>
  </div>
</template>
