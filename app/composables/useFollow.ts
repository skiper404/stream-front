import {
  FindMyFollowersDocument,
  FindMyFollowingsDocument,
  FollowChannelDocument,
  UnfollowChannelDocument
} from "~/graphql/generated/graphql"

export const useFollow = () => {
  const { $apollo } = useNuxtApp()

  const findMyFollowers = async () => {
    const { data } = await $apollo.query({ query: FindMyFollowersDocument, fetchPolicy: "network-only" })
    return data?.findMyFollowers ?? []
  }

  const findMyFollowings = async () => {
    const { data } = await $apollo.query({
      query: FindMyFollowingsDocument,
      fetchPolicy: "network-only"
    })
    return data?.findMyFollowings ?? []
  }

  const follow = async (channelId: string) => {
    await $apollo.mutate({ mutation: FollowChannelDocument, variables: { channelId }, fetchPolicy: "network-only" })
  }

  const unfollow = async (channelId: string) => {
    await $apollo.mutate({ mutation: UnfollowChannelDocument, variables: { channelId }, fetchPolicy: "network-only" })
  }

  return { findMyFollowers, findMyFollowings, follow, unfollow }
}
