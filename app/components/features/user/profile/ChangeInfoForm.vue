<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { bioSchema, type BioSchema } from "~/schemas/bio.schema"
import { usernameSchema, type UsernameSchema } from "~/schemas/username.schema"

const { t } = useI18n()
const userStore = useUserStore()
const toast = useToast()
const isUsernameLoading = ref(false)
const isBioLoading = ref(false)
const maxLength = 100

const schema = usernameSchema(t)

const usernameState = reactive<UsernameSchema>({ username: userStore.user?.username ?? "" })
const bioState = reactive<BioSchema>({ bio: userStore.user?.bio ?? "" })

const changeUsername = async (event: FormSubmitEvent<UsernameSchema>) => {
  try {
    isUsernameLoading.value = true
    await userStore.changeUsername(event.data.username)
    toast.add({
      title: t("settings.profile.username.updated")
    })
  } catch (e: any) {
    toast.add({ title: t(e.message) })
  } finally {
    isUsernameLoading.value = false
  }
}

const changeBio = async (event: FormSubmitEvent<BioSchema>) => {
  try {
    isBioLoading.value = true
    await userStore.changeBio(event.data.bio)
    toast.add({
      title: t("settings.profile.bio.updated")
    })
  } catch (e: any) {
    toast.add({ title: t(e.message) })
  } finally {
    isBioLoading.value = false
  }
}
</script>

<template>
  <UCard :title="t('settings.profile.username.label')" variant="soft" :ui="{ body: 'space-y-10' }">
    <UForm
      class="w-full space-y-4 transition-all md:w-xl"
      :schema="schema"
      :state="usernameState"
      :validate-on="['input']"
      @submit.prevent="changeUsername"
    >
      <UFormField
        name="username"
        :label="t('settings.profile.username.label')"
        :description="t('settings.profile.username.description')"
      >
        <UInput
          v-model="usernameState.username"
          :placeholder="userStore.user?.username"
          class="w-full"
          variant="subtle"
          icon="lucide:user"
        />
      </UFormField>

      <UButton
        :label="t('settings.profile.username.save')"
        type="submit"
        size="xs"
        :disabled="isUsernameLoading"
        :loading="isUsernameLoading"
      />
    </UForm>

    <UForm
      class="w-full space-y-4 transition-all md:w-xl"
      :schema="bioSchema"
      :state="bioState"
      :validate-on="['input']"
      @submit.prevent="changeBio"
    >
      <UFormField
        name="bio"
        :label="t('settings.profile.bio.label')"
        :description="t('settings.profile.bio.description')"
      >
        <UTextarea
          v-model="bioState.bio"
          :maxlength="maxLength"
          :placeholder="t('settings.profile.bio.placeholder')"
          :ui="{
            base: 'pr-16 w-full'
          }"
          variant="subtle"
          autoresize
          class="w-full"
          :maxrows="10"
          icon="lucide:message-square"
        >
          <template #trailing>
            <div class="text-muted text-xs tabular-nums">{{ bioState.bio.length }}/{{ maxLength }}</div>
          </template>
        </UTextarea>
      </UFormField>

      <UButton
        :label="t('settings.profile.bio.save')"
        type="submit"
        size="xs"
        :disabled="isBioLoading"
        :loading="isBioLoading"
      />
    </UForm>
  </UCard>
</template>
