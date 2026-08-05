<script setup lang="ts">
defineProps<{ isFullscreen: boolean }>()
const { t } = useI18n()

const emit = defineEmits<{ (e: "toggle"): void }>()
</script>

<template>
  <UButton
    :icon="isFullscreen ? 'lucide:minimize' : 'lucide:maximize'"
    :aria-label="isFullscreen ? t('common.minimize') : t('common.maximize')"
    variant="ghost"
    @click="emit('toggle')"
    class="cursor-pointer"
  />
</template>
