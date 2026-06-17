import z from "zod"

export const loginUserSchema = z.object({
  login: z
    .string("Username or email required")
    .min(1, "Username or email required")
    .max(30, "Max length 30 characters"),
  password: z
    .string("Password is required")
    .min(8, "Must be at least 8 characters")
    .max(50, "Max password length 50 characters")
})

export type LoginUserSchema = z.output<typeof loginUserSchema>
