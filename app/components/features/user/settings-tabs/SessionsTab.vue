<script setup lang="ts">
import SessionsList from "../sessions/SessionsList.vue"
</script>

<template>
  <UCard
    :title="$t('settings.sessions.title')"
    :description="$t('settings.sessions.description')"
    :ui="{ body: 'space-y-8' }"
  >
    <SessionsList />
  </UCard>
</template>
