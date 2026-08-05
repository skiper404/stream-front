<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"

const { t } = useI18n()

const props = defineProps<{ channel: FindChannelByUsernameQuery["findChannelByUsername"] }>()

const toast = useToast()
const userStore = useUserStore()
const isLoading = ref(false)
const { follow, unfollow, findMyFollowings } = useFollow()

const { data: followings, refresh } = useAsyncData(`${props.channel.id}-followings`, () => findMyFollowings(), {
  default: () => []
})

const isOwnerChannel = computed(() => userStore.user?.id === props.channel.id)
const isExistingFollow = computed(() =>
  followings.value.some(following => following.following?.id === props.channel.id)
)

const followHandle = async (channelId: string) => {
  try {
    isLoading.value = true
    await follow(channelId)
    await refresh()
    toast.add({ title: t("follow.follow_success", { username: props.channel.username }) })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}
const unfollowHandle = async (channelId: string) => {
  try {
    isLoading.value = true
    await unfollow(channelId)
    await refreshNuxtData()
    toast.add({ title: t("follow.unfollow_success", { username: props.channel.username }) })
  } catch (e: any) {
    toast.add({ title: e.message })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <UButton
    v-if="!isOwnerChannel"
    :loading="isLoading"
    :disabled="isLoading"
    class="cursor-pointer"
    size="xs"
    :variant="isExistingFollow ? 'outline' : 'solid'"
    :label="isExistingFollow ? t('follow.unfollow') : t('follow.follow')"
    @click="isExistingFollow ? unfollowHandle(channel.id) : followHandle(channel.id)"
  />
</template>
