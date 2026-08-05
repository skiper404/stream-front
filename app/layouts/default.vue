<script setup lang="ts">
import AppHeader from "~/components/layouts/header/AppHeader.vue"
import AppSidebar from "~/components/layouts/sidebar/AppSidebar.vue"
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    <div class="flex">
      <AppSidebar />
      <UMain class="scrollbar-thumb-primary flex-1 scrollbar-thin">
        <slot />
      </UMain>
    </div>
  </div>
</template>
