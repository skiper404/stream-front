<script setup lang="ts">
const toast = useToast()

const isLoading = ref(false)

const email = ref("")

const resetPassword = async () => {
  try {
    isLoading.value = true
    await GqlResetPassword({ data: { email: email.value } })

    toast.add({ title: "Link with reset password sent to your email!" })

    // await navigateTo("/auth/login-user")
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
