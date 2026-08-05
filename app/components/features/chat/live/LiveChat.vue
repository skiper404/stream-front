<script setup lang="ts">
import type { FindChannelByUsernameQuery } from "~/graphql/generated/graphql"
import MessageList from "./MessageList.vue"
import SendMessageForm from "./SendMessageForm.vue"
import { ChatMode } from "~/schemas/change-chat-settings.schema.js"

const { t } = useI18n()

const props = defineProps<{
  channel: FindChannelByUsernameQuery["findChannelByUsername"]
  chatMode: string
}>()

const userStore = useUserStore()
const { hasVideoTrack, isConnected } = useLiveKitRoom()
const { findMyFollowings } = useFollow()
const { findSponsorsByChannel } = useSponsorship()

const { data: followings } = useAsyncData("followings", () => findMyFollowings(), { default: () => [] })
const { data: sponsors } = useAsyncData("sponsors", () => findSponsorsByChannel(props.channel.id), {
  default: () => []
})

const isOwnerChannel = computed(() => userStore.user?.id === props.channel.id)
const isFollowing = computed(() => followings.value.some(following => following.following?.id === props.channel.id))
const isSponsor = computed(() => sponsors.value.some(sponsor => sponsor.user.id === userStore.user?.id))
const isOnline = computed(() => isConnected.value && hasVideoTrack.value)
const isAuth = computed(() => !!userStore.user)

const canWrite = computed(() => {
  // хост может писать
  if (isOwnerChannel.value) return true
  // хост не может
  if (!isAuth.value) return false
  // выбранный чат мод
  switch (props.chatMode) {
    case ChatMode.DISABLED:
      return false

    case ChatMode.EVERYONE:
      return true

    case ChatMode.FOLLOWERS:
      return isFollowing.value

    case ChatMode.SPONSORS:
      return isSponsor.value
  }
})

const isDisabled = computed(() => !canWrite.value)

const chatInfo = computed(() => {
  // вы управляете этим чатом
  if (isOwnerChannel.value) return t("chat.owner")
  // войдите что бы писать сообщения
  if (!isAuth.value) return t("chat.login_required")

  switch (props.chatMode) {
    case ChatMode.DISABLED:
      return t("chat.disabled") // чат недоступен

    case ChatMode.EVERYONE:
      return ""

    case ChatMode.FOLLOWERS:
      return isFollowing.value ? "" : t("chat.followers_only") // чат только для подписчиков

    case ChatMode.SPONSORS:
      return isSponsor.value ? "" : t("chat.sponsors_only") // чат только для спонсоров
  }
})
</script>

<template>
  <UCard
    v-if="isOnline"
    variant="soft"
    :description="chatInfo"
    :ui="{ body: 'min-h-0 flex-1 flex flex-col', root: 'flex flex-col h-full' }"
  >
    <template #title>
      <div class="flex items-center gap-2">
        <Icon name="lucide:messages-square" size="20" class="text-primary" />
        <div>{{ t("chat.title") }}</div>
      </div>
    </template>

    <MessageList :channel="channel" />

    <template #footer>
      <SendMessageForm :channel="channel" :isDisabled="isDisabled" />
    </template>
  </UCard>

  <UCard
    v-else
    variant="soft"
    :ui="{ body: 'justify-center flex flex-col h-full gap-2', root: 'flex flex-col h-full' }"
  >
    <div class="flex items-center gap-2">
      <Icon name="lucide:message-square-off" size="20" class="text-primary" />
      <h2>{{ t("chat.offline.title") }}</h2>
    </div>
    <p class="text-muted">
      {{ t("chat.offline.description") }}
    </p>
  </UCard>
</template>
