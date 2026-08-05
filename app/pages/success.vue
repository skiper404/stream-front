<script setup lang="ts">
const route = useRoute()
const { t, locale } = useI18n()

const price = computed(() => Number(route.query.price))
const username = computed(() => String(route.query.username ?? ""))

if (!price.value || !username.value) {
  await navigateTo("/")
}

useSeoMeta({
  title: t("seo.success.title"),
  description: t("seo.success.description"),
  robots: "noindex,nofollow"
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <UCard class="w-full max-w-2xl" variant="soft">
      <template #header>
        <div class="text-center">
          <div class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <Icon name="lucide:circle-check" />
          </div>

          <h1 class="text-3xl font-bold">
            {{ t("success.title") }}
          </h1>
        </div>
      </template>

      <div class="space-y-6">
        <div class="bg-muted rounded-lg p-4">
          <h2 class="mb-3 font-semibold">
            {{ t("success.details") }}
          </h2>

          <ul class="space-y-2">
            <li class="flex justify-between">
              <span>{{ t("success.price") }}</span>
              <span>{{ Intl.NumberFormat(locale, { style: "currency", currency: "USD" }).format(price) }}</span>
            </li>

            <li class="flex justify-between">
              <span>{{ t("success.duration") }}</span>
              <span>{{ t("success.one_month") }}</span>
            </li>

            <li class="flex justify-between">
              <span>Channel</span>
              <span>{{ username }}</span>
            </li>
          </ul>
        </div>

        <p class="text-muted-foreground text-center">
          {{ t("success.thank_you") }}
        </p>
      </div>

      <template #footer>
        <div class="space-y-4">
          <div class="flex flex-col gap-3 sm:flex-row">
            <UButton to="/" block>
              {{ t("common.back_home") }}
            </UButton>

            <UButton :to="`/${username}`" variant="soft" block> {{ t("success.back_to_channel") }} </UButton>
          </div>

          <p class="text-muted-foreground text-center text-sm">{{ t("success.contact_support") }}</p>
        </div>
      </template>
    </UCard>
  </div>
</template>
