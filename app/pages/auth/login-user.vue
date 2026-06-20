<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { LoginUserDocument } from "~/graphql/generated/graphql"
import { loginUserSchema, type LoginUserSchema } from "~/schemas/login-user.schema"

useHead({ title: "Stream | Login User" })

const apollo = useApollo()

const state = reactive<LoginUserSchema>({ login: "skiper", password: "12341234" })

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
    await apollo.mutate({
      mutation: LoginUserDocument,
      variables: { data: { login: event.data.login, password: event.data.password } }
    })

    await navigateTo("/")
  } catch (err: any) {
    if (err) {
      error.value = err.message
      isAnimating.value = true
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UContainer class="flex h-full flex-col items-center">
    <UCard class="mt-10 w-100" title="Login user" variant="outline">
      <AppError v-if="error" :error="error" :is-animating="isAnimating" @animationend="isAnimating = false" />

      <UForm
        class="mt-2 space-y-8"
        :schema="loginUserSchema"
        :state="state"
        :validate-on="['change']"
        @submit="onSubmit"
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
              <span class="inline-flex px-1">Username or email</span>
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
              <span class="inline-flex px-1">Password</span>
            </label>
          </UInput>
        </UFormField>

        <UButton
          type="submit"
          class="flex w-full items-center justify-center"
          :loading="isLoading"
          :disabled="isLoading"
          variant="soft"
        >
          Login
        </UButton>
      </UForm>
      <template #footer>
        <div class="space-y-2 text-center text-xs">
          <p>Don't have an account ?</p>
          <UButton to="/auth/create-user" variant="link" class="transition hover:underline" size="xs">
            Create account
          </UButton>
          <UButton
            to="/account/reset-password"
            variant="link"
            color="warning"
            class="transition hover:underline"
            size="xs"
          >
            Forgot password
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
