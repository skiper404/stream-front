import {
  FindAllCategoriesDocument,
  FindCategoryBySlugDocument,
  FindRandomCategoriesDocument
} from "~/graphql/generated/graphql"

export const useCategory = () => {
  const { $apollo } = useNuxtApp()

  const findAllCategories = async () => {
    const { data } = await $apollo.query({ query: FindAllCategoriesDocument, fetchPolicy: "network-only" })
    return data?.findAllCategories ?? []
  }

  const findRandomCategories = async () => {
    const { data } = await $apollo.query({ query: FindRandomCategoriesDocument, fetchPolicy: "network-only" })
    return data?.findRandomCategories ?? []
  }

  const findCategoryBySlug = async (slug: string) => {
    const { data } = await $apollo.query({
      query: FindCategoryBySlugDocument,
      variables: { slug },
      fetchPolicy: "network-only"
    })
    return data?.findCategoryBySlug ?? null
  }

  return { findAllCategories, findCategoryBySlug, findRandomCategories }
}
