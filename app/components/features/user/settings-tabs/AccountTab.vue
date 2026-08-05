<script setup lang="ts">
import ChangeEmailForm from "../account/ChangeEmailForm.vue"
import ChangePasswordForm from "../account/ChangePasswordForm.vue"
import DeleteUserCard from "../account/DeleteUserCard.vue"

const { t } = useI18n()
</script>

<template>
  <UCard
    :title="t('settings.account.title')"
    :description="t('settings.account.description')"
    :ui="{ body: 'space-y-8' }"
  >
    <ChangeEmailForm />
    <ChangePasswordForm />
    <DeleteUserCard />
  </UCard>
</template>
