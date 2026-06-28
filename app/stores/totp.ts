import { DisableTotpDocument, EnableTotpDocument, GenerateTotpSecretDocument } from "~/graphql/generated/graphql"

export const useTotpStore = defineStore("totp", () => {
  const { $apollo } = useNuxtApp()

  const totp = ref<{ qrcodeUrl: string; secret: string } | null>(null)

  const generateTotpSecret = async () => {
    try {
      const { data } = await $apollo.query({ query: GenerateTotpSecretDocument, fetchPolicy: "network-only" })

      totp.value = data?.generateTotpSecret ?? null
    } catch (e: any) {
      console.log(e)
    }
  }

  const enableTotp = async (pin: string, secret: string) => {
    await $apollo.mutate({
      mutation: EnableTotpDocument,
      variables: { data: { pin, secret } }
    })
  }

  const disableTotp = async () => {
    await $apollo.mutate({ mutation: DisableTotpDocument })
  }

  return { totp, generateTotpSecret, enableTotp, disableTotp }
})
