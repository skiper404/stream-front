<script setup lang="ts">
const route = useRoute("account-verify-token")

const toast = useToast()
const authStore = useAuthStore()
const userStore = useUserStore()

const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({ middleware: "guest", layout: "auth" })

const token = computed(() => String(route.params.token ?? ""))

const isLoading = ref(false)

useSeoMeta({
  title: t("seo.verify_account.title"),
  description: t("seo.verify_account.description"),
  robots: "noindex,nofollow"
})

onMounted(async () => {
  try {
    isLoading.value = true
    await authStore.verifyAccount(token.value)
    toast.add({
      title: t("auth.account_verified")
    })

    await navigateTo(localePath(`/${userStore.user?.username}`), {
      replace: true
    })
  } catch (e: any) {
    toast.add({
      title: t(e.message)
    })

    await navigateTo(localePath("/account/login-user"), {
      replace: true
    })
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <UContainer class="flex h-full flex-col items-center" :ui="{ base: 'mt-20' }">
    <div class="flex flex-col items-center gap-4">
      <Icon name="lucide:loader-circle" class="text-primary size-10 animate-spin" />

      <p class="text-muted">
        {{ t("auth.verifying_account") }}
      </p>
    </div>
  </UContainer>
</template>
