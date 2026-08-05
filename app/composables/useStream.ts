import {
  ChangeStreamInfoDocument,
  ChangeStreamThumbnailDocument,
  CreateIngressDocument,
  FindRandomStreamsDocument,
  GenerateStreamTokenDocument,
  GetAllStreamsDocument,
  RemoveStreamThumbnailDocument
} from "~/graphql/generated/graphql"

interface Filters {
  searchTerm: string
  skip: number
  take: number
}

export const useStream = () => {
  const { $apollo } = useNuxtApp()
  const userStore = useUserStore()

  const getStreams = async (filters: Filters) => {
    const { data } = await $apollo.query({
      query: GetAllStreamsDocument,
      variables: { filters },
      fetchPolicy: "network-only"
    })
    return data?.getAllStreams ?? []
  }

  const findRandomStreams = async () => {
    const { data } = await $apollo.query({ query: FindRandomStreamsDocument })
    return data?.findRandomStreams ?? []
  }

  const changeStreamInfo = async (title: string, categoryId: string) => {
    await $apollo.mutate({ mutation: ChangeStreamInfoDocument, variables: { data: { title, categoryId } } })
  }

  const changeStreamThumbnail = async (thumbnail: File) => {
    await $apollo.mutate({ mutation: ChangeStreamThumbnailDocument, variables: { thumbnail } })
  }

  const removeStreamThumbnail = async () => {
    await $apollo.mutate({ mutation: RemoveStreamThumbnailDocument })
  }

  const generateStreamToken = async (channelId: string) => {
    const { data } = await $apollo.mutate({
      mutation: GenerateStreamTokenDocument,
      variables: { data: { channelId } }
    })

    return data?.generateStreamToken ?? null
  }

  const createIngress = async () => {
    const { data } = await $apollo.mutate({
      mutation: CreateIngressDocument,
      fetchPolicy: "network-only"
    })
    return data?.createIngress ?? null
  }

  return {
    getStreams,
    findRandomStreams,
    changeStreamInfo,
    changeStreamThumbnail,
    removeStreamThumbnail,
    generateStreamToken,
    createIngress
  }
}
