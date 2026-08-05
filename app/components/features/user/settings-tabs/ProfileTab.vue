<script setup lang="ts">
import ChangeAvatarForm from "../profile/ChangeAvatarForm.vue"
import ChangeInfoForm from "../profile/ChangeInfoForm.vue"
import SociaLinksForm from "../profile/social-links/SociaLinksForm.vue"

const { t } = useI18n()
</script>

<template>
  <UCard
    :title="t('settings.profile.title')"
    :description="t('settings.profile.description')"
    :ui="{ body: 'space-y-8' }"
  >
    <ChangeInfoForm />
    <ChangeAvatarForm />
    <SociaLinksForm />
  </UCard>
</template>
