import z from "zod"

export const bioSchema = z.object({
  bio: z.string().transform(value => value.trim().replace(/\s+/g, " "))
})

export type BioSchema = z.output<typeof bioSchema>
