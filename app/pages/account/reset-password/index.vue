<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { emailSchema, type EmailSchema } from "~/schemas/email.schema"

const { t } = useI18n()
const toast = useToast()
const authStore = useAuthStore()
const localePath = useLocalePath()

useSeoMeta({
  title: t("seo.reset_password.title"),
  description: t("seo.reset_password.description"),
  robots: "noindex,nofollow"
})

const isLoading = ref(false)
const schema = emailSchema(t)

const emailState = reactive<EmailSchema>({ email: "" })

const resetPassword = async (event: FormSubmitEvent<EmailSchema>) => {
  try {
    isLoading.value = true
    await authStore.resetPassword(event.data.email)
    toast.add({
      title: t("auth.reset_password_email_sent")
    })
    await navigateTo(localePath("/account/login-user"))
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
            {{ t("auth.reset_password") }}
          </h1>
          <p class="text-muted">
            {{ t("auth.reset_password_description") }}
          </p>
        </div>
      </template>

      <UForm
        class="mt-2 space-y-8"
        :schema="schema"
        :state="emailState"
        :validate-on="['change']"
        @submit.prevent="resetPassword"
      >
        <UFormField name="email">
          <UInput
            v-model="emailState.email"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:at-sign"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("auth.email") }}</span>
            </label>
          </UInput>
        </UFormField>
        <UButton block class="cursor-pointer" :loading="isLoading" :disabled="isLoading" type="submit">
          {{ t("auth.send_reset_link") }}
        </UButton>
      </UForm>

      <template #footer>
        <div class="text-center text-xs">
          {{ t("auth.remember_password") }}
          <NuxtLink :to="localePath('/account/login-user')" class="text-primary font-medium hover:underline">
            {{ t("auth.sign_in") }}
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
