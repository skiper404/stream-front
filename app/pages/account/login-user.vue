<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import FormError from "~/components/ui/FormError.vue"
import { loginUserSchema, type LoginUserSchema } from "~/schemas/login-user.schema"

const localePath = useLocalePath()

definePageMeta({ middleware: "guest", layout: "auth" })
const { t, locale } = useI18n()

useSeoMeta({
  title: t("seo.login.title"),
  description: t("seo.login.description")
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})

const authStore = useAuthStore()
const userStore = useUserStore()

const schema = loginUserSchema(t)

const state = reactive<LoginUserSchema>({ login: "", password: "" })

const isAnimating = ref(false)
const isLoading = ref(false)
const error = ref<string | null>(null)

watch(
  () => state,
  () => {
    error.value = null
  },
  { deep: true }
)

const onSubmit = async (event: FormSubmitEvent<LoginUserSchema>) => {
  try {
    isLoading.value = true
    await authStore.login(event.data.login, event.data.password)
    await navigateTo(localePath(`/${userStore.user!.username}`))
  } catch (err: any) {
    if (err) {
      error.value = t(err.message)
      isAnimating.value = true
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UContainer class="flex h-screen flex-col items-center" :ui="{ base: 'mt-20' }">
    <UCard class="w-full transition-all sm:w-100" :title="t('login.title')" variant="outline">
      <FormError v-if="error" :error="error" :is-animating="isAnimating" @animationend="isAnimating = false" />

      <UForm
        class="mt-2 space-y-8"
        :schema="schema"
        :state="state"
        :validate-on="['change']"
        @submit.prevent="onSubmit"
      >
        <UFormField name="login">
          <UInput
            v-model="state.login"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:user"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("login.username_or_email") }}</span>
            </label>
          </UInput>
        </UFormField>

        <UFormField name="password">
          <UInput
            v-model="state.password"
            type="password"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:lock"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("common.password") }}</span>
            </label>
          </UInput>
        </UFormField>

        <UButton
          type="submit"
          class="flex w-full items-center justify-center"
          :loading="isLoading"
          :disabled="isLoading"
        >
          {{ t("login.sign_in") }}
        </UButton>
      </UForm>
      <template #footer>
        <div class="space-y-2 text-center text-xs">
          <p>{{ t("login.no_account") }}</p>
          <UButton to="/account/create-user" variant="link" class="transition hover:underline" size="xs">
            {{ t("login.create_account") }}
          </UButton>
          <UButton
            to="/account/reset-password"
            variant="link"
            color="warning"
            class="transition hover:underline"
            size="xs"
          >
            {{ t("login.forgot_password") }}
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
