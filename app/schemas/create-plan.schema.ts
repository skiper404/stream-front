import z from "zod"
import { textField } from "./base/textField.schema"
import type { Composer } from "vue-i18n"

export type Translate = Composer["t"]

export const createPlanSchema = (t: Translate) =>
  z.object({
    title: textField(t),
    description: z.string().optional(),
    price: z.number().positive(t("validation.positive_number"))
  })

export type TypeCreatePlanSchema = z.output<ReturnType<typeof createPlanSchema>>
