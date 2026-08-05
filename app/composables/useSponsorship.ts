import {
  CreateSponsorshipPlanDocument,
  FindMySponsorsDocument,
  FindMySponsorshipPlansDocument,
  FindMyTransactionsDocument,
  FindSponsorsByChannelDocument,
  MakePaymentDocument,
  RemoveSponsorshipPlanDocument
} from "~/graphql/generated/graphql"

export const useSponsorship = () => {
  const { $apollo } = useNuxtApp()

  const findMySponsors = async () => {
    const { data } = await $apollo.query({ query: FindMySponsorsDocument, fetchPolicy: "network-only" })
    return data?.findMySponsors ?? []
  }

  const findSponsorsByChannel = async (channelId: string) => {
    const { data } = await $apollo.query({
      query: FindSponsorsByChannelDocument,
      variables: { channelId },
      fetchPolicy: "network-only"
    })
    return data?.findSponsorsByChannel ?? []
  }

  const findMySponsorshipPlans = async () => {
    const { data } = await $apollo.query({ query: FindMySponsorshipPlansDocument, fetchPolicy: "network-only" })
    return data?.findManySponsorshipPlans ?? []
  }

  const findMyTransactions = async () => {
    const { data } = await $apollo.query({ query: FindMyTransactionsDocument, fetchPolicy: "network-only" })
    return data?.findMyTransactions ?? []
  }

  const createSponsorshipPlan = async (title: string, price: number, description?: string) => {
    await $apollo.mutate({
      mutation: CreateSponsorshipPlanDocument,
      variables: { data: { title, price, description } }
    })
  }

  const removeSponsorshipPlan = async (planId: string) => {
    await $apollo.mutate({ mutation: RemoveSponsorshipPlanDocument, variables: { planId } })
  }

  const makePayment = async (planId: string) => {
    const { data } = await $apollo.mutate({ mutation: MakePaymentDocument, variables: { planId } })
    return data?.makePayment
  }

  return {
    findMySponsors,
    findSponsorsByChannel,
    findMySponsorshipPlans,
    findMyTransactions,
    createSponsorshipPlan,
    removeSponsorshipPlan,
    makePayment
  }
}
