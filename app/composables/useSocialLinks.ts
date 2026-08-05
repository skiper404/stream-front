import { CreateSocialLinkDocument, RemoveSocialLinkDocument } from "~/graphql/generated/graphql"

export const useSocialLinks = () => {
  const { $apollo } = useNuxtApp()

  const createSocialLink = async (title: string, url: string) => {
    await $apollo.mutate({
      mutation: CreateSocialLinkDocument,
      variables: { data: { title, url } },
      fetchPolicy: "network-only"
    })
  }

  const removeSocialLink = async (id: string) => {
    await $apollo.mutate({ mutation: RemoveSocialLinkDocument, variables: { id }, fetchPolicy: "network-only" })
  }

  return { createSocialLink, removeSocialLink }
}
