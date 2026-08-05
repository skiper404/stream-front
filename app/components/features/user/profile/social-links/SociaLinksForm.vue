<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import { socialLinkSchema, type SocialLinkSchema } from "~/schemas/social-link.schema.js"
import SocialLinkList from "./SocialLinkList.vue"

const { t } = useI18n()
const toast = useToast()
const userStore = useUserStore()
const { createSocialLink, removeSocialLink } = useSocialLinks()
const isLoading = ref(false)
const deletingLinkId = ref<string | null>(null)

const schema = socialLinkSchema(t)

const state = reactive<SocialLinkSchema>({ title: "", url: "" })

const onSubmit = async (event: FormSubmitEvent<SocialLinkSchema>) => {
  try {
    isLoading.value = true
    await createSocialLink(event.data.title, event.data.url)
    await userStore.getUser()
    toast.add({
      title: t("settings.profile.social_links.add_success", {
        title: event.data.title
      })
    })
    state.title = ""
    state.url = ""
  } catch (e: any) {
    toast.add({ title: e })
  } finally {
    isLoading.value = false
  }
}

const remove = async (id: string) => {
  try {
    deletingLinkId.value = id
    toast.add({
      title: t("settings.profile.social_links.remove_success")
    })
    await removeSocialLink(id)
    await userStore.getUser()
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    deletingLinkId.value = null
  }
}
</script>

<template>
  <UCard :title="t('settings.profile.social_links.title')" variant="subtle" :ui="{ body: 'space-y-4' }">
    <UForm
      class="w-full space-y-4 transition-all md:w-xl"
      :schema="schema"
      :state="state"
      :validate-on="['input']"
      @submit.prevent="onSubmit"
    >
      <UFormField name="title" :label="t('settings.profile.social_links.title_label')">
        <UInput v-model="state.title" placeholder="YouTube" class="w-full" variant="subtle" icon="lucide:text" />
      </UFormField>

      <UFormField name="url" :label="t('settings.profile.social_links.url_label')">
        <UInput
          v-model="state.url"
          placeholder="https://youtube.com/@skiper"
          class="w-full"
          variant="subtle"
          icon="lucide:link"
        />
      </UFormField>

      <UButton
        :label="t('settings.profile.social_links.add')"
        type="submit"
        class=""
        size="xs"
        :disabled="isLoading"
        :loading="isLoading"
      />
    </UForm>
    <USeparator />
    <SocialLinkList
      v-if="userStore.user?.socialLinks?.length"
      :links="userStore.user?.socialLinks ?? []"
      :deleting-link-id="deletingLinkId"
      :editable="true"
      @remove="remove"
    />

    <div v-else>
      <Icon name="lucide:link" class="text-primary" />
      {{ t("settings.profile.social_links.empty") }}
    </div>
  </UCard>
</template>
