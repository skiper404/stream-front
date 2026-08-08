<script setup lang="ts">
import type { NuxtError } from "#app"
import AppLogo from "./components/layouts/header/AppLogo.vue"

const props = defineProps<{ error: NuxtError }>()
const isLoading = ref(false)

const { t } = useI18n()

const loading = useLoadingIndicator()

loading.start()

const backHome = () => {
  isLoading.value = true
  clearError({ redirect: "/" })
}
</script>

<template>
  <header class="bg-accented/50 fixed top-0 flex h-16 w-full px-8">
    <AppLogo />
  </header>
  <div class="flex h-screen flex-col items-center justify-center gap-4 pt-12">
    <div class="text-6xl">{{ props.error.status }}</div>
    <div>{{ props.error.message }}</div>
    <UButton :label="t('common.back_home')" @click="backHome" :loading="isLoading" :disabled="isLoading" />
  </div>
</template>
