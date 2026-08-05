import {
  ChangeChatSettingsDocument,
  ChatMessageAddedDocument,
  FindChatMessagesByStreamDocument,
  SendChatMessageDocument,
  type ChangeChatSettingsInput,
  type FindChatMessagesByStreamQuery
} from "~/graphql/generated/graphql"

export const useChat = () => {
  const { $apollo } = useNuxtApp()

  const messages = ref<FindChatMessagesByStreamQuery["findChatMessagesByStream"]>([])

  const findChatMessagesByStream = async (streamId: string) => {
    const { data } = await $apollo.query({
      query: FindChatMessagesByStreamDocument,
      variables: { streamId },
      fetchPolicy: "network-only"
    })

    messages.value = data?.findChatMessagesByStream ?? []
  }

  const subscribeToMessage = (streamId: string) => {
    return $apollo.subscribe({ query: ChatMessageAddedDocument, variables: { streamId } }).subscribe({
      next({ data }) {
        if (!data?.chatMessageAdded) return

        messages.value = [...messages.value, data.chatMessageAdded]
      }
    })
  }

  const clearMessages = () => {
    messages.value = []
  }

  const sendMessage = async (text: string, streamId: string) => {
    await $apollo.mutate({
      mutation: SendChatMessageDocument,
      variables: { data: { text, streamId } },
      fetchPolicy: "network-only"
    })
  }

  const changeChatSetting = async (data: ChangeChatSettingsInput) => {
    await $apollo.mutate({
      mutation: ChangeChatSettingsDocument,
      variables: { data },
      fetchPolicy: "network-only"
    })
  }

  return { messages, findChatMessagesByStream, sendMessage, subscribeToMessage, changeChatSetting, clearMessages }
}
