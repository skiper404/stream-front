import {
  CreateSocialLinkDocument,
  GetSocialLinksDocument,
  RemoveSocialLinkDocument,
  type GetSocialLinksQuery
} from "~/graphql/generated/graphql"

export const useSocialLinksStore = defineStore("socialLinks", () => {
  const { $apollo } = useNuxtApp()

  const socialLinks = ref<GetSocialLinksQuery["getSocialLinks"] | null>(null)

  const getSocialLinks = async () => {
    const { data } = await $apollo.query({ query: GetSocialLinksDocument, fetchPolicy: "network-only" })
    socialLinks.value = data?.getSocialLinks ?? null
  }

  const createLink = async (title: string, url: string) => {
    await $apollo.mutate({
      mutation: CreateSocialLinkDocument,
      variables: { data: { title, url } }
    })
    await getSocialLinks()
  }

  const deleteLink = async (id: string) => {
    await $apollo.mutate({ mutation: RemoveSocialLinkDocument, variables: { id } })
    await getSocialLinks()
  }

  return { socialLinks, getSocialLinks, createLink, deleteLink }
})
