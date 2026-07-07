// import {
//   CreateIngressDocument,
//   GetIngressesDocument,
//   RemoveIngressesDocument,
//   type CreateIngressMutation,
//   type GetIngressesQuery
// } from "~/graphql/generated/graphql"

// export const useIngressesStore = defineStore("ingresses", () => {
//   const { $apollo } = useNuxtApp()

//   const ingress = ref<CreateIngressMutation["createIngress"] | null>(null)
//   const ingresses = ref<GetIngressesQuery["getIngresses"] | null>(null)

//   const getIngresses = async () => {
//     const { data } = await $apollo.query({
//       query: GetIngressesDocument,
//       fetchPolicy: "network-only"
//     })

//     ingresses.value = data?.getIngresses ?? null
//     console.log("ингрессы на фронте", data?.getIngresses)
//   }

//   const createIngress = async () => {
//     const { data } = await $apollo.mutate({
//       mutation: CreateIngressDocument
//     })
//     ingress.value = data?.createIngress ?? null
//     await getIngresses()
//   }

//   const removeIngresses = async () => {
//     await $apollo.mutate({
//       mutation: RemoveIngressesDocument
//     })

//     ingress.value = null

//     await getIngresses()
//   }

//   return { ingress, ingresses, getIngresses, createIngress, removeIngresses }
// })
