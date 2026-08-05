<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import FormError from "~/components/ui/FormError.vue"
import { createUserSchema, type CreateUserSchema } from "~/schemas/create-user.schema"

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: t("seo.create_user.title"),
  description: t("seo.create_user.description")
})

definePageMeta({ middleware: "guest", layout: "auth" })
useHead({ title: "Stream | Create User" })

const authStore = useAuthStore()

const schema = createUserSchema(t)

const state = reactive<CreateUserSchema>({
  username: "",
  email: "",
  password: "",
  repeatPassword: ""
})

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

const onSubmit = async (event: FormSubmitEvent<CreateUserSchema>) => {
  try {
    isLoading.value = true
    await authStore.create(event.data.username, event.data.email, event.data.password)
    await navigateTo(localePath("/account/login-user"))
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
    <UCard class="w-full transition-all sm:w-100" :title="t('auth.create_account')" variant="outline">
      <FormError v-if="error" :error="error" :is-animating="isAnimating" @animationend="isAnimating = false" />

      <UForm
        class="mt-2 space-y-8"
        :schema="schema"
        :state="state"
        :validate-on="['change']"
        @submit.prevent="onSubmit"
      >
        <UFormField name="username">
          <UInput
            v-model="state.username"
            class="w-full"
            variant="soft"
            placeholder=""
            icon="lucide:user"
            :ui="{ base: 'peer' }"
          >
            <label
              class="text-highlighted peer-focus:text-highlighted peer-placeholder-shown:text-dimmed pointer-events-none absolute -top-6 px-2 text-xs font-medium transition-all peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-6 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:font-medium"
            >
              <span class="inline-flex px-1">{{ t("auth.username") }}</span>
            </label>
          </UInput>
        </UFormField>

        <UFormField name="email">
          <UInput
            v-model="state.email"
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
              <span class="inline-flex px-1">{{ t("auth.password") }}</span>
            </label>
          </UInput>
        </UFormField>

        <UFormField name="repeatPassword">
          <UInput
            v-model="state.repeatPassword"
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
              <span class="inline-flex px-1">{{ t("auth.repeat_password") }}</span>
            </label>
          </UInput>
        </UFormField>

        <UButton
          type="submit"
          class="flex w-full items-center justify-center"
          :loading="isLoading"
          :disabled="isLoading"
        >
          Create
        </UButton>
      </UForm>
      <template #footer>
        <div class="space-y-2 text-center text-xs">
          <p>{{ t("auth.already_have_account") }}</p>
          <UButton to="/account/login-user" variant="link" class="transition hover:underline" size="xs">
            {{ t("auth.sign_in") }}
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
