<script setup lang="ts">
const { t } = useI18n()
const volume = defineModel<number>("volume", { required: true })

const emit = defineEmits<{ (e: "toggle"): void }>()
</script>

<template>
  <div class="flex items-center gap-2">
    <UButton
      :icon="volume === 0 ? 'lucide:volume-x' : volume >= 50 ? 'lucide:volume-2' : 'lucide:volume-1'"
      variant="ghost"
      :aria-label="t('common.toggle_sound')"
      @click="emit('toggle')"
    />
    <USlider v-model="volume" :max="100" class="w-32" size="xs" />
    <span class="text-primary text-xs font-black">{{ volume }}</span>
  </div>
</template>
w
