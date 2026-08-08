<script setup lang="ts">
import ProfileMenu from "./ProfileMenu.vue"

const userStore = useUserStore()
const { t } = useI18n()
</script>

<template>
  <ProfileMenu v-if="userStore.user" :user="userStore.user" />
  <div v-else class="flex gap-2">
    <UButton to="/account/login-user" variant="soft" class="cursor-pointer"> {{ t("auth.sign_in") }}</UButton>
    <UButton variant="solid" to="/account/create-user" class="hidden cursor-pointer sm:block">
      {{ t("auth.sign_up") }}</UButton
    >
  </div>
</template>
