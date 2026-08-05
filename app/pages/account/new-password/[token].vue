<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { resetPasswordSchema, type ResetPasswordSchema } from "~/schemas/reset-password.schema"

const route = useRoute("account-new-password-token")
const { t } = useI18n()
const toast = useToast()
const authStore = useAuthStore()

useSeoMeta({
  title: t("seo.new_password.title"),
  description: t("seo.new_password.description"),
  robots: "noindex,nofollow"
})

const token = computed(() => String(route.params.token ?? ""))
const isLoading = ref(false)

const schema = resetPasswordSchema(t)

const resetPasswordState = reactive<ResetPasswordSchema>({ password: "", passwordRepeat: "" })

const resetPassword = async (event: FormSubmitEvent<ResetPasswordSchema>) => {
  try {
    isLoading.value = true
    await authStore.newPassword(event.data.password, event.data.passwordRepeat, token.value)
    toast.add({
      title: t("auth.password_reset_success")
    })
    await navigateTo("/account/login-user")
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
            {{ t("auth.create_new_password") }}
          </h1>
          <p class="text-muted">
            {{ t("auth.create_new_password_description") }}
          </p>
        </div>
      </template>
      <UForm
        class="mt-2 space-y-8"
        :schema="schema"
        :state="resetPasswordState"
        :validate-on="['change']"
        @submit.prevent="resetPassword"
      >
        <UFormField name="password">
          <UInput
            v-model="resetPasswordState.password"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:lock"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("auth.password") }}</span>
            </label>
          </UInput>
        </UFormField>
        <UFormField name="passwordRepeat">
          <UInput
            v-model="resetPasswordState.passwordRepeat"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:lock"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("auth.repeat_password") }}</span>
            </label>
          </UInput>
        </UFormField>
        <UButton block class="cursor-pointer" :loading="isLoading" :disabled="isLoading" type="submit">
          {{ t("auth.set_password") }}
        </UButton>
      </UForm>

      <template #footer>
        <div class="text-center text-xs">
          {{ t("auth.remember_password") }}
          <UButton to="/account/login-user" class="text-primary font-medium hover:underline">
            {{ t("auth.sign_in") }}
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
