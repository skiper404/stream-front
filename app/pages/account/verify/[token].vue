<script setup lang="ts">
const route = useRoute("account-verify-token")
const toast = useToast()
const authStore = useAuthStore()
const userStore = useUserStore()

const { t } = useI18n()

const token = computed(() => String(route.params.token ?? ""))
const isLoading = ref(false)

useSeoMeta({
  title: t("seo.verify_account.title"),
  description: t("seo.verify_account.description"),
  robots: "noindex,nofollow"
})

const verifyAccount = async () => {
  try {
    isLoading.value = true
    await authStore.verifyAccount(token.value)
    toast.add({
      title: t("auth.account_verified")
    })
    await navigateTo(`/${userStore.user?.username}`)
  } catch (e: any) {
    toast.add({
      title: t(e.message)
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UContainer class="flex h-full flex-col items-center" :ui="{ base: 'mt-20' }">
    <UCard class="w-full transition-all sm:w-100">
      <template #header>
        <div class="space-y-2 text-center">
          <h1 class="font-semibold">
            {{ t("auth.verify_account") }}
          </h1>
          <p class="text-muted">
            {{ t("auth.verify_account_description") }}
          </p>
        </div>
      </template>
      <UButton block :loading="isLoading" :disabled="isLoading" @click="verifyAccount" class="cursor-pointer">
        {{ t("auth.verify_account") }}
      </UButton>
      <template #footer>
        <div class="text-center text-xs">
          {{ t("auth.already_have_access") }}
          <NuxtLink to="/account/login-user" class="text-primary font-medium hover:underline">
            {{ t("auth.sign_in") }}
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
