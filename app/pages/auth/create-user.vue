<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { CreateUserDocument } from "~/graphql/generated/graphql"
import { createUserSchema, type CreateUserSchema } from "~/schemas/create-user.schema"

useHead({ title: "Stream | Create User" })
const apollo = useApollo()

const state = reactive<CreateUserSchema>({
  username: "skiper",
  email: "skiper@mail.com",
  password: "12341234",
  repeatPassword: "12341234"
})

watch(
  () => state,
  () => {
    error.value = null
  },
  { deep: true }
)

const isAnimating = ref(false)
const isLoading = ref(false)
const error = ref<string | null>(null)

const onSubmit = async (event: FormSubmitEvent<CreateUserSchema>) => {
  try {
    isLoading.value = true
    await apollo.mutate({
      mutation: CreateUserDocument,
      variables: { data: { username: event.data.username, email: event.data.email, password: event.data.password } }
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
    <UCard class="mt-10 w-100" title="Create user" variant="outline">
      <AppError v-if="error" :error="error" :is-animating="isAnimating" @animationend="isAnimating = false" />

      <UForm
        class="mt-2 space-y-8"
        :schema="createUserSchema"
        :state="state"
        :validate-on="['change']"
        @submit="onSubmit"
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
              <span class="inline-flex px-1">Username</span>
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
              <span class="inline-flex px-1">Email</span>
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
              <span class="inline-flex px-1">Repeat password</span>
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
          Create
        </UButton>
      </UForm>
      <template #footer>
        <div class="space-y-2 text-center text-xs">
          <p>Already have an account ?</p>
          <UButton to="/auth/login-user" variant="link" class="transition hover:underline" size="xs"> Login </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
