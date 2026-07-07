<script setup lang="ts">
import type { NuxtError } from "#app"
import AppLogo from "./components/layouts/header/AppLogo.vue"

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <header class="bg-accented/50 fixed top-0 w-full py-2">
    <AppLogo />
  </header>
  <div class="flex h-screen flex-col items-center justify-center gap-4 border pt-12">
    <div class="text-6xl">{{ props.error.status }}</div>
    <div>{{ props.error.message }}</div>
    <UButton label="Прекрасно" to="/" />
  </div>
</template>
