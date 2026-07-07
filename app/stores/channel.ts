// import {
//   FindChannelByUsernameDocument,
//   FindFollowersCountByChannelDocument,
//   FindRecommendedChannelsDocument,
//   type FindChannelByUsernameQuery,
//   type FindFollowersCountByChannelQuery,
//   type FindRecommendedChannelsQuery
// } from "~/graphql/generated/graphql"

// export const useChannelStore = defineStore("ChannelStore", () => {
//   const { $apollo } = useNuxtApp()

//   const recommendedChannels = ref<FindRecommendedChannelsQuery["findRecommendedChannels"]>([])
//   const channelByUsername = ref<FindChannelByUsernameQuery["findChannelByUsername"] | null>(null)
//   const followersCountByChannel = ref<FindFollowersCountByChannelQuery["findFollowersCountByChannel"]>(0)

//   const findRecommendedChannels = async () => {
//     const { data } = await $apollo.query({ query: FindRecommendedChannelsDocument, fetchPolicy: "network-only" })
//     recommendedChannels.value = data?.findRecommendedChannels ?? []
//   }

//   const findChannelByUsername = async (username: string) => {
//     const { data } = await $apollo.query({
//       query: FindChannelByUsernameDocument,
//       variables: { username },
//       fetchPolicy: "network-only"
//     })
//     channelByUsername.value = data?.findChannelByUsername ?? null

//     return channelByUsername.value
//   }

//   const findFollowersCountByChannel = async (channelId: string) => {
//     const { data } = await $apollo.query({
//       query: FindFollowersCountByChannelDocument,
//       variables: { channelId },
//       fetchPolicy: "network-only"
//     })
//     followersCountByChannel.value = data?.findFollowersCountByChannel ?? 0
//   }

//   return {
//     recommendedChannels,
//     channelByUsername,
//     followersCountByChannel,
//     findChannelByUsername,
//     findFollowersCountByChannel,
//     findRecommendedChannels
//   }
// })
