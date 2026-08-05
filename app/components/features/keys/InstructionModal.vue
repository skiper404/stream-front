<script setup lang="ts">
import Heading from "~/components/ui/Heading.vue"

const { t } = useI18n()
const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <UModal :ui="{ body: 'space-y-8', header: 'my-8' }" v-model:open="isOpen">
    <UButton
      :label="t('instructions.button')"
      @click="openModal"
      size="sm"
      class="cursor-pointer"
      icon="lucide:file-question-mark"
    />

    <template #title>
      <Heading :title="t('instructions.obs.step1.title')" :description="t('instructions.obs.step1.description')" />
    </template>

    <template #body>
      <UAlert
        icon="i-lucide-info"
        color="primary"
        variant="soft"
        :title="t('instructions.obs.before_start.title')"
        :description="t('instructions.obs.before_start.description')"
      />

      <section class="space-y-4">
        <Heading :title="t('instructions.obs.step1.title')" :description="t('instructions.obs.step1.description')" />

        <ol class="list-decimal space-y-4 pl-5">
          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step1.download_title") }}
            </p>

            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step1.download_description") }}
            </p>

            <UButton
              to="https://obsproject.com"
              target="_blank"
              trailing-icon="i-lucide-external-link"
              variant="link"
              class="px-0"
            >
              {{ t("instructions.obs.step1.download_button") }}
            </UButton>
          </li>

          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step1.copy_title") }}
            </p>

            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step1.copy_description") }}
            </p>
          </li>
        </ol>
      </section>

      <USeparator />

      <section class="space-y-4">
        <Heading :title="t('instructions.obs.step2.title')" :description="t('instructions.obs.step2.description')" />

        <ol class="list-decimal space-y-4 pl-5">
          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step2.open_obs_title") }}
            </p>
            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step2.open_obs_description") }}
            </p>
          </li>

          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step2.stream_settings_title") }}
            </p>
            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step2.stream_settings_description") }}
            </p>
          </li>

          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step2.credentials_title") }}
            </p>

            <ul class="text-muted mt-2 ml-5 list-disc space-y-1 text-sm">
              <li>{{ t("instructions.obs.step2.server_url") }}</li>
              <li>{{ t("instructions.obs.step2.stream_key") }}</li>
            </ul>
          </li>

          <li>
            {{ t("instructions.obs.step2.save_title") }}
            {{ t("instructions.obs.step2.save_description") }}
          </li>
        </ol>
      </section>

      <USeparator />

      <section class="space-y-4">
        <Heading :title="t('instructions.obs.step3.title')" :description="t('instructions.obs.step3.description')" />

        <ol class="list-decimal space-y-4 pl-5">
          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step3.start_title") }}
            </p>

            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step3.start_description") }}
            </p>
          </li>

          <li>
            <p class="font-medium">
              {{ t("instructions.obs.step3.check_title") }}
            </p>
            <p class="text-muted mt-1 text-sm">
              {{ t("instructions.obs.step3.check_description") }}
            </p>
          </li>
        </ol>
      </section>

      <UAlert
        icon="i-lucide-circle-check-big"
        color="success"
        variant="soft"
        :title="t('instructions.obs.success.title')"
        :description="t('instructions.obs.success.description')"
      />
    </template>

    <template #footer>
      <UButton :label="t('instructions.close')" variant="soft" class="mx-auto cursor-pointer" @click="closeModal" />
    </template>
  </UModal>
</template>
