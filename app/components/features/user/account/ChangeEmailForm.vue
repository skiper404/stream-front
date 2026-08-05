<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { emailSchema, type EmailSchema } from "~/schemas/email.schema"

const { t } = useI18n()
const toast = useToast()
const userStore = useUserStore()
const isEmailLoading = ref(false)

const schema = emailSchema(t)

const emailState = reactive<EmailSchema>({ email: userStore.user?.email ?? "" })

const changeEmail = async (event: FormSubmitEvent<EmailSchema>) => {
  try {
    isEmailLoading.value = true
    await userStore.changeEmail(event.data.email)
    toast.add({
      title: t("settings.email.update_success")
    })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isEmailLoading.value = false
  }
}
</script>

<template>
  <UCard :title="t('settings.email.title')" variant="soft">
    <UForm
      class="w-full space-y-4 transition-all md:w-xl"
      :schema="schema"
      :state="emailState"
      :validate-on="['input']"
      @submit.prevent="changeEmail"
    >
      <UFormField name="email" :label="t('settings.email.label')" :description="t('settings.email.description')">
        <UInput
          v-model="emailState.email"
          :placeholder="userStore.user?.email"
          class="w-full"
          variant="subtle"
          icon="lucide:user"
        />
      </UFormField>

      <UButton
        :label="t('settings.email.save')"
        type="submit"
        size="xs"
        :disabled="isEmailLoading"
        :loading="isEmailLoading"
      />
    </UForm>
  </UCard>
</template>
