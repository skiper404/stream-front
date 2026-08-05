<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center gap-1">
      <Icon name="lucide:circle-check" class="text-primary" />
      <h3 class="font-semibold">{{ t("notifications.verified_channel.title") }}</h3>
    </div>
    <p class="text-muted text-sm">{{ t("notifications.verified_channel.description") }}</p>
  </div>
</template>
