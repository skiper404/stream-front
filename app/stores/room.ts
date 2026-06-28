import { GetRoomsDocument, type GetRoomsQuery } from "~/graphql/generated/graphql"

export const useRoomsStore = defineStore("rooms", () => {
  const { $apollo } = useNuxtApp()

  const rooms = ref<GetRoomsQuery["getRooms"] | null>(null)

  const getRooms = async () => {
    const { data } = await $apollo.query({
      query: GetRoomsDocument
    })
    rooms.value = data?.getRooms ?? null
  }

  return { rooms, getRooms }
})
