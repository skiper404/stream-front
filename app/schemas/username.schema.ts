import z from "zod"
import { usernameField } from "./base/username.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const usernameSchema = (t: Translate) =>
  z.object({
    username: usernameField(t)
  })

export type UsernameSchema = z.output<ReturnType<typeof usernameSchema>>
