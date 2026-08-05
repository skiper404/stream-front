<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { passwordSchema, type PasswordSchema } from "~/schemas/password.schema"

const { t } = useI18n()
const toast = useToast()
const userStore = useUserStore()
const isShowOldPassword = ref(true)
const isShowNewPassword = ref(true)
const isPasswordLoading = ref(false)

const schema = passwordSchema(t)

const passwordState = reactive<PasswordSchema>({ newPassword: "", oldPassword: "" })

const togglePassword = (flag: "old" | "new") => {
  if (flag === "old") {
    isShowOldPassword.value = !isShowOldPassword.value
  }

  if (flag === "new") {
    isShowNewPassword.value = !isShowNewPassword.value
  }
}

const changePassword = async (event: FormSubmitEvent<PasswordSchema>) => {
  try {
    isPasswordLoading.value = true
    await userStore.changePassword(event.data.newPassword, event.data.oldPassword)
    toast.add({
      title: t("settings.password.update_success")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isPasswordLoading.value = false
  }
}
</script>

<template>
  <UCard :title="t('settings.password.title')" variant="soft">
    <UForm
      class="w-full space-y-4 transition-all md:w-xl"
      :schema="schema"
      :state="passwordState"
      :validate-on="['input']"
      @submit.prevent="changePassword"
    >
      <UFormField name="oldPassword" :label="t('settings.password.current_password.label')">
        <UInput
          v-model="passwordState.oldPassword"
          placeholder="********"
          class="w-full"
          variant="subtle"
          icon="lucide:lock"
          :type="isShowOldPassword ? 'password' : 'text'"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="isShowOldPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="isShowOldPassword ? t('settings.password.show') : t('settings.password.hide')"
              :aria-pressed="isShowOldPassword"
              aria-controls="password"
              @click="togglePassword('old')"
            />
          </template>
        </UInput>
      </UFormField>

      <UFormField name="newPassword" :label="t('settings.password.new_password.label')">
        <UInput
          v-model="passwordState.newPassword"
          placeholder="********"
          class="w-full"
          variant="subtle"
          icon="lucide:lock"
          :type="isShowNewPassword ? 'password' : 'text'"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="isShowNewPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="isShowNewPassword ? t('settings.password.show') : t('settings.password.hide')"
              :aria-pressed="isShowNewPassword"
              aria-controls="password"
              @click="togglePassword('new')"
            />
          </template>
        </UInput>
      </UFormField>

      <UButton
        :label="t('settings.password.save')"
        type="submit"
        size="xs"
        :disabled="isPasswordLoading"
        :loading="isPasswordLoading"
      />
    </UForm>
  </UCard>
</template>
