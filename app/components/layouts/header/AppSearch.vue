<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import z from "zod"

const { t } = useI18n()
const localePath = useLocalePath()

const searchSchema = z.object({
  searchQuery: z.string().trim()
})

type SearchSchema = z.output<typeof searchSchema>

const searchState = reactive<SearchSchema>({ searchQuery: "" })

const onSubmit = async (event: FormSubmitEvent<SearchSchema>) => {
  await navigateTo(
    localePath({
      path: "/streams",
      query: event.data.searchQuery ? { searchTerm: event.data.searchQuery } : {}
    })
  )
}
</script>

<template>
  <div class="flex justify-center transition-all">
    <UForm :schema="searchSchema" :state="searchState" @submit="onSubmit" class="w-full">
      <UFieldGroup class="w-full">
        <UInput
          class="w-full"
          variant="subtle"
          :placeholder="t('search.placeholder')"
          v-model="searchState.searchQuery"
        />
        <UButton
          class="z-0 flex w-20 cursor-pointer justify-center transition-all"
          icon="lucide:search"
          variant="subtle"
          type="submit"
        />
      </UFieldGroup>
    </UForm>
  </div>
</template>
