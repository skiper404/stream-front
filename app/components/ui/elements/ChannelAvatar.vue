<script setup lang="ts">
import type { GetUserQuery } from "~/graphql/generated/graphql"

type User = NonNullable<GetUserQuery["getUser"]>

const props = defineProps<{ user: User }>()
</script>

<template>
  <UAvatar
    :src="props.user.avatar ?? undefined"
    :alt="props.user.username"
    color="neutral"
    class="hover:border-success-500 cursor-pointer border-2 border-neutral-500 transition"
  />
</template>
