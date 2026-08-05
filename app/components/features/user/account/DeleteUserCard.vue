<script setup lang="ts">
import { deleteUserSchema, type DeleteUserSchema } from "~/schemas/delete-user.schema"

const { t } = useI18n()
const authStore = useAuthStore()
const userStore = useUserStore()
const toast = useToast()

const isLoading = ref(false)
const isShowPassword = ref(true)
const isModalOpen = ref(false)

const deleteUserState = reactive<DeleteUserSchema>({
  password: ""
})

const closeModal = () => {
  isModalOpen.value = false
}

const togglePassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const onSubmit = () => {
  isModalOpen.value = true
}

const deleteAccount = async () => {
  try {
    isLoading.value = true
    await authStore.deleteAccount(deleteUserState.password)
    await navigateTo("/")
    toast.add({
      title: t("settings.delete_account.success", {
        username: userStore.user?.username
      })
    })
    userStore.user = null
  } catch (e: any) {
    toast.add({
      title: t(e.message)
    })
  } finally {
    isLoading.value = false
    isModalOpen.value = false
  }
}
</script>

<template>
  <UCard
    :title="t('settings.delete_account.title')"
    :description="t('settings.delete_account.description')"
    variant="soft"
  >
    <UForm
      class="w-full space-y-4 md:w-xl"
      :schema="deleteUserSchema"
      :state="deleteUserState"
      :validate-on="['input']"
      @submit="onSubmit"
    >
      <UFormField name="password" :label="t('settings.delete_account.password.label')">
        <UInput
          v-model="deleteUserState.password"
          class="w-full"
          variant="subtle"
          icon="lucide:lock"
          placeholder="********"
          :type="isShowPassword ? 'password' : 'text'"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="isShowPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="isShowPassword ? t('settings.delete_account.show') : t('settings.delete_account.hide')"
              @click="togglePassword"
            />
          </template>
        </UInput>
      </UFormField>

      <UModal
        v-model:open="isModalOpen"
        :title="t('settings.delete_account.confirmation.title')"
        :description="t('settings.delete_account.confirmation.description')"
      >
        <UButton
          type="submit"
          :label="t('settings.delete_account.delete')"
          color="error"
          size="xs"
          :disabled="deleteUserState.password.length < 8"
        />

        <template #body>
          <div class="flex justify-center gap-8">
            <UButton
              :label="t('settings.delete_account.confirmation.cancel')"
              variant="subtle"
              size="xs"
              @click="closeModal"
            />

            <UButton
              :label="t('settings.delete_account.confirmation.confirm')"
              color="error"
              size="xs"
              :loading="isLoading"
              :disabled="isLoading"
              @click="deleteAccount"
            />
          </div>
        </template>
      </UModal>
    </UForm>
  </UCard>
</template>
