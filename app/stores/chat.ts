import {
  ChangeChatSettingsDocument,
  ChatMessageAddedDocument,
  FindChatMessagesByStreamDocument,
  GetAllMessagesDocument,
  SendChatMessageDocument,
  type FindChatMessagesByStreamQuery
} from "~/graphql/generated/graphql"

export const useChatStore = defineStore("chat", () => {
  const { $apollo } = useNuxtApp()

  const messages = ref<FindChatMessagesByStreamQuery["findChatMessagesByStream"]>([])

  const getMessages = async () => {
    const { data } = await $apollo.query({ query: GetAllMessagesDocument, fetchPolicy: "network-only" })
    messages.value = data?.getAllMessages ?? []
  }

  const sendMessage = async (text: string, streamId: string) => {
    await $apollo.mutate({
      mutation: SendChatMessageDocument,
      variables: { data: { text, streamId } },
      fetchPolicy: "network-only"
    })
  }

  const chatMessageAdded = async (streamId: string) => {
    $apollo.subscribe({ query: ChatMessageAddedDocument, variables: { streamId } }).subscribe({
      next({ data }) {
        if (data?.chatMessageAdded) {
          messages.value.push(data.chatMessageAdded)
        }
      }
    })
  }

  const changeChatSetting = async (
    isChatEnabled: boolean,
    isChatFollowersOnly: boolean,
    isChatPremiumFollowersOnly: boolean
  ) => {
    await $apollo.mutate({
      mutation: ChangeChatSettingsDocument,
      variables: { data: { isChatEnabled, isChatFollowersOnly, isChatPremiumFollowersOnly } },
      fetchPolicy: "network-only"
    })
  }

  return { messages, getMessages, sendMessage, chatMessageAdded, changeChatSetting }
})
