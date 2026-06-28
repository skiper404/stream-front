import {
  FindAllCategoriesDocument,
  FindRandomCategoriesDocument,
  type FindAllCategoriesQuery
} from "~/graphql/generated/graphql"

export const useCategoryStore = defineStore("category", () => {
  const { $apollo } = useNuxtApp()

  const categories = ref<FindAllCategoriesQuery["findAllCategories"]>([])
  const randomCategories = ref<FindAllCategoriesQuery["findAllCategories"]>([])

  const findAllCategories = async () => {
    const { data } = await $apollo.query({ query: FindAllCategoriesDocument, fetchPolicy: "network-only" })
    categories.value = data?.findAllCategories ?? []
  }

  const findRandomCategories = async () => {
    const { data } = await $apollo.query({ query: FindRandomCategoriesDocument, fetchPolicy: "network-only" })
    randomCategories.value = data?.findRandomCategories ?? []
  }

  return { categories, randomCategories, findAllCategories, findRandomCategories }
})
