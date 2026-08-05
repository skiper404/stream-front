import {
  FindChannelByUsernameDocument,
  FindFollowersCountByChannelDocument,
  FindRecommendedChannelsDocument
} from "~/graphql/generated/graphql"

export const useChannel = () => {
  const { $apollo } = useNuxtApp()

  const findRecommendedChannels = async () => {
    const { data } = await $apollo.query({ query: FindRecommendedChannelsDocument, fetchPolicy: "network-only" })
    return data?.findRecommendedChannels ?? []
  }

  const findChannelByUsername = async (username: string) => {
    const { data } = await $apollo.query({
      query: FindChannelByUsernameDocument,
      variables: { username },
      fetchPolicy: "network-only"
    })
    return data?.findChannelByUsername ?? null
  }

  const findFollowersCountByChannel = async (channelId: string) => {
    const { data } = await $apollo.query({
      query: FindFollowersCountByChannelDocument,
      variables: { channelId },
      fetchPolicy: "network-only"
    })
    return data?.findFollowersCountByChannel ?? 0
  }

  return { findRecommendedChannels, findChannelByUsername, findFollowersCountByChannel }
}
