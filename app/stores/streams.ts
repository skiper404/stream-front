import {
  GenerateStreamTokenDocument,
  GetAllStreamsDocument,
  type GetAllStreamsQuery
} from "~/graphql/generated/graphql"

export const useStreamsStore = defineStore("streams", () => {
  const userStore = useUserStore()

  const { $apollo } = useNuxtApp()

  const streamToken = ref<string | null>(null)
  const streams = ref<GetAllStreamsQuery["getAllStreams"] | null>(null)

  const getStreams = async () => {
    const { data } = await $apollo.query({
      query: GetAllStreamsDocument,
      variables: { filters: { searchTerm: "", skip: 0, take: 12 } },
      fetchPolicy: "network-only"
    })
    streams.value = data?.getAllStreams ?? null
  }

  const generateStreamToken = async () => {
    const { data } = await $apollo.mutate({
      mutation: GenerateStreamTokenDocument,
      variables: { data: { userId: userStore.user?.id!, channelId: userStore.user?.id! } }
    })
    streamToken.value = data?.generateStreamToken.token ?? null
  }

  return { streams, streamToken, getStreams, generateStreamToken }
})
