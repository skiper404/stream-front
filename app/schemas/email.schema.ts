import z from "zod"
import { emailField } from "./base/email.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const emailSchema = (t: Translate) =>
  z.object({
    email: emailField(t)
  })

export type EmailSchema = z.output<ReturnType<typeof emailSchema>>
