<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui"
import z from "zod"

const toast = useToast()

const searchSchema = z.object({
  searchQuery: z.string().trim()
})

type SearchSchema = z.output<typeof searchSchema>

const searchState = reactive<SearchSchema>({ searchQuery: "" })

const onSubmit = (event: FormSubmitEvent<SearchSchema>) => {
  toast.add({ title: event.data.searchQuery })
  console.log(event.data)
  searchState.searchQuery = ""
}
</script>

<template>
  <div class="flex flex-1 justify-center transition-all sm:mx-10">
    <UForm :schema="searchSchema" :state="searchState" @submit="onSubmit" class="w-full">
      <UFieldGroup class="w-full">
        <UInput
          class="w-full outline-none"
          variant="subtle"
          placeholder="Grand Theft Auto VI"
          v-model="searchState.searchQuery"
        />
        <UButton
          :class="['z-1 flex w-20 cursor-pointer justify-center transition-all']"
          icon="lucide:search"
          variant="subtle"
          type="submit"
        />
      </UFieldGroup>
    </UForm>
  </div>
</template>
