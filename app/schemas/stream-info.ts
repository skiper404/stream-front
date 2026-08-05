import z from "zod"
import { textField } from "./base/textField.schema"
import type { Composer } from "vue-i18n"

type Translate = Composer["t"]

export const streamInfoSchema = (t: Translate) =>
  z.object({
    title: textField(t),
    categoryId: textField(t)
  })

export type StreamInfoSchema = z.output<ReturnType<typeof streamInfoSchema>>
