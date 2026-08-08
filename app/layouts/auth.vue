<script setup lang="ts">
import AppLogo from "~/components/layouts/header/AppLogo.vue"
import LocaleButton from "~/components/ui/LocaleButton.vue"
</script>

<template>
  <div class="h-screen">
    <div class="from-primary/20 backdrop to-transparen z-10 flex h-16 items-center justify-between bg-linear-to-r px-8">
      <AppLogo />
      <LocaleButton />
    </div>
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
