import z from "zod"
import { textField } from "./base/textField.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const sendMessageSchema = (t: Translate) =>
  z.object({
    text: textField(t)
  })

export type SendMessageSchema = z.output<ReturnType<typeof sendMessageSchema>>
