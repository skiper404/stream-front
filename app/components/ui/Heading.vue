<script setup lang="ts">
defineProps<{ title: string; description: string; size?: "2xl" }>()
</script>

<template>
  <div>
    <h2 :class="[size === '2xl' ? 'text-4xl font-semibold' : 'text-lg']">{{ title }}</h2>
    <p class="text-muted text-sm">{{ description }}</p>
  </div>
</template>
