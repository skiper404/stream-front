import z from "zod"
import { passwordField } from "./base/password.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const deleteUserSchema = (t: Translate) =>
  z.object({
    password: passwordField(t)
  })

export type DeleteUserSchema = z.output<ReturnType<typeof deleteUserSchema>>
