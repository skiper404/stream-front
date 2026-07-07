// import {
//   FindMyFollowersDocument,
//   FindMyFollowingsDocument,
//   FollowChannelDocument,
//   UnfollowChannelDocument,
//   type FindMyFollowersQuery,
//   type FindMyFollowingsQuery
// } from "~/graphql/generated/graphql"

// export const useFollowStore = defineStore("Follow", () => {
//   const { $apollo } = useNuxtApp()

//   const followers = ref<FindMyFollowersQuery["findMyFollowers"]>([])
//   const followings = ref<FindMyFollowingsQuery["findMyFollowings"]>([])

//   const findMyFollowers = async () => {
//     const { data } = await $apollo.query({ query: FindMyFollowersDocument, fetchPolicy: "network-only" })
//     followers.value = data?.findMyFollowers ?? []
//   }

//   const findMyFollowings = async () => {
//     const { data } = await $apollo.query({ query: FindMyFollowingsDocument, fetchPolicy: "network-only" })
//     followings.value = data?.findMyFollowings ?? []
//   }

//   const follow = async (channelId: string) => {
//     await $apollo.mutate({ mutation: FollowChannelDocument, variables: { channelId }, fetchPolicy: "network-only" })
//     await findMyFollowings()
//   }

//   const unfollow = async (channelId: string) => {
//     await $apollo.mutate({ mutation: UnfollowChannelDocument, variables: { channelId }, fetchPolicy: "network-only" })
//     await findMyFollowings()
//   }

//   return { followers, followings, findMyFollowers, findMyFollowings, follow, unfollow }
// })
