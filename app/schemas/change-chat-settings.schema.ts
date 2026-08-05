import z from "zod"
export enum ChatMode {
  DISABLED = "DISABLED",
  EVERYONE = "EVERYONE",
  FOLLOWERS = "FOLLOWERS",
  SPONSORS = "SPONSORS"
}

export const chatSettingsSchema = z.object({
  chatMode: z.enum(ChatMode)
})

export type ChatSettingsSchema = z.output<typeof chatSettingsSchema>
