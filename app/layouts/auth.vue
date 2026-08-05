<script setup lang="ts">
import AppHeader from "~/components/layouts/header/AppHeader.vue"
</script>

<template>
  <div class="h-screen">
    <AppHeader />
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
