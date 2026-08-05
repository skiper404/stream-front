import z from "zod"
import { textField } from "./base/textField.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const socialLinkSchema = (t: Translate) =>
  z.object({
    title: textField(t),
    url: textField(t)
  })

export type SocialLinkSchema = z.output<ReturnType<typeof socialLinkSchema>>
