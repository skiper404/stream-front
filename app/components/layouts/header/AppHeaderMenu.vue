<script setup lang="ts">
import ProfileMenu from "./ProfileMenu.vue"

const userStore = useUserStore()
</script>

<template>
  <ProfileMenu v-if="userStore.user" :user="userStore.user" />
  <div v-else class="flex gap-2">
    <NuxtLink to="/account/login-user">
      <UButton variant="soft" class="cursor-pointer">Sign In</UButton>
    </NuxtLink>
    <NuxtLink to="/account/create-user">
      <UButton variant="solid" class="cursor-pointer">Sign Up</UButton>
    </NuxtLink>
  </div>
</template>
