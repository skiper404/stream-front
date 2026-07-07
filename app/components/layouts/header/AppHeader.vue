<script setup lang="ts">
import AppHeaderMenu from "./AppHeaderMenu.vue"
import AppLogo from "./AppLogo.vue"
import AppSearch from "./AppSearch.vue"

const route = useRoute()
const sessionStore = useSessionStore()

const isAuthPage = computed(() => route.path.startsWith("/account"))
</script>

<template>
  <div class="bg-accented/50 fixed top-0 z-10 w-full py-2 backdrop-blur-sm">
    <UContainer class="flex items-center justify-between gap-2">
      <AppLogo />
      <AppSearch v-if="sessionStore.session" />
      <AppHeaderMenu v-if="!isAuthPage" />
    </UContainer>
  </div>
</template>
