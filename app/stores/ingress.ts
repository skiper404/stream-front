import {
  CreateIngressDocument,
  GetIngressesDocument,
  RemoveIngressesDocument,
  type GetIngressesQuery
} from "~/graphql/generated/graphql"

export const useIngressesStore = defineStore("ingresses", () => {
  const { $apollo } = useNuxtApp()

  const ingresses = ref<GetIngressesQuery["getIngresses"] | null>(null)

  const getIngresses = async () => {
    const { data } = await $apollo.query({
      query: GetIngressesDocument,
      fetchPolicy: "network-only"
    })

    ingresses.value = data?.getIngresses ?? null
    console.log("ингрессы на фронте", data?.getIngresses)
  }

  const createIngress = async () => {
    await $apollo.mutate({
      mutation: CreateIngressDocument
    })
    await getIngresses()
  }

  const removeIngresses = async () => {
    await $apollo.mutate({
      mutation: RemoveIngressesDocument
    })
    await getIngresses()
  }

  return { ingresses, getIngresses, createIngress, removeIngresses }
})
