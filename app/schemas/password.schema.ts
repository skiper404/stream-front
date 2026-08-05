import z from "zod"
import { passwordField } from "./base/password.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const passwordSchema = (t: Translate) =>
  z.object({
    oldPassword: passwordField(t),
    newPassword: passwordField(t)
  })

export type PasswordSchema = z.output<ReturnType<typeof passwordSchema>>
