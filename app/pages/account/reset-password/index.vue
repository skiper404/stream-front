<script setup lang="ts">
const toast = useToast()
const authStore = useAuthStore()

const isLoading = ref(false)

const email = ref("")

const resetPassword = async () => {
  try {
    isLoading.value = true
    await authStore.resetPassword(email.value)
    await navigateTo("/auth/login-user")
    toast.add({ title: "Link with reset password sent to your email!" })
  } catch (e: any) {
    toast.add({ title: e.gqlErrors[0].message })
    isLoading.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="h-full space-y-4 text-center">
    <div>Enter Email: {{ email }}</div>
    <UInput v-model="email" />
    <UButton :disabled="isLoading" :loading="isLoading" @click="resetPassword">Reset password</UButton>
  </div>
</template>
