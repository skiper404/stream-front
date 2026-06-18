<script setup lang="ts">
const route = useRoute()
const toast = useToast()

const token = String(route.params.token ?? "")
const isLoading = ref(false)

const newPassword = ref("")

const resetPassword = async () => {
  try {
    isLoading.value = true
    await GqlNewPassword({ data: { password: newPassword.value, passwordRepeat: newPassword.value, token } })

    toast.add({ title: "Password reset!" })

    await navigateTo("/auth/login-user")
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
    <div>New password: {{ newPassword }}</div>
    <div>token: {{ token }}</div>
    New Password:
    <UInput v-model="newPassword" />
    Repeat Password:
    <UInput v-model="newPassword" />
    <UButton :disabled="isLoading" :loading="isLoading" @click="resetPassword">Set password</UButton>
  </div>
</template>
