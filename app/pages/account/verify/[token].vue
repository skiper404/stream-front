<script setup lang="ts">
const route = useRoute()
const toast = useToast()
const authStore = useAuthStore()

const token = String(route.params.token ?? "")
const isLoading = ref(false)

const verifyAccount = async () => {
  try {
    isLoading.value = true
    await authStore.verifyAccount(token)
    await navigateTo("/auth/login-user")
    toast.add({ title: "Account verified!" })
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
    <div>Verification account</div>
    <div>token: {{ token }}</div>
    <UButton :disabled="isLoading" :loading="isLoading" @click="verifyAccount">Verify Account</UButton>
  </div>
</template>
